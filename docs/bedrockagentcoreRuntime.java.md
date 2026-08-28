# `bedrockagentcoreRuntime` Submodule <a name="`bedrockagentcoreRuntime` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreRuntime <a name="BedrockagentcoreRuntime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntime;

BedrockagentcoreRuntime.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentRuntimeArtifact(BedrockagentcoreRuntimeAgentRuntimeArtifact)
    .agentRuntimeName(java.lang.String)
    .roleArn(java.lang.String)
//  .authorizerConfiguration(BedrockagentcoreRuntimeAuthorizerConfiguration)
//  .capacityProviderConfiguration(BedrockagentcoreRuntimeCapacityProviderConfiguration)
//  .description(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .filesystemConfigurations(IResolvable|java.util.List<BedrockagentcoreRuntimeFilesystemConfigurations>)
//  .lifecycleConfiguration(BedrockagentcoreRuntimeLifecycleConfiguration)
//  .networkConfiguration(BedrockagentcoreRuntimeNetworkConfiguration)
//  .protocolConfiguration(java.lang.String)
//  .requestHeaderConfiguration(BedrockagentcoreRuntimeRequestHeaderConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.agentRuntimeArtifact">agentRuntimeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a></code> | The artifact of the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.agentRuntimeName">agentRuntimeName</a></code> | <code>java.lang.String</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of an IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a></code> | Authorizer configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.capacityProviderConfiguration">capacityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a></code> | Capacity provider configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.filesystemConfigurations">filesystemConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>></code> | Filesystem configurations for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a></code> | Lifecycle configuration for managing runtime sessions. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a></code> | Network access configuration for the Agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.protocolConfiguration">protocolConfiguration</a></code> | <code>java.lang.String</code> | Protocol configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.requestHeaderConfiguration">requestHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a></code> | Configuration for HTTP request headers. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentRuntimeArtifact`<sup>Required</sup> <a name="agentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.agentRuntimeArtifact"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

The artifact of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#agent_runtime_artifact BedrockagentcoreRuntime#agent_runtime_artifact}

---

##### `agentRuntimeName`<sup>Required</sup> <a name="agentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.agentRuntimeName"></a>

- *Type:* java.lang.String

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#agent_runtime_name BedrockagentcoreRuntime#agent_runtime_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Amazon Resource Name (ARN) of an IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#role_arn BedrockagentcoreRuntime#role_arn}

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.authorizerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

Authorizer configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#authorizer_configuration BedrockagentcoreRuntime#authorizer_configuration}

---

##### `capacityProviderConfiguration`<sup>Optional</sup> <a name="capacityProviderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.capacityProviderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a>

Capacity provider configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#capacity_provider_configuration BedrockagentcoreRuntime#capacity_provider_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#description BedrockagentcoreRuntime#description}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#environment_variables BedrockagentcoreRuntime#environment_variables}

---

##### `filesystemConfigurations`<sup>Optional</sup> <a name="filesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.filesystemConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>>

Filesystem configurations for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#filesystem_configurations BedrockagentcoreRuntime#filesystem_configurations}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.lifecycleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

Lifecycle configuration for managing runtime sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#lifecycle_configuration BedrockagentcoreRuntime#lifecycle_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

Network access configuration for the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#network_configuration BedrockagentcoreRuntime#network_configuration}

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.protocolConfiguration"></a>

- *Type:* java.lang.String

Protocol configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#protocol_configuration BedrockagentcoreRuntime#protocol_configuration}

---

##### `requestHeaderConfiguration`<sup>Optional</sup> <a name="requestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.requestHeaderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

Configuration for HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#request_header_configuration BedrockagentcoreRuntime#request_header_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAgentRuntimeArtifact">putAgentRuntimeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAuthorizerConfiguration">putAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putCapacityProviderConfiguration">putCapacityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putFilesystemConfigurations">putFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putRequestHeaderConfiguration">putRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetAuthorizerConfiguration">resetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetCapacityProviderConfiguration">resetCapacityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetFilesystemConfigurations">resetFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetProtocolConfiguration">resetProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetRequestHeaderConfiguration">resetRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentRuntimeArtifact` <a name="putAgentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAgentRuntimeArtifact"></a>

