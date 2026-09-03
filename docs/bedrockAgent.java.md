# `bedrockAgent` Submodule <a name="`bedrockAgent` Submodule" id="@cdktn/provider-awscc.bedrockAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgent <a name="BedrockAgent" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent awscc_bedrock_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgent;

BedrockAgent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentName(java.lang.String)
//  .actionGroups(IResolvable|java.util.List<BedrockAgentActionGroups>)
//  .agentCollaboration(java.lang.String)
//  .agentCollaborators(IResolvable|java.util.List<BedrockAgentAgentCollaborators>)
//  .agentResourceRoleArn(java.lang.String)
//  .autoPrepare(java.lang.Boolean|IResolvable)
//  .customerEncryptionKeyArn(java.lang.String)
//  .customOrchestration(BedrockAgentCustomOrchestration)
//  .description(java.lang.String)
//  .foundationModel(java.lang.String)
//  .guardrailConfiguration(BedrockAgentGuardrailConfiguration)
//  .idleSessionTtlInSeconds(java.lang.Number)
//  .instruction(java.lang.String)
//  .knowledgeBases(IResolvable|java.util.List<BedrockAgentKnowledgeBases>)
//  .memoryConfiguration(BedrockAgentMemoryConfiguration)
//  .orchestrationType(java.lang.String)
//  .promptOverrideConfiguration(BedrockAgentPromptOverrideConfiguration)
//  .skipResourceInUseCheckOnDelete(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .testAliasTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentName">agentName</a></code> | <code>java.lang.String</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.actionGroups">actionGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>></code> | List of ActionGroups. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaboration">agentCollaboration</a></code> | <code>java.lang.String</code> | Agent collaboration state. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaborators">agentCollaborators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>></code> | List of Agent Collaborators. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>java.lang.String</code> | ARN of a IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.autoPrepare">autoPrepare</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to automatically prepare after creating or updating the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customOrchestration">customOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | Structure for custom orchestration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.foundationModel">foundationModel</a></code> | <code>java.lang.String</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | Configuration for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | Max Session Time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.instruction">instruction</a></code> | <code>java.lang.String</code> | Instruction for the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.knowledgeBases">knowledgeBases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>></code> | List of Agent Knowledge Bases. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.memoryConfiguration">memoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | Configuration for memory storage. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.orchestrationType">orchestrationType</a></code> | <code>java.lang.String</code> | Types of orchestration strategy for agents. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | Configuration for prompt override. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to allow deleting agent while it is in use. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.testAliasTags">testAliasTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentName"></a>

- *Type:* java.lang.String

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_name BedrockAgent#agent_name}

---

##### `actionGroups`<sup>Optional</sup> <a name="actionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.actionGroups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>>

List of ActionGroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_groups BedrockAgent#action_groups}

---

##### `agentCollaboration`<sup>Optional</sup> <a name="agentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaboration"></a>

- *Type:* java.lang.String

Agent collaboration state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaboration BedrockAgent#agent_collaboration}

---

##### `agentCollaborators`<sup>Optional</sup> <a name="agentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaborators"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>>

List of Agent Collaborators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaborators BedrockAgent#agent_collaborators}

---

##### `agentResourceRoleArn`<sup>Optional</sup> <a name="agentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentResourceRoleArn"></a>

- *Type:* java.lang.String

ARN of a IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_resource_role_arn BedrockAgent#agent_resource_role_arn}

---

##### `autoPrepare`<sup>Optional</sup> <a name="autoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.autoPrepare"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to automatically prepare after creating or updating the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#auto_prepare BedrockAgent#auto_prepare}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* java.lang.String

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#customer_encryption_key_arn BedrockAgent#customer_encryption_key_arn}

---

##### `customOrchestration`<sup>Optional</sup> <a name="customOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customOrchestration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

Structure for custom orchestration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#custom_orchestration BedrockAgent#custom_orchestration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `foundationModel`<sup>Optional</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.foundationModel"></a>

- *Type:* java.lang.String

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `guardrailConfiguration`<sup>Optional</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.guardrailConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

Configuration for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_configuration BedrockAgent#guardrail_configuration}

---

##### `idleSessionTtlInSeconds`<sup>Optional</sup> <a name="idleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.idleSessionTtlInSeconds"></a>

- *Type:* java.lang.Number

Max Session Time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#idle_session_ttl_in_seconds BedrockAgent#idle_session_ttl_in_seconds}

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.instruction"></a>

- *Type:* java.lang.String

Instruction for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#instruction BedrockAgent#instruction}

---

##### `knowledgeBases`<sup>Optional</sup> <a name="knowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.knowledgeBases"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>>

List of Agent Knowledge Bases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_bases BedrockAgent#knowledge_bases}

---

##### `memoryConfiguration`<sup>Optional</sup> <a name="memoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.memoryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

Configuration for memory storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#memory_configuration BedrockAgent#memory_configuration}

---

##### `orchestrationType`<sup>Optional</sup> <a name="orchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.orchestrationType"></a>

- *Type:* java.lang.String

Types of orchestration strategy for agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#orchestration_type BedrockAgent#orchestration_type}

---

##### `promptOverrideConfiguration`<sup>Optional</sup> <a name="promptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.promptOverrideConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

Configuration for prompt override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_override_configuration BedrockAgent#prompt_override_configuration}

---

##### `skipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.skipResourceInUseCheckOnDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to allow deleting agent while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#tags BedrockAgent#tags}

---

##### `testAliasTags`<sup>Optional</sup> <a name="testAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.testAliasTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#test_alias_tags BedrockAgent#test_alias_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups">putActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators">putAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration">putCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration">putGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases">putKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration">putMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration">putPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups">resetActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration">resetAgentCollaboration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators">resetAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn">resetAgentResourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare">resetAutoPrepare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn">resetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration">resetCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel">resetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration">resetGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds">resetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases">resetKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration">resetMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType">resetOrchestrationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration">resetPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete">resetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags">resetTestAliasTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionGroups` <a name="putActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups"></a>