```java
public void putAgentRuntimeArtifact(BedrockagentcoreRuntimeAgentRuntimeArtifact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAgentRuntimeArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

---

##### `putAuthorizerConfiguration` <a name="putAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAuthorizerConfiguration"></a>

```java
public void putAuthorizerConfiguration(BedrockagentcoreRuntimeAuthorizerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

---

##### `putCapacityProviderConfiguration` <a name="putCapacityProviderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putCapacityProviderConfiguration"></a>

```java
public void putCapacityProviderConfiguration(BedrockagentcoreRuntimeCapacityProviderConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putCapacityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a>

---

##### `putFilesystemConfigurations` <a name="putFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putFilesystemConfigurations"></a>

```java
public void putFilesystemConfigurations(IResolvable|java.util.List<BedrockagentcoreRuntimeFilesystemConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putFilesystemConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>>

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putLifecycleConfiguration"></a>

```java
public void putLifecycleConfiguration(BedrockagentcoreRuntimeLifecycleConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(BedrockagentcoreRuntimeNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

---

##### `putRequestHeaderConfiguration` <a name="putRequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putRequestHeaderConfiguration"></a>

```java
public void putRequestHeaderConfiguration(BedrockagentcoreRuntimeRequestHeaderConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putRequestHeaderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

---

##### `resetAuthorizerConfiguration` <a name="resetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetAuthorizerConfiguration"></a>

```java
public void resetAuthorizerConfiguration()
```

##### `resetCapacityProviderConfiguration` <a name="resetCapacityProviderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetCapacityProviderConfiguration"></a>

```java
public void resetCapacityProviderConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetFilesystemConfigurations` <a name="resetFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetFilesystemConfigurations"></a>

```java
public void resetFilesystemConfigurations()
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetLifecycleConfiguration"></a>

```java
public void resetLifecycleConfiguration()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetProtocolConfiguration` <a name="resetProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetProtocolConfiguration"></a>

```java
public void resetProtocolConfiguration()
```

##### `resetRequestHeaderConfiguration` <a name="resetRequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetRequestHeaderConfiguration"></a>

```java
public void resetRequestHeaderConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntime;

BedrockagentcoreRuntime.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntime;

BedrockagentcoreRuntime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntime;

BedrockagentcoreRuntime.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntime;

BedrockagentcoreRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArn">agentRuntimeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifact">agentRuntimeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeId">agentRuntimeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.capacityProviderConfiguration">capacityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference">BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurations">filesystemConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList">BedrockagentcoreRuntimeFilesystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference">BedrockagentcoreRuntimeLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference">BedrockagentcoreRuntimeNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfiguration">requestHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference">BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.workloadIdentityDetails">workloadIdentityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference">BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifactInput">agentRuntimeArtifactInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeNameInput">agentRuntimeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfigurationInput">authorizerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.capacityProviderConfigurationInput">capacityProviderConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurationsInput">filesystemConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfigurationInput">protocolConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfigurationInput">requestHeaderConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeName">agentRuntimeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfiguration">protocolConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentRuntimeArn`<sup>Required</sup> <a name="agentRuntimeArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArn"></a>

```java
public java.lang.String getAgentRuntimeArn();
```

- *Type:* java.lang.String

---

##### `agentRuntimeArtifact`<sup>Required</sup> <a name="agentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifact"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference getAgentRuntimeArtifact();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference</a>

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeId"></a>

```java
public java.lang.String getAgentRuntimeId();
```

- *Type:* java.lang.String

---

##### `agentRuntimeVersion`<sup>Required</sup> <a name="agentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeVersion"></a>

```java
public java.lang.String getAgentRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `authorizerConfiguration`<sup>Required</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfiguration"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference getAuthorizerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference</a>

---

##### `capacityProviderConfiguration`<sup>Required</sup> <a name="capacityProviderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.capacityProviderConfiguration"></a>

```java
public BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference getCapacityProviderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference">BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `filesystemConfigurations`<sup>Required</sup> <a name="filesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurations"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsList getFilesystemConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList">BedrockagentcoreRuntimeFilesystemConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfiguration"></a>

```java
public BedrockagentcoreRuntimeLifecycleConfigurationOutputReference getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference">BedrockagentcoreRuntimeLifecycleConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfiguration"></a>

```java
public BedrockagentcoreRuntimeNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference">BedrockagentcoreRuntimeNetworkConfigurationOutputReference</a>

---

##### `requestHeaderConfiguration`<sup>Required</sup> <a name="requestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfiguration"></a>

```java
public BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference getRequestHeaderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference">BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `workloadIdentityDetails`<sup>Required</sup> <a name="workloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.workloadIdentityDetails"></a>

```java
public BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference getWorkloadIdentityDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference">BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference</a>

---

##### `agentRuntimeArtifactInput`<sup>Optional</sup> <a name="agentRuntimeArtifactInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifactInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifact getAgentRuntimeArtifactInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

---

##### `agentRuntimeNameInput`<sup>Optional</sup> <a name="agentRuntimeNameInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeNameInput"></a>

```java
public java.lang.String getAgentRuntimeNameInput();
```

- *Type:* java.lang.String

---

##### `authorizerConfigurationInput`<sup>Optional</sup> <a name="authorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfiguration getAuthorizerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

---

##### `capacityProviderConfigurationInput`<sup>Optional</sup> <a name="capacityProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.capacityProviderConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeCapacityProviderConfiguration getCapacityProviderConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `filesystemConfigurationsInput`<sup>Optional</sup> <a name="filesystemConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurationsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeFilesystemConfigurations> getFilesystemConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>>

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeLifecycleConfiguration getLifecycleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

---

##### `protocolConfigurationInput`<sup>Optional</sup> <a name="protocolConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfigurationInput"></a>

```java
public java.lang.String getProtocolConfigurationInput();
```

- *Type:* java.lang.String

---

##### `requestHeaderConfigurationInput`<sup>Optional</sup> <a name="requestHeaderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeRequestHeaderConfiguration getRequestHeaderConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `agentRuntimeName`<sup>Required</sup> <a name="agentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeName"></a>

```java
public java.lang.String getAgentRuntimeName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfiguration"></a>

```java
public java.lang.String getProtocolConfiguration();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreRuntimeAgentRuntimeArtifact <a name="BedrockagentcoreRuntimeAgentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifact;

BedrockagentcoreRuntimeAgentRuntimeArtifact.builder()
//  .codeConfiguration(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration)
//  .containerConfiguration(BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a></code> | Representation of a code configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#container_configuration BedrockagentcoreRuntime#container_configuration}. |

---

##### `codeConfiguration`<sup>Optional</sup> <a name="codeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.codeConfiguration"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration getCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

Representation of a code configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#code_configuration BedrockagentcoreRuntime#code_configuration}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.containerConfiguration"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration getContainerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#container_configuration BedrockagentcoreRuntime#container_configuration}.

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration;

BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.builder()
//  .code(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode)
//  .entryPoint(java.util.List<java.lang.String>)
//  .runtime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a></code> | Object represents source code from zip file. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.entryPoint">entryPoint</a></code> | <code>java.util.List<java.lang.String></code> | List of entry points. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Managed runtime types. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.code"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode getCode();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

Object represents source code from zip file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#code BedrockagentcoreRuntime#code}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.entryPoint"></a>

```java
public java.util.List<java.lang.String> getEntryPoint();
```

- *Type:* java.util.List<java.lang.String>

List of entry points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#entry_point BedrockagentcoreRuntime#entry_point}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Managed runtime types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#runtime BedrockagentcoreRuntime#runtime}

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode;

BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode.builder()
//  .s3(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a></code> | S3 Location Configuration. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode.property.s3"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

S3 Location Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#s3 BedrockagentcoreRuntime#s3}

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3;

BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.builder()
//  .bucket(java.lang.String)
//  .prefix(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | S3 object key prefix. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.versionId">versionId</a></code> | <code>java.lang.String</code> | S3 object version ID. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#bucket BedrockagentcoreRuntime#bucket}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

S3 object key prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#prefix BedrockagentcoreRuntime#prefix}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

S3 object version ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#version_id BedrockagentcoreRuntime#version_id}

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration;

BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration.builder()
//  .containerUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri">containerUri</a></code> | <code>java.lang.String</code> | The ECR URI of the container. |

---

##### `containerUri`<sup>Optional</sup> <a name="containerUri" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri"></a>

```java
public java.lang.String getContainerUri();
```

- *Type:* java.lang.String

The ECR URI of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#container_uri BedrockagentcoreRuntime#container_uri}

---

### BedrockagentcoreRuntimeAuthorizerConfiguration <a name="BedrockagentcoreRuntimeAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfiguration;

BedrockagentcoreRuntimeAuthorizerConfiguration.builder()
//  .customJwtAuthorizer(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Configuration for custom JWT authorizer. |

---

##### `customJwtAuthorizer`<sup>Optional</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer getCustomJwtAuthorizer();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

Configuration for custom JWT authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#custom_jwt_authorizer BedrockagentcoreRuntime#custom_jwt_authorizer}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.builder()
//  .allowedAudience(java.util.List<java.lang.String>)
//  .allowedClients(java.util.List<java.lang.String>)
//  .allowedScopes(java.util.List<java.lang.String>)
//  .allowedWorkloadConfiguration(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration)
//  .customClaims(IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims>)
//  .discoveryUrl(java.lang.String)
//  .privateEndpoint(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint)
//  .privateEndpointOverrides(IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowedAudience</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed audiences. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed clients. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed scopes. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedWorkloadConfiguration">allowedWorkloadConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a></code> | Allow-list of upstream workloads permitted to reach this resource via the workload identity chain. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">customClaims</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>></code> | List of required custom claims. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | OpenID Connect discovery URL. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverrides">privateEndpointOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>></code> | List of private endpoint overrides. |

---

##### `allowedAudience`<sup>Optional</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```java
public java.util.List<java.lang.String> getAllowedAudience();
```

- *Type:* java.util.List<java.lang.String>

List of allowed audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#allowed_audience BedrockagentcoreRuntime#allowed_audience}

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

List of allowed clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#allowed_clients BedrockagentcoreRuntime#allowed_clients}

---

##### `allowedScopes`<sup>Optional</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

List of allowed scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#allowed_scopes BedrockagentcoreRuntime#allowed_scopes}

---

##### `allowedWorkloadConfiguration`<sup>Optional</sup> <a name="allowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedWorkloadConfiguration"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration getAllowedWorkloadConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

Allow-list of upstream workloads permitted to reach this resource via the workload identity chain.

When set, the data plane enforces that the introspected workload chain's caller matches one of the configured hosting environments or workload identities; absent means no chain enforcement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#allowed_workload_configuration BedrockagentcoreRuntime#allowed_workload_configuration}

---

##### `customClaims`<sup>Optional</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> getCustomClaims();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

List of required custom claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#custom_claims BedrockagentcoreRuntime#custom_claims}

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

OpenID Connect discovery URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#discovery_url BedrockagentcoreRuntime#discovery_url}

---

##### `privateEndpoint`<sup>Optional</sup> <a name="privateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint getPrivateEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#private_endpoint BedrockagentcoreRuntime#private_endpoint}

---

##### `privateEndpointOverrides`<sup>Optional</sup> <a name="privateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverrides"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides> getPrivateEndpointOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>>

List of private endpoint overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#private_endpoint_overrides BedrockagentcoreRuntime#private_endpoint_overrides}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.builder()
//  .hostingEnvironments(IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments>)
//  .workloadIdentities(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.hostingEnvironments">hostingEnvironments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>></code> | List of allow-listed hosting environments. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.workloadIdentities">workloadIdentities</a></code> | <code>java.util.List<java.lang.String></code> | List of allow-listed workload identity names. |

---

##### `hostingEnvironments`<sup>Optional</sup> <a name="hostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.hostingEnvironments"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments> getHostingEnvironments();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>>

List of allow-listed hosting environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#hosting_environments BedrockagentcoreRuntime#hosting_environments}

---

##### `workloadIdentities`<sup>Optional</sup> <a name="workloadIdentities" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.workloadIdentities"></a>

```java
public java.util.List<java.lang.String> getWorkloadIdentities();
```

- *Type:* java.util.List<java.lang.String>

List of allow-listed workload identity names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#workload_identities BedrockagentcoreRuntime#workload_identities}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the bedrock-agentcore hosting environment. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the bedrock-agentcore hosting environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#arn BedrockagentcoreRuntime#arn}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.builder()
//  .authorizingClaimMatchValue(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue)
//  .inboundTokenClaimName(java.lang.String)
//  .inboundTokenClaimValueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | The value or values in the custom claim to match and relationship of match. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>java.lang.String</code> | The name of the custom claim to validate. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>java.lang.String</code> | Token claim data type. |

---

##### `authorizingClaimMatchValue`<sup>Optional</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue getAuthorizingClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

The value or values in the custom claim to match and relationship of match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#authorizing_claim_match_value BedrockagentcoreRuntime#authorizing_claim_match_value}

---

##### `inboundTokenClaimName`<sup>Optional</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```java
public java.lang.String getInboundTokenClaimName();
```

- *Type:* java.lang.String

The name of the custom claim to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#inbound_token_claim_name BedrockagentcoreRuntime#inbound_token_claim_name}

---

##### `inboundTokenClaimValueType`<sup>Optional</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```java
public java.lang.String getInboundTokenClaimValueType();
```

- *Type:* java.lang.String

Token claim data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#inbound_token_claim_value_type BedrockagentcoreRuntime#inbound_token_claim_value_type}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.builder()
//  .claimMatchOperator(java.lang.String)
//  .claimMatchValue(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">claimMatchOperator</a></code> | <code>java.lang.String</code> | The relationship between the claim field value and the value or values being matched. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | The value or values in the custom claim to match for. |

---

##### `claimMatchOperator`<sup>Optional</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```java
public java.lang.String getClaimMatchOperator();
```

- *Type:* java.lang.String

The relationship between the claim field value and the value or values being matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#claim_match_operator BedrockagentcoreRuntime#claim_match_operator}

---

##### `claimMatchValue`<sup>Optional</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue getClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

The value or values in the custom claim to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#claim_match_value BedrockagentcoreRuntime#claim_match_value}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.builder()
//  .matchValueString(java.lang.String)
//  .matchValueStringList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">matchValueString</a></code> | <code>java.lang.String</code> | The string value to match for. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">matchValueStringList</a></code> | <code>java.util.List<java.lang.String></code> | The list of strings to check for a match. |

---

##### `matchValueString`<sup>Optional</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```java
public java.lang.String getMatchValueString();
```

- *Type:* java.lang.String

The string value to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#match_value_string BedrockagentcoreRuntime#match_value_string}

---

##### `matchValueStringList`<sup>Optional</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```java
public java.util.List<java.lang.String> getMatchValueStringList();
```

- *Type:* java.util.List<java.lang.String>

The list of strings to check for a match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#match_value_string_list BedrockagentcoreRuntime#match_value_string_list}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.builder()
//  .managedVpcResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource)
//  .selfManagedLatticeResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | Managed VPC resource configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | Self-managed VPC Lattice resource configuration. |

---

##### `managedVpcResource`<sup>Optional</sup> <a name="managedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource getManagedVpcResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

Managed VPC resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#managed_vpc_resource BedrockagentcoreRuntime#managed_vpc_resource}

---

##### `selfManagedLatticeResource`<sup>Optional</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource getSelfManagedLatticeResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

Self-managed VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#self_managed_lattice_resource BedrockagentcoreRuntime#self_managed_lattice_resource}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.builder()
//  .endpointIpAddressType(java.lang.String)
//  .routingDomain(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>java.lang.String</code> | The IP address type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain">routingDomain</a></code> | <code>java.lang.String</code> | An intermediate domain to use as the resource configuration endpoint instead of the actual target domain. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The security group IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The subnet IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Tags to apply to the managed VPC Lattice resource gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | The VPC identifier. |

---

##### `endpointIpAddressType`<sup>Optional</sup> <a name="endpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```java
public java.lang.String getEndpointIpAddressType();
```

- *Type:* java.lang.String

The IP address type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#endpoint_ip_address_type BedrockagentcoreRuntime#endpoint_ip_address_type}

---

##### `routingDomain`<sup>Optional</sup> <a name="routingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain"></a>

```java
public java.lang.String getRoutingDomain();
```

- *Type:* java.lang.String

An intermediate domain to use as the resource configuration endpoint instead of the actual target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#routing_domain BedrockagentcoreRuntime#routing_domain}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#security_group_ids BedrockagentcoreRuntime#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#subnet_ids BedrockagentcoreRuntime#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Tags to apply to the managed VPC Lattice resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}

---

##### `vpcIdentifier`<sup>Optional</sup> <a name="vpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

The VPC identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#vpc_identifier BedrockagentcoreRuntime#vpc_identifier}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.builder()
//  .domain(java.lang.String)
//  .privateEndpoint(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain to override. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a></code> | Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#domain BedrockagentcoreRuntime#domain}

---

##### `privateEndpoint`<sup>Optional</sup> <a name="privateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.privateEndpoint"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint getPrivateEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#private_endpoint BedrockagentcoreRuntime#private_endpoint}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.builder()
//  .managedVpcResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource)
//  .selfManagedLatticeResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a></code> | Managed VPC resource configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a></code> | Self-managed VPC Lattice resource configuration. |

---

##### `managedVpcResource`<sup>Optional</sup> <a name="managedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.managedVpcResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource getManagedVpcResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

Managed VPC resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#managed_vpc_resource BedrockagentcoreRuntime#managed_vpc_resource}

---

##### `selfManagedLatticeResource`<sup>Optional</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.selfManagedLatticeResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource getSelfManagedLatticeResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

Self-managed VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#self_managed_lattice_resource BedrockagentcoreRuntime#self_managed_lattice_resource}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.builder()
//  .endpointIpAddressType(java.lang.String)
//  .routingDomain(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>java.lang.String</code> | The IP address type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.routingDomain">routingDomain</a></code> | <code>java.lang.String</code> | An intermediate domain to use as the resource configuration endpoint instead of the actual target domain. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The security group IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The subnet IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Tags to apply to the managed VPC Lattice resource gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | The VPC identifier. |

---

##### `endpointIpAddressType`<sup>Optional</sup> <a name="endpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```java
public java.lang.String getEndpointIpAddressType();
```

- *Type:* java.lang.String

The IP address type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#endpoint_ip_address_type BedrockagentcoreRuntime#endpoint_ip_address_type}

---

##### `routingDomain`<sup>Optional</sup> <a name="routingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.routingDomain"></a>

```java
public java.lang.String getRoutingDomain();
```

- *Type:* java.lang.String

An intermediate domain to use as the resource configuration endpoint instead of the actual target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#routing_domain BedrockagentcoreRuntime#routing_domain}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#security_group_ids BedrockagentcoreRuntime#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#subnet_ids BedrockagentcoreRuntime#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Tags to apply to the managed VPC Lattice resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}

---

##### `vpcIdentifier`<sup>Optional</sup> <a name="vpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

The VPC identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#vpc_identifier BedrockagentcoreRuntime#vpc_identifier}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.builder()
//  .resourceConfigurationIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the VPC Lattice resource configuration. |

---

##### `resourceConfigurationIdentifier`<sup>Optional</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

The identifier of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#resource_configuration_identifier BedrockagentcoreRuntime#resource_configuration_identifier}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource;

BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.builder()
//  .resourceConfigurationIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the VPC Lattice resource configuration. |

---

##### `resourceConfigurationIdentifier`<sup>Optional</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

The identifier of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#resource_configuration_identifier BedrockagentcoreRuntime#resource_configuration_identifier}

---

### BedrockagentcoreRuntimeCapacityProviderConfiguration <a name="BedrockagentcoreRuntimeCapacityProviderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeCapacityProviderConfiguration;

BedrockagentcoreRuntimeCapacityProviderConfiguration.builder()
//  .capacityProviderArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration.property.capacityProviderArn">capacityProviderArn</a></code> | <code>java.lang.String</code> | ARN of the capacity provider. |

---

##### `capacityProviderArn`<sup>Optional</sup> <a name="capacityProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration.property.capacityProviderArn"></a>

```java
public java.lang.String getCapacityProviderArn();
```

- *Type:* java.lang.String

ARN of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#capacity_provider_arn BedrockagentcoreRuntime#capacity_provider_arn}

---

### BedrockagentcoreRuntimeConfig <a name="BedrockagentcoreRuntimeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeConfig;

BedrockagentcoreRuntimeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentRuntimeArtifact(BedrockagentcoreRuntimeAgentRuntimeArtifact)
    .agentRuntimeName(java.lang.String)
    .roleArn(java.lang.String)
//  .authorizerConfiguration(BedrockagentcoreRuntimeAuthorizerConfiguration)
//  .capacityProviderConfiguration(BedrockagentcoreRuntimeCapacityProviderConfiguration)
//  .description(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .filesystemConfigurations(IResolvable|java.util.List<BedrockagentcoreRuntimeFilesystemConfigurations>)
//  .lifecycleConfiguration(BedrockagentcoreRuntimeLifecycleConfiguration)
//  .networkConfiguration(BedrockagentcoreRuntimeNetworkConfiguration)
//  .protocolConfiguration(java.lang.String)
//  .requestHeaderConfiguration(BedrockagentcoreRuntimeRequestHeaderConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeArtifact">agentRuntimeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a></code> | The artifact of the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeName">agentRuntimeName</a></code> | <code>java.lang.String</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of an IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a></code> | Authorizer configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.capacityProviderConfiguration">capacityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a></code> | Capacity provider configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.filesystemConfigurations">filesystemConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>></code> | Filesystem configurations for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a></code> | Lifecycle configuration for managing runtime sessions. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a></code> | Network access configuration for the Agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.protocolConfiguration">protocolConfiguration</a></code> | <code>java.lang.String</code> | Protocol configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.requestHeaderConfiguration">requestHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a></code> | Configuration for HTTP request headers. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentRuntimeArtifact`<sup>Required</sup> <a name="agentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeArtifact"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifact getAgentRuntimeArtifact();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

The artifact of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#agent_runtime_artifact BedrockagentcoreRuntime#agent_runtime_artifact}

---

##### `agentRuntimeName`<sup>Required</sup> <a name="agentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeName"></a>

```java
public java.lang.String getAgentRuntimeName();
```

- *Type:* java.lang.String

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#agent_runtime_name BedrockagentcoreRuntime#agent_runtime_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of an IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#role_arn BedrockagentcoreRuntime#role_arn}

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.authorizerConfiguration"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfiguration getAuthorizerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

Authorizer configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#authorizer_configuration BedrockagentcoreRuntime#authorizer_configuration}

---

##### `capacityProviderConfiguration`<sup>Optional</sup> <a name="capacityProviderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.capacityProviderConfiguration"></a>

```java
public BedrockagentcoreRuntimeCapacityProviderConfiguration getCapacityProviderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a>

Capacity provider configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#capacity_provider_configuration BedrockagentcoreRuntime#capacity_provider_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#description BedrockagentcoreRuntime#description}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#environment_variables BedrockagentcoreRuntime#environment_variables}

---

##### `filesystemConfigurations`<sup>Optional</sup> <a name="filesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.filesystemConfigurations"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeFilesystemConfigurations> getFilesystemConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>>

Filesystem configurations for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#filesystem_configurations BedrockagentcoreRuntime#filesystem_configurations}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycleConfiguration"></a>

```java
public BedrockagentcoreRuntimeLifecycleConfiguration getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

Lifecycle configuration for managing runtime sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#lifecycle_configuration BedrockagentcoreRuntime#lifecycle_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.networkConfiguration"></a>

```java
public BedrockagentcoreRuntimeNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

Network access configuration for the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#network_configuration BedrockagentcoreRuntime#network_configuration}

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.protocolConfiguration"></a>

```java
public java.lang.String getProtocolConfiguration();
```

- *Type:* java.lang.String

Protocol configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#protocol_configuration BedrockagentcoreRuntime#protocol_configuration}

---

##### `requestHeaderConfiguration`<sup>Optional</sup> <a name="requestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.requestHeaderConfiguration"></a>

```java
public BedrockagentcoreRuntimeRequestHeaderConfiguration getRequestHeaderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

Configuration for HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#request_header_configuration BedrockagentcoreRuntime#request_header_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}

---

### BedrockagentcoreRuntimeFilesystemConfigurations <a name="BedrockagentcoreRuntimeFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurations;

BedrockagentcoreRuntimeFilesystemConfigurations.builder()
//  .capacityProviderVolume(BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume)
//  .efsAccessPoint(BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint)
//  .s3FilesAccessPoint(BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint)
//  .sessionStorage(BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.capacityProviderVolume">capacityProviderVolume</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume</a></code> | Configuration for a CapacityProvider-managed volume to mount into the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.efsAccessPoint">efsAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a></code> | Configuration for EFS access point filesystem. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.s3FilesAccessPoint">s3FilesAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a></code> | Configuration for S3 Files access point filesystem. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a></code> | Configuration for session storage. |

---

##### `capacityProviderVolume`<sup>Optional</sup> <a name="capacityProviderVolume" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.capacityProviderVolume"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume getCapacityProviderVolume();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume</a>

Configuration for a CapacityProvider-managed volume to mount into the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#capacity_provider_volume BedrockagentcoreRuntime#capacity_provider_volume}

---

##### `efsAccessPoint`<sup>Optional</sup> <a name="efsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.efsAccessPoint"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint getEfsAccessPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

Configuration for EFS access point filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#efs_access_point BedrockagentcoreRuntime#efs_access_point}

---

##### `s3FilesAccessPoint`<sup>Optional</sup> <a name="s3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.s3FilesAccessPoint"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint getS3FilesAccessPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

Configuration for S3 Files access point filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#s3_files_access_point BedrockagentcoreRuntime#s3_files_access_point}

---

##### `sessionStorage`<sup>Optional</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.sessionStorage"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage getSessionStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

Configuration for session storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#session_storage BedrockagentcoreRuntime#session_storage}

---

### BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume <a name="BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume;

BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume.builder()
//  .mountPath(java.lang.String)
//  .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Mount path for filesystem configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Name of the capacity provider volume. |

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Mount path for filesystem configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

Name of the capacity provider volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#volume_name BedrockagentcoreRuntime#volume_name}

---

### BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint <a name="BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint;

BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.builder()
//  .accessPointArn(java.lang.String)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | ARN of the EFS access point. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Mount path for filesystem configuration. |

---

##### `accessPointArn`<sup>Optional</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

ARN of the EFS access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#access_point_arn BedrockagentcoreRuntime#access_point_arn}

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Mount path for filesystem configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}

---

### BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint <a name="BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint;

BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.builder()
//  .accessPointArn(java.lang.String)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | ARN of the S3 Files access point. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Mount path for filesystem configuration. |

---

##### `accessPointArn`<sup>Optional</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

ARN of the S3 Files access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#access_point_arn BedrockagentcoreRuntime#access_point_arn}

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Mount path for filesystem configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}

---

### BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage <a name="BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage;

BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage.builder()
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Mount path for filesystem configuration. |

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Mount path for filesystem configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}

---

### BedrockagentcoreRuntimeLifecycleConfiguration <a name="BedrockagentcoreRuntimeLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeLifecycleConfiguration;

BedrockagentcoreRuntimeLifecycleConfiguration.builder()
//  .idleRuntimeSessionTimeout(java.lang.Number)
//  .maxLifetime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout">idleRuntimeSessionTimeout</a></code> | <code>java.lang.Number</code> | Timeout in seconds for idle runtime sessions. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.maxLifetime">maxLifetime</a></code> | <code>java.lang.Number</code> | Maximum lifetime in seconds for runtime sessions. |

---

##### `idleRuntimeSessionTimeout`<sup>Optional</sup> <a name="idleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout"></a>

```java
public java.lang.Number getIdleRuntimeSessionTimeout();
```

- *Type:* java.lang.Number

Timeout in seconds for idle runtime sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#idle_runtime_session_timeout BedrockagentcoreRuntime#idle_runtime_session_timeout}

---

##### `maxLifetime`<sup>Optional</sup> <a name="maxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.maxLifetime"></a>

```java
public java.lang.Number getMaxLifetime();
```

- *Type:* java.lang.Number

Maximum lifetime in seconds for runtime sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#max_lifetime BedrockagentcoreRuntime#max_lifetime}

---

### BedrockagentcoreRuntimeNetworkConfiguration <a name="BedrockagentcoreRuntimeNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeNetworkConfiguration;