```java
public void putActionGroups(IResolvable|java.util.List<BedrockAgentActionGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>>

---

##### `putAgentCollaborators` <a name="putAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators"></a>

```java
public void putAgentCollaborators(IResolvable|java.util.List<BedrockAgentAgentCollaborators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>>

---

##### `putCustomOrchestration` <a name="putCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration"></a>

```java
public void putCustomOrchestration(BedrockAgentCustomOrchestration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `putGuardrailConfiguration` <a name="putGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration"></a>

```java
public void putGuardrailConfiguration(BedrockAgentGuardrailConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `putKnowledgeBases` <a name="putKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases"></a>

```java
public void putKnowledgeBases(IResolvable|java.util.List<BedrockAgentKnowledgeBases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>>

---

##### `putMemoryConfiguration` <a name="putMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration"></a>

```java
public void putMemoryConfiguration(BedrockAgentMemoryConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `putPromptOverrideConfiguration` <a name="putPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration"></a>

```java
public void putPromptOverrideConfiguration(BedrockAgentPromptOverrideConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `resetActionGroups` <a name="resetActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups"></a>

```java
public void resetActionGroups()
```

##### `resetAgentCollaboration` <a name="resetAgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration"></a>

```java
public void resetAgentCollaboration()
```

##### `resetAgentCollaborators` <a name="resetAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators"></a>

```java
public void resetAgentCollaborators()
```

##### `resetAgentResourceRoleArn` <a name="resetAgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn"></a>

```java
public void resetAgentResourceRoleArn()
```

##### `resetAutoPrepare` <a name="resetAutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare"></a>

```java
public void resetAutoPrepare()
```

##### `resetCustomerEncryptionKeyArn` <a name="resetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn"></a>

```java
public void resetCustomerEncryptionKeyArn()
```

##### `resetCustomOrchestration` <a name="resetCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration"></a>

```java
public void resetCustomOrchestration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFoundationModel` <a name="resetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel"></a>

```java
public void resetFoundationModel()
```

##### `resetGuardrailConfiguration` <a name="resetGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration"></a>

```java
public void resetGuardrailConfiguration()
```

##### `resetIdleSessionTtlInSeconds` <a name="resetIdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds"></a>

```java
public void resetIdleSessionTtlInSeconds()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetKnowledgeBases` <a name="resetKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases"></a>

```java
public void resetKnowledgeBases()
```

##### `resetMemoryConfiguration` <a name="resetMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration"></a>

```java
public void resetMemoryConfiguration()
```

##### `resetOrchestrationType` <a name="resetOrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType"></a>

```java
public void resetOrchestrationType()
```

##### `resetPromptOverrideConfiguration` <a name="resetPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration"></a>

```java
public void resetPromptOverrideConfiguration()
```

##### `resetSkipResourceInUseCheckOnDelete` <a name="resetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete"></a>

```java
public void resetSkipResourceInUseCheckOnDelete()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags"></a>

```java
public void resetTags()
```

##### `resetTestAliasTags` <a name="resetTestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags"></a>

```java
public void resetTestAliasTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgent;

BedrockAgent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgent;

BedrockAgent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgent;

BedrockAgent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgent;

BedrockAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups">actionGroups</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn">agentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators">agentCollaborators</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus">agentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration">customOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons">failureReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases">knowledgeBases</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration">memoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt">preparedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions">recommendedActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput">actionGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput">agentCollaborationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput">agentCollaboratorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput">agentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput">agentResourceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput">autoPrepareInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput">customerEncryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput">customOrchestrationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput">foundationModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput">guardrailConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput">idleSessionTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput">instructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput">knowledgeBasesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput">memoryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput">orchestrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput">promptOverrideConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput">skipResourceInUseCheckOnDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput">testAliasTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration">agentCollaboration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName">agentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare">autoPrepare</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel">foundationModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType">orchestrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags">testAliasTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionGroups`<sup>Required</sup> <a name="actionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups"></a>

```java
public BedrockAgentActionGroupsList getActionGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a>

---

##### `agentArn`<sup>Required</sup> <a name="agentArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn"></a>

```java
public java.lang.String getAgentArn();
```

- *Type:* java.lang.String

---

##### `agentCollaborators`<sup>Required</sup> <a name="agentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators"></a>

```java
public BedrockAgentAgentCollaboratorsList getAgentCollaborators();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus"></a>

```java
public java.lang.String getAgentStatus();
```

- *Type:* java.lang.String

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customOrchestration`<sup>Required</sup> <a name="customOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration"></a>

```java
public BedrockAgentCustomOrchestrationOutputReference getCustomOrchestration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a>

---

##### `failureReasons`<sup>Required</sup> <a name="failureReasons" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons"></a>

```java
public java.util.List<java.lang.String> getFailureReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guardrailConfiguration`<sup>Required</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration"></a>

```java
public BedrockAgentGuardrailConfigurationOutputReference getGuardrailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeBases`<sup>Required</sup> <a name="knowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases"></a>

```java
public BedrockAgentKnowledgeBasesList getKnowledgeBases();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a>

---

##### `memoryConfiguration`<sup>Required</sup> <a name="memoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration"></a>

```java
public BedrockAgentMemoryConfigurationOutputReference getMemoryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a>

---

##### `preparedAt`<sup>Required</sup> <a name="preparedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt"></a>

```java
public java.lang.String getPreparedAt();
```

- *Type:* java.lang.String

---

##### `promptOverrideConfiguration`<sup>Required</sup> <a name="promptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration"></a>

```java
public BedrockAgentPromptOverrideConfigurationOutputReference getPromptOverrideConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a>

---

##### `recommendedActions`<sup>Required</sup> <a name="recommendedActions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions"></a>

```java
public java.util.List<java.lang.String> getRecommendedActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `actionGroupsInput`<sup>Optional</sup> <a name="actionGroupsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput"></a>

```java
public IResolvable|java.util.List<BedrockAgentActionGroups> getActionGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>>

---

##### `agentCollaborationInput`<sup>Optional</sup> <a name="agentCollaborationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput"></a>

```java
public java.lang.String getAgentCollaborationInput();
```

- *Type:* java.lang.String

---

##### `agentCollaboratorsInput`<sup>Optional</sup> <a name="agentCollaboratorsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput"></a>

```java
public IResolvable|java.util.List<BedrockAgentAgentCollaborators> getAgentCollaboratorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>>

---

##### `agentNameInput`<sup>Optional</sup> <a name="agentNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput"></a>

```java
public java.lang.String getAgentNameInput();
```

- *Type:* java.lang.String

---

##### `agentResourceRoleArnInput`<sup>Optional</sup> <a name="agentResourceRoleArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput"></a>

```java
public java.lang.String getAgentResourceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `autoPrepareInput`<sup>Optional</sup> <a name="autoPrepareInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoPrepareInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customerEncryptionKeyArnInput`<sup>Optional</sup> <a name="customerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput"></a>

```java
public java.lang.String getCustomerEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `customOrchestrationInput`<sup>Optional</sup> <a name="customOrchestrationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput"></a>

```java
public IResolvable|BedrockAgentCustomOrchestration getCustomOrchestrationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `foundationModelInput`<sup>Optional</sup> <a name="foundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput"></a>

```java
public java.lang.String getFoundationModelInput();
```

- *Type:* java.lang.String

---

##### `guardrailConfigurationInput`<sup>Optional</sup> <a name="guardrailConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput"></a>

```java
public IResolvable|BedrockAgentGuardrailConfiguration getGuardrailConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `idleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="idleSessionTtlInSecondsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput"></a>

```java
public java.lang.Number getIdleSessionTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput"></a>

```java
public java.lang.String getInstructionInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBasesInput`<sup>Optional</sup> <a name="knowledgeBasesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput"></a>

```java
public IResolvable|java.util.List<BedrockAgentKnowledgeBases> getKnowledgeBasesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>>

---

##### `memoryConfigurationInput`<sup>Optional</sup> <a name="memoryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput"></a>

```java
public IResolvable|BedrockAgentMemoryConfiguration getMemoryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `orchestrationTypeInput`<sup>Optional</sup> <a name="orchestrationTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput"></a>

```java
public java.lang.String getOrchestrationTypeInput();
```

- *Type:* java.lang.String

---

##### `promptOverrideConfigurationInput`<sup>Optional</sup> <a name="promptOverrideConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput"></a>

```java
public IResolvable|BedrockAgentPromptOverrideConfiguration getPromptOverrideConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `skipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipResourceInUseCheckOnDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `testAliasTagsInput`<sup>Optional</sup> <a name="testAliasTagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestAliasTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `agentCollaboration`<sup>Required</sup> <a name="agentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration"></a>

```java
public java.lang.String getAgentCollaboration();
```

- *Type:* java.lang.String

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName"></a>

```java
public java.lang.String getAgentName();
```

- *Type:* java.lang.String

---

##### `agentResourceRoleArn`<sup>Required</sup> <a name="agentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn"></a>

```java
public java.lang.String getAgentResourceRoleArn();
```

- *Type:* java.lang.String

---

##### `autoPrepare`<sup>Required</sup> <a name="autoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare"></a>

```java
public java.lang.Boolean|IResolvable getAutoPrepare();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel"></a>

```java
public java.lang.String getFoundationModel();
```

- *Type:* java.lang.String

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds"></a>

```java
public java.lang.Number getIdleSessionTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `orchestrationType`<sup>Required</sup> <a name="orchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType"></a>

```java
public java.lang.String getOrchestrationType();
```

- *Type:* java.lang.String

---

##### `skipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getSkipResourceInUseCheckOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `testAliasTags`<sup>Required</sup> <a name="testAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestAliasTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentActionGroups <a name="BedrockAgentActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroups;

BedrockAgentActionGroups.builder()
//  .actionGroupExecutor(BedrockAgentActionGroupsActionGroupExecutor)
//  .actionGroupName(java.lang.String)
//  .actionGroupState(java.lang.String)
//  .apiSchema(BedrockAgentActionGroupsApiSchema)
//  .description(java.lang.String)
//  .functionSchema(BedrockAgentActionGroupsFunctionSchema)
//  .parentActionGroupSignature(java.lang.String)
//  .skipResourceInUseCheckOnDelete(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor">actionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | Type of Executors for an Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName">actionGroupName</a></code> | <code>java.lang.String</code> | Name of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState">actionGroupState</a></code> | <code>java.lang.String</code> | State of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | Contains information about the API Schema for the Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description">description</a></code> | <code>java.lang.String</code> | Description of action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema">functionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | Schema of Functions. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature">parentActionGroupSignature</a></code> | <code>java.lang.String</code> | Action Group Signature for a BuiltIn Action. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to allow deleting action group while it is in use. |

---

##### `actionGroupExecutor`<sup>Optional</sup> <a name="actionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor"></a>

```java
public BedrockAgentActionGroupsActionGroupExecutor getActionGroupExecutor();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

Type of Executors for an Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_group_executor BedrockAgent#action_group_executor}

---

##### `actionGroupName`<sup>Optional</sup> <a name="actionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName"></a>

```java
public java.lang.String getActionGroupName();
```

- *Type:* java.lang.String

Name of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_group_name BedrockAgent#action_group_name}

---

##### `actionGroupState`<sup>Optional</sup> <a name="actionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState"></a>

```java
public java.lang.String getActionGroupState();
```

- *Type:* java.lang.String

State of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_group_state BedrockAgent#action_group_state}

---

##### `apiSchema`<sup>Optional</sup> <a name="apiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema"></a>

```java
public BedrockAgentActionGroupsApiSchema getApiSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

Contains information about the API Schema for the Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#api_schema BedrockAgent#api_schema}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `functionSchema`<sup>Optional</sup> <a name="functionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema"></a>

```java
public BedrockAgentActionGroupsFunctionSchema getFunctionSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

Schema of Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#function_schema BedrockAgent#function_schema}

---

##### `parentActionGroupSignature`<sup>Optional</sup> <a name="parentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature"></a>

```java
public java.lang.String getParentActionGroupSignature();
```

- *Type:* java.lang.String

Action Group Signature for a BuiltIn Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#parent_action_group_signature BedrockAgent#parent_action_group_signature}

---

##### `skipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getSkipResourceInUseCheckOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to allow deleting action group while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

### BedrockAgentActionGroupsActionGroupExecutor <a name="BedrockAgentActionGroupsActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsActionGroupExecutor;

BedrockAgentActionGroupsActionGroupExecutor.builder()
//  .customControl(java.lang.String)
//  .lambda(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl">customControl</a></code> | <code>java.lang.String</code> | Custom control of action execution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda">lambda</a></code> | <code>java.lang.String</code> | ARN of a Lambda. |

---

##### `customControl`<sup>Optional</sup> <a name="customControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl"></a>

```java
public java.lang.String getCustomControl();
```

- *Type:* java.lang.String

Custom control of action execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#custom_control BedrockAgent#custom_control}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda"></a>

```java
public java.lang.String getLambda();
```

- *Type:* java.lang.String

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentActionGroupsApiSchema <a name="BedrockAgentActionGroupsApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsApiSchema;

BedrockAgentActionGroupsApiSchema.builder()
//  .payload(java.lang.String)
//  .s3(BedrockAgentActionGroupsApiSchemaS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload">payload</a></code> | <code>java.lang.String</code> | String OpenAPI Payload. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | The identifier for the S3 resource. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

String OpenAPI Payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#payload BedrockAgent#payload}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3"></a>

```java
public BedrockAgentActionGroupsApiSchemaS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3 BedrockAgent#s3}

---

### BedrockAgentActionGroupsApiSchemaS3 <a name="BedrockAgentActionGroupsApiSchemaS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsApiSchemaS3;

BedrockAgentActionGroupsApiSchemaS3.builder()
//  .s3BucketName(java.lang.String)
//  .s3ObjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey">s3ObjectKey</a></code> | <code>java.lang.String</code> | A object key in S3. |

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3_bucket_name BedrockAgent#s3_bucket_name}

---

##### `s3ObjectKey`<sup>Optional</sup> <a name="s3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey"></a>

```java
public java.lang.String getS3ObjectKey();
```

- *Type:* java.lang.String

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3_object_key BedrockAgent#s3_object_key}

---

### BedrockAgentActionGroupsFunctionSchema <a name="BedrockAgentActionGroupsFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchema;

BedrockAgentActionGroupsFunctionSchema.builder()
//  .functions(IResolvable|java.util.List<BedrockAgentActionGroupsFunctionSchemaFunctions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions">functions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>></code> | List of Function definitions. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions"></a>

```java
public IResolvable|java.util.List<BedrockAgentActionGroupsFunctionSchemaFunctions> getFunctions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>>

List of Function definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#functions BedrockAgent#functions}

---

### BedrockAgentActionGroupsFunctionSchemaFunctions <a name="BedrockAgentActionGroupsFunctionSchemaFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchemaFunctions;

BedrockAgentActionGroupsFunctionSchemaFunctions.builder()
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .parameters(IResolvable|java.util.Map<java.lang.String, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters>)
//  .requireConfirmation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description">description</a></code> | <code>java.lang.String</code> | Description of function. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name">name</a></code> | <code>java.lang.String</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>></code> | A map of parameter name and detail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation">requireConfirmation</a></code> | <code>java.lang.String</code> | ENUM to check if action requires user confirmation. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#name BedrockAgent#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

A map of parameter name and detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#parameters BedrockAgent#parameters}

---

##### `requireConfirmation`<sup>Optional</sup> <a name="requireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation"></a>

```java
public java.lang.String getRequireConfirmation();
```

- *Type:* java.lang.String

ENUM to check if action requires user confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#require_confirmation BedrockAgent#require_confirmation}

---

### BedrockAgentActionGroupsFunctionSchemaFunctionsParameters <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters;

BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.builder()
//  .description(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description">description</a></code> | <code>java.lang.String</code> | Description of function parameter. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Information about if a parameter is required for function call. Default to false. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type">type</a></code> | <code>java.lang.String</code> | Parameter Type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of function parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Information about if a parameter is required for function call. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#required BedrockAgent#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Parameter Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#type BedrockAgent#type}

---

### BedrockAgentAgentCollaborators <a name="BedrockAgentAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentAgentCollaborators;

BedrockAgentAgentCollaborators.builder()
//  .agentDescriptor(BedrockAgentAgentCollaboratorsAgentDescriptor)
//  .collaborationInstruction(java.lang.String)
//  .collaboratorName(java.lang.String)
//  .relayConversationHistory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor">agentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | Agent descriptor for agent collaborator. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction">collaborationInstruction</a></code> | <code>java.lang.String</code> | Agent collaborator instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName">collaboratorName</a></code> | <code>java.lang.String</code> | Agent collaborator name. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory">relayConversationHistory</a></code> | <code>java.lang.String</code> | Relay conversation history state. |

---

##### `agentDescriptor`<sup>Optional</sup> <a name="agentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor"></a>

```java
public BedrockAgentAgentCollaboratorsAgentDescriptor getAgentDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

Agent descriptor for agent collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_descriptor BedrockAgent#agent_descriptor}

---

##### `collaborationInstruction`<sup>Optional</sup> <a name="collaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction"></a>

```java
public java.lang.String getCollaborationInstruction();
```

- *Type:* java.lang.String

Agent collaborator instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#collaboration_instruction BedrockAgent#collaboration_instruction}

---

##### `collaboratorName`<sup>Optional</sup> <a name="collaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName"></a>

```java
public java.lang.String getCollaboratorName();
```

- *Type:* java.lang.String

Agent collaborator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#collaborator_name BedrockAgent#collaborator_name}

---

##### `relayConversationHistory`<sup>Optional</sup> <a name="relayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory"></a>

```java
public java.lang.String getRelayConversationHistory();
```

- *Type:* java.lang.String

Relay conversation history state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#relay_conversation_history BedrockAgent#relay_conversation_history}

---

### BedrockAgentAgentCollaboratorsAgentDescriptor <a name="BedrockAgentAgentCollaboratorsAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentAgentCollaboratorsAgentDescriptor;

BedrockAgentAgentCollaboratorsAgentDescriptor.builder()
//  .aliasArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn">aliasArn</a></code> | <code>java.lang.String</code> | Alias ARN for agent descriptor. |

---

##### `aliasArn`<sup>Optional</sup> <a name="aliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn"></a>

```java
public java.lang.String getAliasArn();
```

- *Type:* java.lang.String

Alias ARN for agent descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#alias_arn BedrockAgent#alias_arn}

---

### BedrockAgentConfig <a name="BedrockAgentConfig" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentConfig;

BedrockAgentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentName(java.lang.String)
//  .actionGroups(IResolvable|java.util.List<BedrockAgentActionGroups>)
//  .agentCollaboration(java.lang.String)
//  .agentCollaborators(IResolvable|java.util.List<BedrockAgentAgentCollaborators>)
//  .agentResourceRoleArn(java.lang.String)
//  .autoPrepare(java.lang.Boolean|IResolvable)
//  .customerEncryptionKeyArn(java.lang.String)
//  .customOrchestration(BedrockAgentCustomOrchestration)
//  .description(java.lang.String)
//  .foundationModel(java.lang.String)
//  .guardrailConfiguration(BedrockAgentGuardrailConfiguration)
//  .idleSessionTtlInSeconds(java.lang.Number)
//  .instruction(java.lang.String)
//  .knowledgeBases(IResolvable|java.util.List<BedrockAgentKnowledgeBases>)
//  .memoryConfiguration(BedrockAgentMemoryConfiguration)
//  .orchestrationType(java.lang.String)
//  .promptOverrideConfiguration(BedrockAgentPromptOverrideConfiguration)
//  .skipResourceInUseCheckOnDelete(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .testAliasTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName">agentName</a></code> | <code>java.lang.String</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups">actionGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>></code> | List of ActionGroups. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration">agentCollaboration</a></code> | <code>java.lang.String</code> | Agent collaboration state. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators">agentCollaborators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>></code> | List of Agent Collaborators. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>java.lang.String</code> | ARN of a IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare">autoPrepare</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to automatically prepare after creating or updating the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration">customOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | Structure for custom orchestration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel">foundationModel</a></code> | <code>java.lang.String</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | Configuration for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | Max Session Time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction">instruction</a></code> | <code>java.lang.String</code> | Instruction for the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases">knowledgeBases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>></code> | List of Agent Knowledge Bases. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration">memoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | Configuration for memory storage. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType">orchestrationType</a></code> | <code>java.lang.String</code> | Types of orchestration strategy for agents. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | Configuration for prompt override. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to allow deleting agent while it is in use. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags">testAliasTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName"></a>

```java
public java.lang.String getAgentName();
```

- *Type:* java.lang.String

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_name BedrockAgent#agent_name}

---

##### `actionGroups`<sup>Optional</sup> <a name="actionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups"></a>

```java
public IResolvable|java.util.List<BedrockAgentActionGroups> getActionGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>>

List of ActionGroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_groups BedrockAgent#action_groups}

---

##### `agentCollaboration`<sup>Optional</sup> <a name="agentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration"></a>

```java
public java.lang.String getAgentCollaboration();
```

- *Type:* java.lang.String

Agent collaboration state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaboration BedrockAgent#agent_collaboration}

---

##### `agentCollaborators`<sup>Optional</sup> <a name="agentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators"></a>

```java
public IResolvable|java.util.List<BedrockAgentAgentCollaborators> getAgentCollaborators();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>>

List of Agent Collaborators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaborators BedrockAgent#agent_collaborators}

---

##### `agentResourceRoleArn`<sup>Optional</sup> <a name="agentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn"></a>

```java
public java.lang.String getAgentResourceRoleArn();
```

- *Type:* java.lang.String

ARN of a IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_resource_role_arn BedrockAgent#agent_resource_role_arn}

---

##### `autoPrepare`<sup>Optional</sup> <a name="autoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare"></a>

```java
public java.lang.Boolean|IResolvable getAutoPrepare();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to automatically prepare after creating or updating the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#auto_prepare BedrockAgent#auto_prepare}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#customer_encryption_key_arn BedrockAgent#customer_encryption_key_arn}

---

##### `customOrchestration`<sup>Optional</sup> <a name="customOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration"></a>

```java
public BedrockAgentCustomOrchestration getCustomOrchestration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

Structure for custom orchestration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#custom_orchestration BedrockAgent#custom_orchestration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `foundationModel`<sup>Optional</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel"></a>

```java
public java.lang.String getFoundationModel();
```

- *Type:* java.lang.String

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `guardrailConfiguration`<sup>Optional</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration"></a>

```java
public BedrockAgentGuardrailConfiguration getGuardrailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

Configuration for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_configuration BedrockAgent#guardrail_configuration}

---

##### `idleSessionTtlInSeconds`<sup>Optional</sup> <a name="idleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds"></a>

```java
public java.lang.Number getIdleSessionTtlInSeconds();
```

- *Type:* java.lang.Number

Max Session Time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#idle_session_ttl_in_seconds BedrockAgent#idle_session_ttl_in_seconds}

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

Instruction for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#instruction BedrockAgent#instruction}

---

##### `knowledgeBases`<sup>Optional</sup> <a name="knowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases"></a>

```java
public IResolvable|java.util.List<BedrockAgentKnowledgeBases> getKnowledgeBases();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>>

List of Agent Knowledge Bases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_bases BedrockAgent#knowledge_bases}

---

##### `memoryConfiguration`<sup>Optional</sup> <a name="memoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration"></a>

```java
public BedrockAgentMemoryConfiguration getMemoryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

Configuration for memory storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#memory_configuration BedrockAgent#memory_configuration}

---

##### `orchestrationType`<sup>Optional</sup> <a name="orchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType"></a>

```java
public java.lang.String getOrchestrationType();
```

- *Type:* java.lang.String

Types of orchestration strategy for agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#orchestration_type BedrockAgent#orchestration_type}

---

##### `promptOverrideConfiguration`<sup>Optional</sup> <a name="promptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration"></a>

```java
public BedrockAgentPromptOverrideConfiguration getPromptOverrideConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

Configuration for prompt override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_override_configuration BedrockAgent#prompt_override_configuration}

---

##### `skipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getSkipResourceInUseCheckOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to allow deleting agent while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#tags BedrockAgent#tags}

---

##### `testAliasTags`<sup>Optional</sup> <a name="testAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestAliasTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#test_alias_tags BedrockAgent#test_alias_tags}

---

### BedrockAgentCustomOrchestration <a name="BedrockAgentCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentCustomOrchestration;

BedrockAgentCustomOrchestration.builder()
//  .executor(BedrockAgentCustomOrchestrationExecutor)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor">executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | Types of executors for custom orchestration strategy. |

---

##### `executor`<sup>Optional</sup> <a name="executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor"></a>

```java
public BedrockAgentCustomOrchestrationExecutor getExecutor();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

Types of executors for custom orchestration strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#executor BedrockAgent#executor}

---

### BedrockAgentCustomOrchestrationExecutor <a name="BedrockAgentCustomOrchestrationExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentCustomOrchestrationExecutor;

BedrockAgentCustomOrchestrationExecutor.builder()
//  .lambda(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda">lambda</a></code> | <code>java.lang.String</code> | ARN of a Lambda. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda"></a>

```java
public java.lang.String getLambda();
```

- *Type:* java.lang.String

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentGuardrailConfiguration <a name="BedrockAgentGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentGuardrailConfiguration;

BedrockAgentGuardrailConfiguration.builder()
//  .guardrailIdentifier(java.lang.String)
//  .guardrailVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>java.lang.String</code> | Identifier for the guardrail, could be the id or the arn. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | Version of the guardrail. |

---

##### `guardrailIdentifier`<sup>Optional</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier"></a>

```java
public java.lang.String getGuardrailIdentifier();
```

- *Type:* java.lang.String

Identifier for the guardrail, could be the id or the arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_identifier BedrockAgent#guardrail_identifier}

---

##### `guardrailVersion`<sup>Optional</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion"></a>

```java
public java.lang.String getGuardrailVersion();
```

- *Type:* java.lang.String

Version of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_version BedrockAgent#guardrail_version}

---

### BedrockAgentKnowledgeBases <a name="BedrockAgentKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentKnowledgeBases;

BedrockAgentKnowledgeBases.builder()
//  .description(java.lang.String)
//  .knowledgeBaseId(java.lang.String)
//  .knowledgeBaseState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>java.lang.String</code> | State of the knowledge base; whether it is enabled or disabled. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `knowledgeBaseId`<sup>Optional</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_base_id BedrockAgent#knowledge_base_id}

---

##### `knowledgeBaseState`<sup>Optional</sup> <a name="knowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState"></a>

```java
public java.lang.String getKnowledgeBaseState();
```

- *Type:* java.lang.String

State of the knowledge base; whether it is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_base_state BedrockAgent#knowledge_base_state}

---

### BedrockAgentMemoryConfiguration <a name="BedrockAgentMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentMemoryConfiguration;

BedrockAgentMemoryConfiguration.builder()
//  .enabledMemoryTypes(java.util.List<java.lang.String>)
//  .sessionSummaryConfiguration(BedrockAgentMemoryConfigurationSessionSummaryConfiguration)
//  .storageDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes">enabledMemoryTypes</a></code> | <code>java.util.List<java.lang.String></code> | Types of session storage persisted in memory. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration">sessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | Configuration for Session Summarization. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays">storageDays</a></code> | <code>java.lang.Number</code> | Maximum number of days to store session details. |

---

##### `enabledMemoryTypes`<sup>Optional</sup> <a name="enabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes"></a>

```java
public java.util.List<java.lang.String> getEnabledMemoryTypes();
```

- *Type:* java.util.List<java.lang.String>

Types of session storage persisted in memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#enabled_memory_types BedrockAgent#enabled_memory_types}

---

##### `sessionSummaryConfiguration`<sup>Optional</sup> <a name="sessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration"></a>

```java
public BedrockAgentMemoryConfigurationSessionSummaryConfiguration getSessionSummaryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

Configuration for Session Summarization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#session_summary_configuration BedrockAgent#session_summary_configuration}

---

##### `storageDays`<sup>Optional</sup> <a name="storageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays"></a>

```java
public java.lang.Number getStorageDays();
```

- *Type:* java.lang.Number

Maximum number of days to store session details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#storage_days BedrockAgent#storage_days}

---

### BedrockAgentMemoryConfigurationSessionSummaryConfiguration <a name="BedrockAgentMemoryConfigurationSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration;

BedrockAgentMemoryConfigurationSessionSummaryConfiguration.builder()
//  .maxRecentSessions(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions">maxRecentSessions</a></code> | <code>java.lang.Number</code> | Maximum number of Sessions to Summarize. |

---

##### `maxRecentSessions`<sup>Optional</sup> <a name="maxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions"></a>

```java
public java.lang.Number getMaxRecentSessions();
```

- *Type:* java.lang.Number

Maximum number of Sessions to Summarize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#max_recent_sessions BedrockAgent#max_recent_sessions}

---

### BedrockAgentPromptOverrideConfiguration <a name="BedrockAgentPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentPromptOverrideConfiguration;

BedrockAgentPromptOverrideConfiguration.builder()
//  .overrideLambda(java.lang.String)
//  .promptConfigurations(IResolvable|java.util.List<BedrockAgentPromptOverrideConfigurationPromptConfigurations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda">overrideLambda</a></code> | <code>java.lang.String</code> | ARN of a Lambda. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations">promptConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>></code> | List of BasePromptConfiguration. |

---

##### `overrideLambda`<sup>Optional</sup> <a name="overrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```java
public java.lang.String getOverrideLambda();
```

- *Type:* java.lang.String

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#override_lambda BedrockAgent#override_lambda}

---

##### `promptConfigurations`<sup>Optional</sup> <a name="promptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```java
public IResolvable|java.util.List<BedrockAgentPromptOverrideConfigurationPromptConfigurations> getPromptConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>>

List of BasePromptConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_configurations BedrockAgent#prompt_configurations}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentPromptOverrideConfigurationPromptConfigurations;

BedrockAgentPromptOverrideConfigurationPromptConfigurations.builder()
//  .additionalModelRequestFields(java.lang.String)
//  .basePromptTemplate(java.lang.String)
//  .foundationModel(java.lang.String)
//  .inferenceConfiguration(BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration)
//  .parserMode(java.lang.String)
//  .promptCreationMode(java.lang.String)
//  .promptState(java.lang.String)
//  .promptType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | Additional Model Request Fields for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">basePromptTemplate</a></code> | <code>java.lang.String</code> | Base Prompt Template. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel">foundationModel</a></code> | <code>java.lang.String</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | Configuration for inference in prompt configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">parserMode</a></code> | <code>java.lang.String</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">promptCreationMode</a></code> | <code>java.lang.String</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">promptState</a></code> | <code>java.lang.String</code> | Prompt State. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">promptType</a></code> | <code>java.lang.String</code> | Prompt Type. |

---

##### `additionalModelRequestFields`<sup>Optional</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

Additional Model Request Fields for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#additional_model_request_fields BedrockAgent#additional_model_request_fields}

---

##### `basePromptTemplate`<sup>Optional</sup> <a name="basePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```java
public java.lang.String getBasePromptTemplate();
```

- *Type:* java.lang.String

Base Prompt Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#base_prompt_template BedrockAgent#base_prompt_template}

---

##### `foundationModel`<sup>Optional</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel"></a>

```java
public java.lang.String getFoundationModel();
```

- *Type:* java.lang.String

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `inferenceConfiguration`<sup>Optional</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```java
public BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration getInferenceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

Configuration for inference in prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#inference_configuration BedrockAgent#inference_configuration}

---

##### `parserMode`<sup>Optional</sup> <a name="parserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```java
public java.lang.String getParserMode();
```

- *Type:* java.lang.String

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#parser_mode BedrockAgent#parser_mode}

---

##### `promptCreationMode`<sup>Optional</sup> <a name="promptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```java
public java.lang.String getPromptCreationMode();
```

- *Type:* java.lang.String

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_creation_mode BedrockAgent#prompt_creation_mode}

---

##### `promptState`<sup>Optional</sup> <a name="promptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```java
public java.lang.String getPromptState();
```

- *Type:* java.lang.String

Prompt State.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_state BedrockAgent#prompt_state}

---

##### `promptType`<sup>Optional</sup> <a name="promptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```java
public java.lang.String getPromptType();
```

- *Type:* java.lang.String

Prompt Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_type BedrockAgent#prompt_type}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration;

BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.builder()
//  .maximumLength(java.lang.Number)
//  .stopSequences(java.util.List<java.lang.String>)
//  .temperature(java.lang.Number)
//  .topK(java.lang.Number)
//  .topP(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength">maximumLength</a></code> | <code>java.lang.Number</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">topK</a></code> | <code>java.lang.Number</code> | Sample from the k most likely next tokens. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">topP</a></code> | <code>java.lang.Number</code> | Cumulative probability cutoff for token selection. |

---

##### `maximumLength`<sup>Optional</sup> <a name="maximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength"></a>

```java
public java.lang.Number getMaximumLength();
```

- *Type:* java.lang.Number

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#maximum_length BedrockAgent#maximum_length}

---

##### `stopSequences`<sup>Optional</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#stop_sequences BedrockAgent#stop_sequences}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#temperature BedrockAgent#temperature}

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

Sample from the k most likely next tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#top_k BedrockAgent#top_k}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#top_p BedrockAgent#top_p}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentActionGroupsActionGroupExecutorOutputReference <a name="BedrockAgentActionGroupsActionGroupExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsActionGroupExecutorOutputReference;

new BedrockAgentActionGroupsActionGroupExecutorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl">resetCustomControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomControl` <a name="resetCustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl"></a>

```java
public void resetCustomControl()
```

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda"></a>

```java
public void resetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput">customControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl">customControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda">lambda</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customControlInput`<sup>Optional</sup> <a name="customControlInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput"></a>

```java
public java.lang.String getCustomControlInput();
```

- *Type:* java.lang.String

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput"></a>

```java
public java.lang.String getLambdaInput();
```

- *Type:* java.lang.String

---

##### `customControl`<sup>Required</sup> <a name="customControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl"></a>

```java
public java.lang.String getCustomControl();
```

- *Type:* java.lang.String

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda"></a>

```java
public java.lang.String getLambda();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentActionGroupsActionGroupExecutor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---


### BedrockAgentActionGroupsApiSchemaOutputReference <a name="BedrockAgentActionGroupsApiSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsApiSchemaOutputReference;

new BedrockAgentActionGroupsApiSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3"></a>

```java
public void putS3(BedrockAgentActionGroupsApiSchemaS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput">payloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3"></a>

```java
public BedrockAgentActionGroupsApiSchemaS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput"></a>

```java
public java.lang.String getPayloadInput();
```

- *Type:* java.lang.String

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input"></a>

```java
public IResolvable|BedrockAgentActionGroupsApiSchemaS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentActionGroupsApiSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---


### BedrockAgentActionGroupsApiSchemaS3OutputReference <a name="BedrockAgentActionGroupsApiSchemaS3OutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsApiSchemaS3OutputReference;

new BedrockAgentActionGroupsApiSchemaS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey">resetS3ObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```

##### `resetS3ObjectKey` <a name="resetS3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```java
public void resetS3ObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput">s3ObjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey">s3ObjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectKeyInput`<sup>Optional</sup> <a name="s3ObjectKeyInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```java
public java.lang.String getS3ObjectKeyInput();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```java
public java.lang.String getS3ObjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentActionGroupsApiSchemaS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsList <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchemaFunctionsList;

new BedrockAgentActionGroupsFunctionSchemaFunctionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get"></a>

```java
public BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAgentActionGroupsFunctionSchemaFunctions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference;

new BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation">resetRequireConfirmation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.Map<java.lang.String, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetRequireConfirmation` <a name="resetRequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation"></a>

```java
public void resetRequireConfirmation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput">requireConfirmationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation">requireConfirmation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters"></a>

```java
public BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

---

##### `requireConfirmationInput`<sup>Optional</sup> <a name="requireConfirmationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput"></a>

```java
public java.lang.String getRequireConfirmationInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requireConfirmation`<sup>Required</sup> <a name="requireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation"></a>

```java
public java.lang.String getRequireConfirmation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap;

new BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get"></a>

```java
public BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference;

new BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctionsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>

---


### BedrockAgentActionGroupsFunctionSchemaOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsFunctionSchemaOutputReference;

new BedrockAgentActionGroupsFunctionSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions">resetFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctions` <a name="putFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions"></a>

```java
public void putFunctions(IResolvable|java.util.List<BedrockAgentActionGroupsFunctionSchemaFunctions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>>

---

##### `resetFunctions` <a name="resetFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions"></a>

```java
public void resetFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput">functionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions"></a>

```java
public BedrockAgentActionGroupsFunctionSchemaFunctionsList getFunctions();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a>

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput"></a>

```java
public IResolvable|java.util.List<BedrockAgentActionGroupsFunctionSchemaFunctions> getFunctionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentActionGroupsFunctionSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---


### BedrockAgentActionGroupsList <a name="BedrockAgentActionGroupsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsList;

new BedrockAgentActionGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get"></a>

```java
public BedrockAgentActionGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAgentActionGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>>

---


### BedrockAgentActionGroupsOutputReference <a name="BedrockAgentActionGroupsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentActionGroupsOutputReference;

new BedrockAgentActionGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor">putActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema">putApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema">putFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor">resetActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName">resetActionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState">resetActionGroupState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema">resetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema">resetFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature">resetParentActionGroupSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete">resetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionGroupExecutor` <a name="putActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor"></a>

```java
public void putActionGroupExecutor(BedrockAgentActionGroupsActionGroupExecutor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `putApiSchema` <a name="putApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema"></a>

```java
public void putApiSchema(BedrockAgentActionGroupsApiSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `putFunctionSchema` <a name="putFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema"></a>

```java
public void putFunctionSchema(BedrockAgentActionGroupsFunctionSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `resetActionGroupExecutor` <a name="resetActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor"></a>

```java
public void resetActionGroupExecutor()
```

##### `resetActionGroupName` <a name="resetActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName"></a>

```java
public void resetActionGroupName()
```

##### `resetActionGroupState` <a name="resetActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState"></a>

```java
public void resetActionGroupState()
```

##### `resetApiSchema` <a name="resetApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema"></a>

```java
public void resetApiSchema()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFunctionSchema` <a name="resetFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema"></a>

```java
public void resetFunctionSchema()
```

##### `resetParentActionGroupSignature` <a name="resetParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature"></a>

```java
public void resetParentActionGroupSignature()
```

##### `resetSkipResourceInUseCheckOnDelete` <a name="resetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete"></a>

```java
public void resetSkipResourceInUseCheckOnDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor">actionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema">functionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput">actionGroupExecutorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput">actionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput">actionGroupStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput">apiSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput">functionSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput">parentActionGroupSignatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput">skipResourceInUseCheckOnDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName">actionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState">actionGroupState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature">parentActionGroupSignature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete">skipResourceInUseCheckOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionGroupExecutor`<sup>Required</sup> <a name="actionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor"></a>

```java
public BedrockAgentActionGroupsActionGroupExecutorOutputReference getActionGroupExecutor();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a>

---

##### `apiSchema`<sup>Required</sup> <a name="apiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema"></a>

```java
public BedrockAgentActionGroupsApiSchemaOutputReference getApiSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a>

---

##### `functionSchema`<sup>Required</sup> <a name="functionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema"></a>

```java
public BedrockAgentActionGroupsFunctionSchemaOutputReference getFunctionSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a>

---

##### `actionGroupExecutorInput`<sup>Optional</sup> <a name="actionGroupExecutorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput"></a>

```java
public IResolvable|BedrockAgentActionGroupsActionGroupExecutor getActionGroupExecutorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `actionGroupNameInput`<sup>Optional</sup> <a name="actionGroupNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput"></a>

```java
public java.lang.String getActionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `actionGroupStateInput`<sup>Optional</sup> <a name="actionGroupStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput"></a>

```java
public java.lang.String getActionGroupStateInput();
```

- *Type:* java.lang.String

---

##### `apiSchemaInput`<sup>Optional</sup> <a name="apiSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput"></a>

```java
public IResolvable|BedrockAgentActionGroupsApiSchema getApiSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `functionSchemaInput`<sup>Optional</sup> <a name="functionSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput"></a>

```java
public IResolvable|BedrockAgentActionGroupsFunctionSchema getFunctionSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `parentActionGroupSignatureInput`<sup>Optional</sup> <a name="parentActionGroupSignatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput"></a>

```java
public java.lang.String getParentActionGroupSignatureInput();
```

- *Type:* java.lang.String

---

##### `skipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="skipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipResourceInUseCheckOnDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `actionGroupName`<sup>Required</sup> <a name="actionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName"></a>

```java
public java.lang.String getActionGroupName();
```

- *Type:* java.lang.String

---

##### `actionGroupState`<sup>Required</sup> <a name="actionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState"></a>

```java
public java.lang.String getActionGroupState();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `parentActionGroupSignature`<sup>Required</sup> <a name="parentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature"></a>

```java
public java.lang.String getParentActionGroupSignature();
```

- *Type:* java.lang.String

---

##### `skipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="skipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getSkipResourceInUseCheckOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentActionGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>

---


### BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference <a name="BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference;

new BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn">resetAliasArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliasArn` <a name="resetAliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn"></a>

```java
public void resetAliasArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput">aliasArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn">aliasArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasArnInput`<sup>Optional</sup> <a name="aliasArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput"></a>

```java
public java.lang.String getAliasArnInput();
```

- *Type:* java.lang.String

---

##### `aliasArn`<sup>Required</sup> <a name="aliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn"></a>

```java
public java.lang.String getAliasArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentAgentCollaboratorsAgentDescriptor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---


### BedrockAgentAgentCollaboratorsList <a name="BedrockAgentAgentCollaboratorsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentAgentCollaboratorsList;

new BedrockAgentAgentCollaboratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get"></a>

```java
public BedrockAgentAgentCollaboratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAgentAgentCollaborators> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>>

---


### BedrockAgentAgentCollaboratorsOutputReference <a name="BedrockAgentAgentCollaboratorsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentAgentCollaboratorsOutputReference;

new BedrockAgentAgentCollaboratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor">putAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor">resetAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction">resetCollaborationInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName">resetCollaboratorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory">resetRelayConversationHistory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentDescriptor` <a name="putAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor"></a>

```java
public void putAgentDescriptor(BedrockAgentAgentCollaboratorsAgentDescriptor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `resetAgentDescriptor` <a name="resetAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor"></a>

```java
public void resetAgentDescriptor()
```

##### `resetCollaborationInstruction` <a name="resetCollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction"></a>

```java
public void resetCollaborationInstruction()
```

##### `resetCollaboratorName` <a name="resetCollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName"></a>

```java
public void resetCollaboratorName()
```

##### `resetRelayConversationHistory` <a name="resetRelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory"></a>

```java
public void resetRelayConversationHistory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor">agentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput">agentDescriptorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput">collaborationInstructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput">collaboratorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput">relayConversationHistoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction">collaborationInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName">collaboratorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory">relayConversationHistory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentDescriptor`<sup>Required</sup> <a name="agentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor"></a>

```java
public BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference getAgentDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a>

---

##### `agentDescriptorInput`<sup>Optional</sup> <a name="agentDescriptorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput"></a>

```java
public IResolvable|BedrockAgentAgentCollaboratorsAgentDescriptor getAgentDescriptorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `collaborationInstructionInput`<sup>Optional</sup> <a name="collaborationInstructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput"></a>

```java
public java.lang.String getCollaborationInstructionInput();
```

- *Type:* java.lang.String

---

##### `collaboratorNameInput`<sup>Optional</sup> <a name="collaboratorNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput"></a>

```java
public java.lang.String getCollaboratorNameInput();
```

- *Type:* java.lang.String

---

##### `relayConversationHistoryInput`<sup>Optional</sup> <a name="relayConversationHistoryInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput"></a>

```java
public java.lang.String getRelayConversationHistoryInput();
```

- *Type:* java.lang.String

---

##### `collaborationInstruction`<sup>Required</sup> <a name="collaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction"></a>

```java
public java.lang.String getCollaborationInstruction();
```

- *Type:* java.lang.String

---

##### `collaboratorName`<sup>Required</sup> <a name="collaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName"></a>

```java
public java.lang.String getCollaboratorName();
```

- *Type:* java.lang.String

---

##### `relayConversationHistory`<sup>Required</sup> <a name="relayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory"></a>

```java
public java.lang.String getRelayConversationHistory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentAgentCollaborators getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>

---


### BedrockAgentCustomOrchestrationExecutorOutputReference <a name="BedrockAgentCustomOrchestrationExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentCustomOrchestrationExecutorOutputReference;

new BedrockAgentCustomOrchestrationExecutorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda"></a>

```java
public void resetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda">lambda</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput"></a>

```java
public java.lang.String getLambdaInput();
```

- *Type:* java.lang.String

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda"></a>

```java
public java.lang.String getLambda();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentCustomOrchestrationExecutor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---


### BedrockAgentCustomOrchestrationOutputReference <a name="BedrockAgentCustomOrchestrationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentCustomOrchestrationOutputReference;

new BedrockAgentCustomOrchestrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor">putExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor">resetExecutor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutor` <a name="putExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor"></a>

```java
public void putExecutor(BedrockAgentCustomOrchestrationExecutor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `resetExecutor` <a name="resetExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor"></a>

```java
public void resetExecutor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor">executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput">executorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executor`<sup>Required</sup> <a name="executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor"></a>

```java
public BedrockAgentCustomOrchestrationExecutorOutputReference getExecutor();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a>

---

##### `executorInput`<sup>Optional</sup> <a name="executorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput"></a>

```java
public IResolvable|BedrockAgentCustomOrchestrationExecutor getExecutorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentCustomOrchestration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---


### BedrockAgentGuardrailConfigurationOutputReference <a name="BedrockAgentGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentGuardrailConfigurationOutputReference;

new BedrockAgentGuardrailConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier">resetGuardrailIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion">resetGuardrailVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGuardrailIdentifier` <a name="resetGuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier"></a>

```java
public void resetGuardrailIdentifier()
```

##### `resetGuardrailVersion` <a name="resetGuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion"></a>

```java
public void resetGuardrailVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput">guardrailIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput">guardrailVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guardrailIdentifierInput`<sup>Optional</sup> <a name="guardrailIdentifierInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput"></a>

```java
public java.lang.String getGuardrailIdentifierInput();
```

- *Type:* java.lang.String

---

##### `guardrailVersionInput`<sup>Optional</sup> <a name="guardrailVersionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput"></a>

```java
public java.lang.String getGuardrailVersionInput();
```

- *Type:* java.lang.String

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```java
public java.lang.String getGuardrailIdentifier();
```

- *Type:* java.lang.String

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```java
public java.lang.String getGuardrailVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentGuardrailConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---


### BedrockAgentKnowledgeBasesList <a name="BedrockAgentKnowledgeBasesList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentKnowledgeBasesList;

new BedrockAgentKnowledgeBasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get"></a>

```java
public BedrockAgentKnowledgeBasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAgentKnowledgeBases> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>>

---


### BedrockAgentKnowledgeBasesOutputReference <a name="BedrockAgentKnowledgeBasesOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentKnowledgeBasesOutputReference;

new BedrockAgentKnowledgeBasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId">resetKnowledgeBaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState">resetKnowledgeBaseState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKnowledgeBaseId` <a name="resetKnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId"></a>

```java
public void resetKnowledgeBaseId()
```

##### `resetKnowledgeBaseState` <a name="resetKnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState"></a>

```java
public void resetKnowledgeBaseState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput">knowledgeBaseStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput"></a>

```java
public java.lang.String getKnowledgeBaseIdInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseStateInput`<sup>Optional</sup> <a name="knowledgeBaseStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput"></a>

```java
public java.lang.String getKnowledgeBaseStateInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState"></a>

```java
public java.lang.String getKnowledgeBaseState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentKnowledgeBases getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>

---


### BedrockAgentMemoryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentMemoryConfigurationOutputReference;

new BedrockAgentMemoryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration">putSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes">resetEnabledMemoryTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration">resetSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays">resetStorageDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionSummaryConfiguration` <a name="putSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration"></a>

```java
public void putSessionSummaryConfiguration(BedrockAgentMemoryConfigurationSessionSummaryConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `resetEnabledMemoryTypes` <a name="resetEnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes"></a>

```java
public void resetEnabledMemoryTypes()
```

##### `resetSessionSummaryConfiguration` <a name="resetSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration"></a>

```java
public void resetSessionSummaryConfiguration()
```

##### `resetStorageDays` <a name="resetStorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays"></a>

```java
public void resetStorageDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration">sessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput">enabledMemoryTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput">sessionSummaryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput">storageDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">enabledMemoryTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays">storageDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sessionSummaryConfiguration`<sup>Required</sup> <a name="sessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration"></a>

```java
public BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference getSessionSummaryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a>

---

##### `enabledMemoryTypesInput`<sup>Optional</sup> <a name="enabledMemoryTypesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput"></a>

```java
public java.util.List<java.lang.String> getEnabledMemoryTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sessionSummaryConfigurationInput`<sup>Optional</sup> <a name="sessionSummaryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput"></a>

```java
public IResolvable|BedrockAgentMemoryConfigurationSessionSummaryConfiguration getSessionSummaryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `storageDaysInput`<sup>Optional</sup> <a name="storageDaysInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput"></a>

```java
public java.lang.Number getStorageDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabledMemoryTypes`<sup>Required</sup> <a name="enabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```java
public java.util.List<java.lang.String> getEnabledMemoryTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageDays`<sup>Required</sup> <a name="storageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```java
public java.lang.Number getStorageDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentMemoryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---


### BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference;

new BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions">resetMaxRecentSessions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxRecentSessions` <a name="resetMaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions"></a>

```java
public void resetMaxRecentSessions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput">maxRecentSessionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions">maxRecentSessions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRecentSessionsInput`<sup>Optional</sup> <a name="maxRecentSessionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput"></a>

```java
public java.lang.Number getMaxRecentSessionsInput();
```

- *Type:* java.lang.Number

---

##### `maxRecentSessions`<sup>Required</sup> <a name="maxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions"></a>

```java
public java.lang.Number getMaxRecentSessions();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentMemoryConfigurationSessionSummaryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentPromptOverrideConfigurationOutputReference;

new BedrockAgentPromptOverrideConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">putPromptConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">resetOverrideLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">resetPromptConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptConfigurations` <a name="putPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```java
public void putPromptConfigurations(IResolvable|java.util.List<BedrockAgentPromptOverrideConfigurationPromptConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>>

---

##### `resetOverrideLambda` <a name="resetOverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```java
public void resetOverrideLambda()
```

##### `resetPromptConfigurations` <a name="resetPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```java
public void resetPromptConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">promptConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">overrideLambdaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">promptConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">overrideLambda</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `promptConfigurations`<sup>Required</sup> <a name="promptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```java
public BedrockAgentPromptOverrideConfigurationPromptConfigurationsList getPromptConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `overrideLambdaInput`<sup>Optional</sup> <a name="overrideLambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```java
public java.lang.String getOverrideLambdaInput();
```

- *Type:* java.lang.String

---

##### `promptConfigurationsInput`<sup>Optional</sup> <a name="promptConfigurationsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```java
public IResolvable|java.util.List<BedrockAgentPromptOverrideConfigurationPromptConfigurations> getPromptConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>>

---

##### `overrideLambda`<sup>Required</sup> <a name="overrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```java
public java.lang.String getOverrideLambda();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentPromptOverrideConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference;

new BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength">resetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">resetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumLength` <a name="resetMaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength"></a>

```java
public void resetMaximumLength()
```

##### `resetStopSequences` <a name="resetStopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```java
public void resetStopSequences()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```

##### `resetTopK` <a name="resetTopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```java
public void resetTopK()
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```java
public void resetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput">maximumLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">stopSequencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">topKInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">topPInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength">maximumLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">topK</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumLengthInput`<sup>Optional</sup> <a name="maximumLengthInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput"></a>

```java
public java.lang.Number getMaximumLengthInput();
```

- *Type:* java.lang.Number

---

##### `stopSequencesInput`<sup>Optional</sup> <a name="stopSequencesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```java
public java.util.List<java.lang.String> getStopSequencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```java
public java.lang.Number getTopKInput();
```

- *Type:* java.lang.Number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```java
public java.lang.Number getTopPInput();
```

- *Type:* java.lang.Number

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength"></a>

```java
public java.lang.Number getMaximumLength();
```

- *Type:* java.lang.Number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList;

new BedrockAgentPromptOverrideConfigurationPromptConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```java
public BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAgentPromptOverrideConfigurationPromptConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_agent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference;

new BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">putInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields">resetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">resetBasePromptTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel">resetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">resetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">resetParserMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">resetPromptCreationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">resetPromptState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">resetPromptType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceConfiguration` <a name="putInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```java
public void putInferenceConfiguration(BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `resetAdditionalModelRequestFields` <a name="resetAdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields"></a>

```java
public void resetAdditionalModelRequestFields()
```

##### `resetBasePromptTemplate` <a name="resetBasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```java
public void resetBasePromptTemplate()
```

##### `resetFoundationModel` <a name="resetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel"></a>

```java
public void resetFoundationModel()
```

##### `resetInferenceConfiguration` <a name="resetInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```java
public void resetInferenceConfiguration()
```

##### `resetParserMode` <a name="resetParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```java
public void resetParserMode()
```

##### `resetPromptCreationMode` <a name="resetPromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```java
public void resetPromptCreationMode()
```

##### `resetPromptState` <a name="resetPromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```java
public void resetPromptState()
```

##### `resetPromptType` <a name="resetPromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```java
public void resetPromptType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput">additionalModelRequestFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">basePromptTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput">foundationModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">inferenceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">parserModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">promptCreationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">promptStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">promptTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">basePromptTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel">foundationModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">parserMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">promptCreationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">promptState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">promptType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```java
public BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference getInferenceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a>

---

##### `additionalModelRequestFieldsInput`<sup>Optional</sup> <a name="additionalModelRequestFieldsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput"></a>

```java
public java.lang.String getAdditionalModelRequestFieldsInput();
```

- *Type:* java.lang.String

---

##### `basePromptTemplateInput`<sup>Optional</sup> <a name="basePromptTemplateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```java
public java.lang.String getBasePromptTemplateInput();
```

- *Type:* java.lang.String

---

##### `foundationModelInput`<sup>Optional</sup> <a name="foundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput"></a>

```java
public java.lang.String getFoundationModelInput();
```

- *Type:* java.lang.String

---

##### `inferenceConfigurationInput`<sup>Optional</sup> <a name="inferenceConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```java
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration getInferenceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `parserModeInput`<sup>Optional</sup> <a name="parserModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```java
public java.lang.String getParserModeInput();
```

- *Type:* java.lang.String

---

##### `promptCreationModeInput`<sup>Optional</sup> <a name="promptCreationModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```java
public java.lang.String getPromptCreationModeInput();
```

- *Type:* java.lang.String

---

##### `promptStateInput`<sup>Optional</sup> <a name="promptStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```java
public java.lang.String getPromptStateInput();
```

- *Type:* java.lang.String

---

##### `promptTypeInput`<sup>Optional</sup> <a name="promptTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```java
public java.lang.String getPromptTypeInput();
```

- *Type:* java.lang.String

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

---

##### `basePromptTemplate`<sup>Required</sup> <a name="basePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```java
public java.lang.String getBasePromptTemplate();
```

- *Type:* java.lang.String

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel"></a>

```java
public java.lang.String getFoundationModel();
```

- *Type:* java.lang.String

---

##### `parserMode`<sup>Required</sup> <a name="parserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```java
public java.lang.String getParserMode();
```

- *Type:* java.lang.String

---

##### `promptCreationMode`<sup>Required</sup> <a name="promptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```java
public java.lang.String getPromptCreationMode();
```

- *Type:* java.lang.String

---

##### `promptState`<sup>Required</sup> <a name="promptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```java
public java.lang.String getPromptState();
```

- *Type:* java.lang.String

---

##### `promptType`<sup>Required</sup> <a name="promptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```java
public java.lang.String getPromptType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>

---