BedrockagentcoreRuntimeNetworkConfiguration.builder()
//  .networkMode(java.lang.String)
//  .networkModeConfig(BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | Network mode configuration type. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkModeConfig">networkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a></code> | Network mode configuration for VPC. |

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

Network mode configuration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#network_mode BedrockagentcoreRuntime#network_mode}

---

##### `networkModeConfig`<sup>Optional</sup> <a name="networkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkModeConfig"></a>

```java
public BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig getNetworkModeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#network_mode_config BedrockagentcoreRuntime#network_mode_config}

---

### BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig;

BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.builder()
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Subnets for VPC. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#security_groups BedrockagentcoreRuntime#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#subnets BedrockagentcoreRuntime#subnets}

---

### BedrockagentcoreRuntimeRequestHeaderConfiguration <a name="BedrockagentcoreRuntimeRequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeRequestHeaderConfiguration;

BedrockagentcoreRuntimeRequestHeaderConfiguration.builder()
//  .requestHeaderAllowlist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist">requestHeaderAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed HTTP headers for agent runtime requests. |

---

##### `requestHeaderAllowlist`<sup>Optional</sup> <a name="requestHeaderAllowlist" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist"></a>

```java
public java.util.List<java.lang.String> getRequestHeaderAllowlist();
```

- *Type:* java.util.List<java.lang.String>

List of allowed HTTP headers for agent runtime requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_runtime#request_header_allowlist BedrockagentcoreRuntime#request_header_allowlist}

---

### BedrockagentcoreRuntimeWorkloadIdentityDetails <a name="BedrockagentcoreRuntimeWorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeWorkloadIdentityDetails;

BedrockagentcoreRuntimeWorkloadIdentityDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3"></a>

```java
public void putS3(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3Input"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetVersionId"></a>

```java
public void resetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCode` <a name="putCode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode"></a>

```java
public void putCode(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

---

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetEntryPoint"></a>

```java
public void resetEntryPoint()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.codeInput">codeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPoint">entryPoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.code"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference getCode();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.codeInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode getCodeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPointInput"></a>

```java
public java.util.List<java.lang.String> getEntryPointInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPoint"></a>

```java
public java.util.List<java.lang.String> getEntryPoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference;

new BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resetContainerUri">resetContainerUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerUri` <a name="resetContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resetContainerUri"></a>

```java
public void resetContainerUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput">containerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri">containerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerUriInput`<sup>Optional</sup> <a name="containerUriInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput"></a>

```java
public java.lang.String getContainerUriInput();
```

- *Type:* java.lang.String

---

##### `containerUri`<sup>Required</sup> <a name="containerUri" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```java
public java.lang.String getContainerUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference;

new BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration">putCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetCodeConfiguration">resetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfiguration` <a name="putCodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration"></a>

```java
public void putCodeConfiguration(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

---

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration"></a>

```java
public void putContainerConfiguration(BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---

##### `resetCodeConfiguration` <a name="resetCodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetCodeConfiguration"></a>

```java
public void resetCodeConfiguration()
```

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration"></a>

```java
public void resetContainerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfigurationInput">codeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfiguration`<sup>Required</sup> <a name="codeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfiguration"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference getCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference</a>

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration"></a>

```java
public BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference getContainerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference</a>

---

##### `codeConfigurationInput`<sup>Optional</sup> <a name="codeConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration getCodeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration getContainerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifact getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.get"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironments">putHostingEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetHostingEnvironments">resetHostingEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetWorkloadIdentities">resetWorkloadIdentities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostingEnvironments` <a name="putHostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironments"></a>

```java
public void putHostingEnvironments(IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironments.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>>

---

##### `resetHostingEnvironments` <a name="resetHostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetHostingEnvironments"></a>

```java
public void resetHostingEnvironments()
```

##### `resetWorkloadIdentities` <a name="resetWorkloadIdentities" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetWorkloadIdentities"></a>

```java
public void resetWorkloadIdentities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironments">hostingEnvironments</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironmentsInput">hostingEnvironmentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentitiesInput">workloadIdentitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentities">workloadIdentities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostingEnvironments`<sup>Required</sup> <a name="hostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironments"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList getHostingEnvironments();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList</a>

---

##### `hostingEnvironmentsInput`<sup>Optional</sup> <a name="hostingEnvironmentsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironmentsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments> getHostingEnvironmentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>>

---

##### `workloadIdentitiesInput`<sup>Optional</sup> <a name="workloadIdentitiesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentitiesInput"></a>

```java
public java.util.List<java.lang.String> getWorkloadIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workloadIdentities`<sup>Required</sup> <a name="workloadIdentities" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentities"></a>

```java
public java.util.List<java.lang.String> getWorkloadIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">resetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">resetMatchValueStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValueString` <a name="resetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```java
public void resetMatchValueString()
```

##### `resetMatchValueStringList` <a name="resetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```java
public void resetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">matchValueStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">matchValueStringListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">matchValueString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">matchValueStringList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValueStringInput`<sup>Optional</sup> <a name="matchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```java
public java.lang.String getMatchValueStringInput();
```

- *Type:* java.lang.String

---

##### `matchValueStringListInput`<sup>Optional</sup> <a name="matchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```java
public java.util.List<java.lang.String> getMatchValueStringListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValueString`<sup>Required</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```java
public java.lang.String getMatchValueString();
```

- *Type:* java.lang.String

---

##### `matchValueStringList`<sup>Required</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```java
public java.util.List<java.lang.String> getMatchValueStringList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">putClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">resetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">resetClaimMatchValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimMatchValue` <a name="putClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```java
public void putClaimMatchValue(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `resetClaimMatchOperator` <a name="resetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```java
public void resetClaimMatchOperator()
```

##### `resetClaimMatchValue` <a name="resetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```java
public void resetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">claimMatchOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">claimMatchValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claimMatchOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimMatchValue`<sup>Required</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference getClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `claimMatchOperatorInput`<sup>Optional</sup> <a name="claimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```java
public java.lang.String getClaimMatchOperatorInput();
```

- *Type:* java.lang.String

---

##### `claimMatchValueInput`<sup>Optional</sup> <a name="claimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue getClaimMatchValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `claimMatchOperator`<sup>Required</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```java
public java.lang.String getClaimMatchOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">putAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">resetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">resetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">resetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizingClaimMatchValue` <a name="putAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```java
public void putAuthorizingClaimMatchValue(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `resetAuthorizingClaimMatchValue` <a name="resetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```java
public void resetAuthorizingClaimMatchValue()
```

##### `resetInboundTokenClaimName` <a name="resetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```java
public void resetInboundTokenClaimName()
```

##### `resetInboundTokenClaimValueType` <a name="resetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```java
public void resetInboundTokenClaimValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">authorizingClaimMatchValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">inboundTokenClaimNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">inboundTokenClaimValueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizingClaimMatchValue`<sup>Required</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference getAuthorizingClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `authorizingClaimMatchValueInput`<sup>Optional</sup> <a name="authorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue getAuthorizingClaimMatchValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `inboundTokenClaimNameInput`<sup>Optional</sup> <a name="inboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```java
public java.lang.String getInboundTokenClaimNameInput();
```

- *Type:* java.lang.String

---

##### `inboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="inboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```java
public java.lang.String getInboundTokenClaimValueTypeInput();
```

- *Type:* java.lang.String

---

##### `inboundTokenClaimName`<sup>Required</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```java
public java.lang.String getInboundTokenClaimName();
```

- *Type:* java.lang.String

---

##### `inboundTokenClaimValueType`<sup>Required</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```java
public java.lang.String getInboundTokenClaimValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration">putAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">putCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint">putPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides">putPrivateEndpointOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">resetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">resetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedWorkloadConfiguration">resetAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">resetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint">resetPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverrides">resetPrivateEndpointOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedWorkloadConfiguration` <a name="putAllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration"></a>

```java
public void putAllowedWorkloadConfiguration(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

---

##### `putCustomClaims` <a name="putCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```java
public void putCustomClaims(IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

---

##### `putPrivateEndpoint` <a name="putPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint"></a>

```java
public void putPrivateEndpoint(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---

##### `putPrivateEndpointOverrides` <a name="putPrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides"></a>

```java
public void putPrivateEndpointOverrides(IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>>

---

##### `resetAllowedAudience` <a name="resetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```java
public void resetAllowedAudience()
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```java
public void resetAllowedClients()
```

##### `resetAllowedScopes` <a name="resetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```java
public void resetAllowedScopes()
```

##### `resetAllowedWorkloadConfiguration` <a name="resetAllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedWorkloadConfiguration"></a>

```java
public void resetAllowedWorkloadConfiguration()
```

##### `resetCustomClaims` <a name="resetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```java
public void resetCustomClaims()
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```java
public void resetDiscoveryUrl()
```

##### `resetPrivateEndpoint` <a name="resetPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint"></a>

```java
public void resetPrivateEndpoint()
```

##### `resetPrivateEndpointOverrides` <a name="resetPrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverrides"></a>

```java
public void resetPrivateEndpointOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfiguration">allowedWorkloadConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">customClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrides">privateEndpointOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowedAudienceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">allowedScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfigurationInput">allowedWorkloadConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">customClaimsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput">privateEndpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverridesInput">privateEndpointOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowedAudience</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedWorkloadConfiguration`<sup>Required</sup> <a name="allowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfiguration"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference getAllowedWorkloadConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference</a>

---

##### `customClaims`<sup>Required</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList getCustomClaims();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference getPrivateEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference</a>

---

##### `privateEndpointOverrides`<sup>Required</sup> <a name="privateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrides"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList getPrivateEndpointOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList</a>

---

##### `allowedAudienceInput`<sup>Optional</sup> <a name="allowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudienceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedWorkloadConfigurationInput`<sup>Optional</sup> <a name="allowedWorkloadConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration getAllowedWorkloadConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

---

##### `customClaimsInput`<sup>Optional</sup> <a name="customClaimsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> getCustomClaimsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```java
public java.lang.String getDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointInput`<sup>Optional</sup> <a name="privateEndpointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint getPrivateEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---

##### `privateEndpointOverridesInput`<sup>Optional</sup> <a name="privateEndpointOverridesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverridesInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides> getPrivateEndpointOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>>

---

##### `allowedAudience`<sup>Required</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```java
public java.util.List<java.lang.String> getAllowedAudience();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType">resetEndpointIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">resetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier">resetVpcIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointIpAddressType` <a name="resetEndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType"></a>

```java
public void resetEndpointIpAddressType()
```

##### `resetRoutingDomain` <a name="resetRoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```java
public void resetRoutingDomain()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcIdentifier` <a name="resetVpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier"></a>

```java
public void resetVpcIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">endpointIpAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">routingDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">routingDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointIpAddressTypeInput`<sup>Optional</sup> <a name="endpointIpAddressTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```java
public java.lang.String getEndpointIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `routingDomainInput`<sup>Optional</sup> <a name="routingDomainInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```java
public java.lang.String getRoutingDomainInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```java
public java.lang.String getVpcIdentifierInput();
```

- *Type:* java.lang.String

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```java
public java.lang.String getEndpointIpAddressType();
```

- *Type:* java.lang.String

---

##### `routingDomain`<sup>Required</sup> <a name="routingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```java
public java.lang.String getRoutingDomain();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource">putManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource">putSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource">resetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource">resetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedVpcResource` <a name="putManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource"></a>

```java
public void putManagedVpcResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---

##### `putSelfManagedLatticeResource` <a name="putSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```java
public void putSelfManagedLatticeResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---

##### `resetManagedVpcResource` <a name="resetManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource"></a>

```java
public void resetManagedVpcResource()
```

##### `resetSelfManagedLatticeResource` <a name="resetSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```java
public void resetSelfManagedLatticeResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput">managedVpcResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">selfManagedLatticeResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedVpcResource`<sup>Required</sup> <a name="managedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference getManagedVpcResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference</a>

---

##### `selfManagedLatticeResource`<sup>Required</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference getSelfManagedLatticeResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference</a>

---

##### `managedVpcResourceInput`<sup>Optional</sup> <a name="managedVpcResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource getManagedVpcResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---

##### `selfManagedLatticeResourceInput`<sup>Optional</sup> <a name="selfManagedLatticeResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource getSelfManagedLatticeResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint">putPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetPrivateEndpoint">resetPrivateEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateEndpoint` <a name="putPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint"></a>

```java
public void putPrivateEndpoint(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

---

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetPrivateEndpoint` <a name="resetPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetPrivateEndpoint"></a>

```java
public void resetPrivateEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpointInput">privateEndpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpoint"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference getPrivateEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointInput`<sup>Optional</sup> <a name="privateEndpointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpointInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint getPrivateEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType">resetEndpointIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">resetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier">resetVpcIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointIpAddressType` <a name="resetEndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType"></a>

```java
public void resetEndpointIpAddressType()
```

##### `resetRoutingDomain` <a name="resetRoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```java
public void resetRoutingDomain()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcIdentifier` <a name="resetVpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier"></a>

```java
public void resetVpcIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">endpointIpAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">routingDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">routingDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointIpAddressTypeInput`<sup>Optional</sup> <a name="endpointIpAddressTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```java
public java.lang.String getEndpointIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `routingDomainInput`<sup>Optional</sup> <a name="routingDomainInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```java
public java.lang.String getRoutingDomainInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```java
public java.lang.String getVpcIdentifierInput();
```

- *Type:* java.lang.String

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```java
public java.lang.String getEndpointIpAddressType();
```

- *Type:* java.lang.String

---

##### `routingDomain`<sup>Required</sup> <a name="routingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```java
public java.lang.String getRoutingDomain();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource">putManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource">putSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetManagedVpcResource">resetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetSelfManagedLatticeResource">resetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedVpcResource` <a name="putManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource"></a>

```java
public void putManagedVpcResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

---

##### `putSelfManagedLatticeResource` <a name="putSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```java
public void putSelfManagedLatticeResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

---

##### `resetManagedVpcResource` <a name="resetManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetManagedVpcResource"></a>

```java
public void resetManagedVpcResource()
```

##### `resetSelfManagedLatticeResource` <a name="resetSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```java
public void resetSelfManagedLatticeResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResourceInput">managedVpcResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">selfManagedLatticeResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedVpcResource`<sup>Required</sup> <a name="managedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference getManagedVpcResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference</a>

---

##### `selfManagedLatticeResource`<sup>Required</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference getSelfManagedLatticeResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference</a>

---

##### `managedVpcResourceInput`<sup>Optional</sup> <a name="managedVpcResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource getManagedVpcResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

---

##### `selfManagedLatticeResourceInput`<sup>Optional</sup> <a name="selfManagedLatticeResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource getSelfManagedLatticeResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier">resetResourceConfigurationIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationIdentifier` <a name="resetResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier"></a>

```java
public void resetResourceConfigurationIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">resourceConfigurationIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="resourceConfigurationIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```java
public java.lang.String getResourceConfigurationIdentifierInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier">resetResourceConfigurationIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationIdentifier` <a name="resetResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier"></a>

```java
public void resetResourceConfigurationIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">resourceConfigurationIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="resourceConfigurationIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```java
public java.lang.String getResourceConfigurationIdentifierInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference;

new BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">putCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">resetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomJwtAuthorizer` <a name="putCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```java
public void putCustomJwtAuthorizer(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `resetCustomJwtAuthorizer` <a name="resetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```java
public void resetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">customJwtAuthorizerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customJwtAuthorizer`<sup>Required</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```java
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference getCustomJwtAuthorizer();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `customJwtAuthorizerInput`<sup>Optional</sup> <a name="customJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer getCustomJwtAuthorizerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

---


### BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference <a name="BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference;

new BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.resetCapacityProviderArn">resetCapacityProviderArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityProviderArn` <a name="resetCapacityProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.resetCapacityProviderArn"></a>

```java
public void resetCapacityProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.capacityProviderArnInput">capacityProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.capacityProviderArn">capacityProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityProviderArnInput`<sup>Optional</sup> <a name="capacityProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.capacityProviderArnInput"></a>

```java
public java.lang.String getCapacityProviderArnInput();
```

- *Type:* java.lang.String

---

##### `capacityProviderArn`<sup>Required</sup> <a name="capacityProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.capacityProviderArn"></a>

```java
public java.lang.String getCapacityProviderArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeCapacityProviderConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeCapacityProviderConfiguration">BedrockagentcoreRuntimeCapacityProviderConfiguration</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference;

new BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.resetVolumeName"></a>

```java
public void resetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference;

new BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetAccessPointArn">resetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessPointArn` <a name="resetAccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetAccessPointArn"></a>

```java
public void resetAccessPointArn()
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArnInput">accessPointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPointArnInput`<sup>Optional</sup> <a name="accessPointArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArnInput"></a>

```java
public java.lang.String getAccessPointArnInput();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsList <a name="BedrockagentcoreRuntimeFilesystemConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsList;

new BedrockagentcoreRuntimeFilesystemConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.get"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreRuntimeFilesystemConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference;

new BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putCapacityProviderVolume">putCapacityProviderVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putEfsAccessPoint">putEfsAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putS3FilesAccessPoint">putS3FilesAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putSessionStorage">putSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetCapacityProviderVolume">resetCapacityProviderVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetEfsAccessPoint">resetEfsAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetS3FilesAccessPoint">resetS3FilesAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetSessionStorage">resetSessionStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityProviderVolume` <a name="putCapacityProviderVolume" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putCapacityProviderVolume"></a>

```java
public void putCapacityProviderVolume(BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putCapacityProviderVolume.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume</a>

---

##### `putEfsAccessPoint` <a name="putEfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putEfsAccessPoint"></a>

```java
public void putEfsAccessPoint(BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putEfsAccessPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

---

##### `putS3FilesAccessPoint` <a name="putS3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putS3FilesAccessPoint"></a>

```java
public void putS3FilesAccessPoint(BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putS3FilesAccessPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

---

##### `putSessionStorage` <a name="putSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putSessionStorage"></a>

```java
public void putSessionStorage(BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putSessionStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

---

##### `resetCapacityProviderVolume` <a name="resetCapacityProviderVolume" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetCapacityProviderVolume"></a>

```java
public void resetCapacityProviderVolume()
```

##### `resetEfsAccessPoint` <a name="resetEfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetEfsAccessPoint"></a>

```java
public void resetEfsAccessPoint()
```

##### `resetS3FilesAccessPoint` <a name="resetS3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetS3FilesAccessPoint"></a>

```java
public void resetS3FilesAccessPoint()
```

##### `resetSessionStorage` <a name="resetSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetSessionStorage"></a>

```java
public void resetSessionStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.capacityProviderVolume">capacityProviderVolume</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPoint">efsAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPoint">s3FilesAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.capacityProviderVolumeInput">capacityProviderVolumeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPointInput">efsAccessPointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPointInput">s3FilesAccessPointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorageInput">sessionStorageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityProviderVolume`<sup>Required</sup> <a name="capacityProviderVolume" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.capacityProviderVolume"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference getCapacityProviderVolume();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolumeOutputReference</a>

---

##### `efsAccessPoint`<sup>Required</sup> <a name="efsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPoint"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference getEfsAccessPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference</a>

---

##### `s3FilesAccessPoint`<sup>Required</sup> <a name="s3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPoint"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference getS3FilesAccessPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference</a>

---

##### `sessionStorage`<sup>Required</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorage"></a>

```java
public BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference getSessionStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference</a>

---

##### `capacityProviderVolumeInput`<sup>Optional</sup> <a name="capacityProviderVolumeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.capacityProviderVolumeInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume getCapacityProviderVolumeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume">BedrockagentcoreRuntimeFilesystemConfigurationsCapacityProviderVolume</a>

---

##### `efsAccessPointInput`<sup>Optional</sup> <a name="efsAccessPointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPointInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint getEfsAccessPointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

---

##### `s3FilesAccessPointInput`<sup>Optional</sup> <a name="s3FilesAccessPointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPointInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint getS3FilesAccessPointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

---

##### `sessionStorageInput`<sup>Optional</sup> <a name="sessionStorageInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorageInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage getSessionStorageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference;

new BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetAccessPointArn">resetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessPointArn` <a name="resetAccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetAccessPointArn"></a>

```java
public void resetAccessPointArn()
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArnInput">accessPointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPointArnInput`<sup>Optional</sup> <a name="accessPointArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArnInput"></a>

```java
public java.lang.String getAccessPointArnInput();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference;

new BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

---


### BedrockagentcoreRuntimeLifecycleConfigurationOutputReference <a name="BedrockagentcoreRuntimeLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference;

new BedrockagentcoreRuntimeLifecycleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout">resetIdleRuntimeSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime">resetMaxLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleRuntimeSessionTimeout` <a name="resetIdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout"></a>

```java
public void resetIdleRuntimeSessionTimeout()
```

##### `resetMaxLifetime` <a name="resetMaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```java
public void resetMaxLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput">idleRuntimeSessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput">maxLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">idleRuntimeSessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetime">maxLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleRuntimeSessionTimeoutInput`<sup>Optional</sup> <a name="idleRuntimeSessionTimeoutInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput"></a>

```java
public java.lang.Number getIdleRuntimeSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `maxLifetimeInput`<sup>Optional</sup> <a name="maxLifetimeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```java
public java.lang.Number getMaxLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `idleRuntimeSessionTimeout`<sup>Required</sup> <a name="idleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```java
public java.lang.Number getIdleRuntimeSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `maxLifetime`<sup>Required</sup> <a name="maxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```java
public java.lang.Number getMaxLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeLifecycleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

---


### BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference;

new BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

---


### BedrockagentcoreRuntimeNetworkConfigurationOutputReference <a name="BedrockagentcoreRuntimeNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference;

new BedrockagentcoreRuntimeNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig">putNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig">resetNetworkModeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkModeConfig` <a name="putNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```java
public void putNetworkModeConfig(BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

---

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resetNetworkMode"></a>

```java
public void resetNetworkMode()
```

##### `resetNetworkModeConfig` <a name="resetNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```java
public void resetNetworkModeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfig">networkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput">networkModeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkModeConfig`<sup>Required</sup> <a name="networkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```java
public BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference getNetworkModeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference</a>

---

##### `networkModeConfigInput`<sup>Optional</sup> <a name="networkModeConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```java
public IResolvable|BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig getNetworkModeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeInput"></a>

```java
public java.lang.String getNetworkModeInput();
```

- *Type:* java.lang.String

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

---


### BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference <a name="BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference;

new BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist">resetRequestHeaderAllowlist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequestHeaderAllowlist` <a name="resetRequestHeaderAllowlist" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist"></a>

```java
public void resetRequestHeaderAllowlist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput">requestHeaderAllowlistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist">requestHeaderAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeaderAllowlistInput`<sup>Optional</sup> <a name="requestHeaderAllowlistInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput"></a>

```java
public java.util.List<java.lang.String> getRequestHeaderAllowlistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestHeaderAllowlist`<sup>Required</sup> <a name="requestHeaderAllowlist" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist"></a>

```java
public java.util.List<java.lang.String> getRequestHeaderAllowlist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreRuntimeRequestHeaderConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

---


### BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_runtime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference;

new BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workloadIdentityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails">BedrockagentcoreRuntimeWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workloadIdentityArn`<sup>Required</sup> <a name="workloadIdentityArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```java
public java.lang.String getWorkloadIdentityArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```java
public BedrockagentcoreRuntimeWorkloadIdentityDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails">BedrockagentcoreRuntimeWorkloadIdentityDetails</a>

---



