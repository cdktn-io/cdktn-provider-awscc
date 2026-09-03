# `bedrockAgent` Submodule <a name="`bedrockAgent` Submodule" id="@cdktn/provider-awscc.bedrockAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgent <a name="BedrockAgent" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent awscc_bedrock_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_name: str,
  action_groups: IResolvable | typing.List[BedrockAgentActionGroups] = None,
  agent_collaboration: str = None,
  agent_collaborators: IResolvable | typing.List[BedrockAgentAgentCollaborators] = None,
  agent_resource_role_arn: str = None,
  auto_prepare: bool | IResolvable = None,
  customer_encryption_key_arn: str = None,
  custom_orchestration: BedrockAgentCustomOrchestration = None,
  description: str = None,
  foundation_model: str = None,
  guardrail_configuration: BedrockAgentGuardrailConfiguration = None,
  idle_session_ttl_in_seconds: typing.Union[int, float] = None,
  instruction: str = None,
  knowledge_bases: IResolvable | typing.List[BedrockAgentKnowledgeBases] = None,
  memory_configuration: BedrockAgentMemoryConfiguration = None,
  orchestration_type: str = None,
  prompt_override_configuration: BedrockAgentPromptOverrideConfiguration = None,
  skip_resource_in_use_check_on_delete: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  test_alias_tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentName">agent_name</a></code> | <code>str</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.actionGroups">action_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]</code> | List of ActionGroups. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaboration">agent_collaboration</a></code> | <code>str</code> | Agent collaboration state. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaborators">agent_collaborators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]</code> | List of Agent Collaborators. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentResourceRoleArn">agent_resource_role_arn</a></code> | <code>str</code> | ARN of a IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.autoPrepare">auto_prepare</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to automatically prepare after creating or updating the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customOrchestration">custom_orchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | Structure for custom orchestration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.foundationModel">foundation_model</a></code> | <code>str</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.guardrailConfiguration">guardrail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | Configuration for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Max Session Time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.instruction">instruction</a></code> | <code>str</code> | Instruction for the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.knowledgeBases">knowledge_bases</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]</code> | List of Agent Knowledge Bases. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.memoryConfiguration">memory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | Configuration for memory storage. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.orchestrationType">orchestration_type</a></code> | <code>str</code> | Types of orchestration strategy for agents. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.promptOverrideConfiguration">prompt_override_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | Configuration for prompt override. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.skipResourceInUseCheckOnDelete">skip_resource_in_use_check_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to allow deleting agent while it is in use. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.testAliasTags">test_alias_tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentName"></a>

- *Type:* str

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_name BedrockAgent#agent_name}

---

##### `action_groups`<sup>Optional</sup> <a name="action_groups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.actionGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]

List of ActionGroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_groups BedrockAgent#action_groups}

---

##### `agent_collaboration`<sup>Optional</sup> <a name="agent_collaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaboration"></a>

- *Type:* str

Agent collaboration state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaboration BedrockAgent#agent_collaboration}

---

##### `agent_collaborators`<sup>Optional</sup> <a name="agent_collaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentCollaborators"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]

List of Agent Collaborators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaborators BedrockAgent#agent_collaborators}

---

##### `agent_resource_role_arn`<sup>Optional</sup> <a name="agent_resource_role_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.agentResourceRoleArn"></a>

- *Type:* str

ARN of a IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_resource_role_arn BedrockAgent#agent_resource_role_arn}

---

##### `auto_prepare`<sup>Optional</sup> <a name="auto_prepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.autoPrepare"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to automatically prepare after creating or updating the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#auto_prepare BedrockAgent#auto_prepare}

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* str

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#customer_encryption_key_arn BedrockAgent#customer_encryption_key_arn}

---

##### `custom_orchestration`<sup>Optional</sup> <a name="custom_orchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.customOrchestration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

Structure for custom orchestration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#custom_orchestration BedrockAgent#custom_orchestration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.description"></a>

- *Type:* str

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `foundation_model`<sup>Optional</sup> <a name="foundation_model" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.foundationModel"></a>

- *Type:* str

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `guardrail_configuration`<sup>Optional</sup> <a name="guardrail_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.guardrailConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

Configuration for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_configuration BedrockAgent#guardrail_configuration}

---

##### `idle_session_ttl_in_seconds`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.idleSessionTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Max Session Time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#idle_session_ttl_in_seconds BedrockAgent#idle_session_ttl_in_seconds}

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.instruction"></a>

- *Type:* str

Instruction for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#instruction BedrockAgent#instruction}

---

##### `knowledge_bases`<sup>Optional</sup> <a name="knowledge_bases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.knowledgeBases"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]

List of Agent Knowledge Bases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_bases BedrockAgent#knowledge_bases}

---

##### `memory_configuration`<sup>Optional</sup> <a name="memory_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.memoryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

Configuration for memory storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#memory_configuration BedrockAgent#memory_configuration}

---

##### `orchestration_type`<sup>Optional</sup> <a name="orchestration_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.orchestrationType"></a>

- *Type:* str

Types of orchestration strategy for agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#orchestration_type BedrockAgent#orchestration_type}

---

##### `prompt_override_configuration`<sup>Optional</sup> <a name="prompt_override_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.promptOverrideConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

Configuration for prompt override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_override_configuration BedrockAgent#prompt_override_configuration}

---

##### `skip_resource_in_use_check_on_delete`<sup>Optional</sup> <a name="skip_resource_in_use_check_on_delete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.skipResourceInUseCheckOnDelete"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to allow deleting agent while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#tags BedrockAgent#tags}

---

##### `test_alias_tags`<sup>Optional</sup> <a name="test_alias_tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.testAliasTags"></a>

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#test_alias_tags BedrockAgent#test_alias_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups">put_action_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators">put_agent_collaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration">put_custom_orchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration">put_guardrail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases">put_knowledge_bases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration">put_memory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration">put_prompt_override_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups">reset_action_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration">reset_agent_collaboration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators">reset_agent_collaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn">reset_agent_resource_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare">reset_auto_prepare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn">reset_customer_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration">reset_custom_orchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel">reset_foundation_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration">reset_guardrail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds">reset_idle_session_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases">reset_knowledge_bases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration">reset_memory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType">reset_orchestration_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration">reset_prompt_override_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete">reset_skip_resource_in_use_check_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags">reset_test_alias_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_groups` <a name="put_action_groups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups"></a>

```python
def put_action_groups(
  value: IResolvable | typing.List[BedrockAgentActionGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]

---

##### `put_agent_collaborators` <a name="put_agent_collaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators"></a>

```python
def put_agent_collaborators(
  value: IResolvable | typing.List[BedrockAgentAgentCollaborators]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]

---

##### `put_custom_orchestration` <a name="put_custom_orchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration"></a>

```python
def put_custom_orchestration(
  executor: BedrockAgentCustomOrchestrationExecutor = None
) -> None
```

###### `executor`<sup>Optional</sup> <a name="executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration.parameter.executor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

Types of executors for custom orchestration strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#executor BedrockAgent#executor}

---

##### `put_guardrail_configuration` <a name="put_guardrail_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration"></a>

```python
def put_guardrail_configuration(
  guardrail_identifier: str = None,
  guardrail_version: str = None
) -> None
```

###### `guardrail_identifier`<sup>Optional</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration.parameter.guardrailIdentifier"></a>

- *Type:* str

Identifier for the guardrail, could be the id or the arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_identifier BedrockAgent#guardrail_identifier}

---

###### `guardrail_version`<sup>Optional</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration.parameter.guardrailVersion"></a>

- *Type:* str

Version of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_version BedrockAgent#guardrail_version}

---

##### `put_knowledge_bases` <a name="put_knowledge_bases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases"></a>

```python
def put_knowledge_bases(
  value: IResolvable | typing.List[BedrockAgentKnowledgeBases]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]

---

##### `put_memory_configuration` <a name="put_memory_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration"></a>

```python
def put_memory_configuration(
  enabled_memory_types: typing.List[str] = None,
  session_summary_configuration: BedrockAgentMemoryConfigurationSessionSummaryConfiguration = None,
  storage_days: typing.Union[int, float] = None
) -> None
```

###### `enabled_memory_types`<sup>Optional</sup> <a name="enabled_memory_types" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration.parameter.enabledMemoryTypes"></a>

- *Type:* typing.List[str]

Types of session storage persisted in memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#enabled_memory_types BedrockAgent#enabled_memory_types}

---

###### `session_summary_configuration`<sup>Optional</sup> <a name="session_summary_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration.parameter.sessionSummaryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

Configuration for Session Summarization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#session_summary_configuration BedrockAgent#session_summary_configuration}

---

###### `storage_days`<sup>Optional</sup> <a name="storage_days" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration.parameter.storageDays"></a>

- *Type:* typing.Union[int, float]

Maximum number of days to store session details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#storage_days BedrockAgent#storage_days}

---

##### `put_prompt_override_configuration` <a name="put_prompt_override_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration"></a>

```python
def put_prompt_override_configuration(
  override_lambda: str = None,
  prompt_configurations: IResolvable | typing.List[BedrockAgentPromptOverrideConfigurationPromptConfigurations] = None
) -> None
```

###### `override_lambda`<sup>Optional</sup> <a name="override_lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration.parameter.overrideLambda"></a>

- *Type:* str

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#override_lambda BedrockAgent#override_lambda}

---

###### `prompt_configurations`<sup>Optional</sup> <a name="prompt_configurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration.parameter.promptConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]

List of BasePromptConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_configurations BedrockAgent#prompt_configurations}

---

##### `reset_action_groups` <a name="reset_action_groups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups"></a>

```python
def reset_action_groups() -> None
```

##### `reset_agent_collaboration` <a name="reset_agent_collaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration"></a>

```python
def reset_agent_collaboration() -> None
```

##### `reset_agent_collaborators` <a name="reset_agent_collaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators"></a>

```python
def reset_agent_collaborators() -> None
```

##### `reset_agent_resource_role_arn` <a name="reset_agent_resource_role_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn"></a>

```python
def reset_agent_resource_role_arn() -> None
```

##### `reset_auto_prepare` <a name="reset_auto_prepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare"></a>

```python
def reset_auto_prepare() -> None
```

##### `reset_customer_encryption_key_arn` <a name="reset_customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn"></a>

```python
def reset_customer_encryption_key_arn() -> None
```

##### `reset_custom_orchestration` <a name="reset_custom_orchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration"></a>

```python
def reset_custom_orchestration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_foundation_model` <a name="reset_foundation_model" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel"></a>

```python
def reset_foundation_model() -> None
```

##### `reset_guardrail_configuration` <a name="reset_guardrail_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration"></a>

```python
def reset_guardrail_configuration() -> None
```

##### `reset_idle_session_ttl_in_seconds` <a name="reset_idle_session_ttl_in_seconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds"></a>

```python
def reset_idle_session_ttl_in_seconds() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_knowledge_bases` <a name="reset_knowledge_bases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases"></a>

```python
def reset_knowledge_bases() -> None
```

##### `reset_memory_configuration` <a name="reset_memory_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration"></a>

```python
def reset_memory_configuration() -> None
```

##### `reset_orchestration_type` <a name="reset_orchestration_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType"></a>

```python
def reset_orchestration_type() -> None
```

##### `reset_prompt_override_configuration` <a name="reset_prompt_override_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration"></a>

```python
def reset_prompt_override_configuration() -> None
```

##### `reset_skip_resource_in_use_check_on_delete` <a name="reset_skip_resource_in_use_check_on_delete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete"></a>

```python
def reset_skip_resource_in_use_check_on_delete() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_test_alias_tags` <a name="reset_test_alias_tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags"></a>

```python
def reset_test_alias_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups">action_groups</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn">agent_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators">agent_collaborators</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus">agent_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration">custom_orchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons">failure_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration">guardrail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases">knowledge_bases</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration">memory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt">prepared_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration">prompt_override_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions">recommended_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput">action_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput">agent_collaboration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput">agent_collaborators_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput">agent_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput">agent_resource_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput">auto_prepare_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput">customer_encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput">custom_orchestration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput">foundation_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput">guardrail_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput">idle_session_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput">knowledge_bases_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput">memory_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput">orchestration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput">prompt_override_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput">skip_resource_in_use_check_on_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput">test_alias_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration">agent_collaboration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName">agent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn">agent_resource_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare">auto_prepare</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel">foundation_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType">orchestration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete">skip_resource_in_use_check_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags">test_alias_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_groups`<sup>Required</sup> <a name="action_groups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups"></a>

```python
action_groups: BedrockAgentActionGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a>

---

##### `agent_arn`<sup>Required</sup> <a name="agent_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn"></a>

```python
agent_arn: str
```

- *Type:* str

---

##### `agent_collaborators`<sup>Required</sup> <a name="agent_collaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators"></a>

```python
agent_collaborators: BedrockAgentAgentCollaboratorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a>

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `agent_status`<sup>Required</sup> <a name="agent_status" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus"></a>

```python
agent_status: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_orchestration`<sup>Required</sup> <a name="custom_orchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration"></a>

```python
custom_orchestration: BedrockAgentCustomOrchestrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a>

---

##### `failure_reasons`<sup>Required</sup> <a name="failure_reasons" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons"></a>

```python
failure_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guardrail_configuration`<sup>Required</sup> <a name="guardrail_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration"></a>

```python
guardrail_configuration: BedrockAgentGuardrailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_bases`<sup>Required</sup> <a name="knowledge_bases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases"></a>

```python
knowledge_bases: BedrockAgentKnowledgeBasesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a>

---

##### `memory_configuration`<sup>Required</sup> <a name="memory_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration"></a>

```python
memory_configuration: BedrockAgentMemoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a>

---

##### `prepared_at`<sup>Required</sup> <a name="prepared_at" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt"></a>

```python
prepared_at: str
```

- *Type:* str

---

##### `prompt_override_configuration`<sup>Required</sup> <a name="prompt_override_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration"></a>

```python
prompt_override_configuration: BedrockAgentPromptOverrideConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a>

---

##### `recommended_actions`<sup>Required</sup> <a name="recommended_actions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions"></a>

```python
recommended_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `action_groups_input`<sup>Optional</sup> <a name="action_groups_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput"></a>

```python
action_groups_input: IResolvable | typing.List[BedrockAgentActionGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]

---

##### `agent_collaboration_input`<sup>Optional</sup> <a name="agent_collaboration_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput"></a>

```python
agent_collaboration_input: str
```

- *Type:* str

---

##### `agent_collaborators_input`<sup>Optional</sup> <a name="agent_collaborators_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput"></a>

```python
agent_collaborators_input: IResolvable | typing.List[BedrockAgentAgentCollaborators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]

---

##### `agent_name_input`<sup>Optional</sup> <a name="agent_name_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput"></a>

```python
agent_name_input: str
```

- *Type:* str

---

##### `agent_resource_role_arn_input`<sup>Optional</sup> <a name="agent_resource_role_arn_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput"></a>

```python
agent_resource_role_arn_input: str
```

- *Type:* str

---

##### `auto_prepare_input`<sup>Optional</sup> <a name="auto_prepare_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput"></a>

```python
auto_prepare_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `customer_encryption_key_arn_input`<sup>Optional</sup> <a name="customer_encryption_key_arn_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput"></a>

```python
customer_encryption_key_arn_input: str
```

- *Type:* str

---

##### `custom_orchestration_input`<sup>Optional</sup> <a name="custom_orchestration_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput"></a>

```python
custom_orchestration_input: IResolvable | BedrockAgentCustomOrchestration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `foundation_model_input`<sup>Optional</sup> <a name="foundation_model_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput"></a>

```python
foundation_model_input: str
```

- *Type:* str

---

##### `guardrail_configuration_input`<sup>Optional</sup> <a name="guardrail_configuration_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput"></a>

```python
guardrail_configuration_input: IResolvable | BedrockAgentGuardrailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `idle_session_ttl_in_seconds_input`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput"></a>

```python
idle_session_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `knowledge_bases_input`<sup>Optional</sup> <a name="knowledge_bases_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput"></a>

```python
knowledge_bases_input: IResolvable | typing.List[BedrockAgentKnowledgeBases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]

---

##### `memory_configuration_input`<sup>Optional</sup> <a name="memory_configuration_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput"></a>

```python
memory_configuration_input: IResolvable | BedrockAgentMemoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `orchestration_type_input`<sup>Optional</sup> <a name="orchestration_type_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput"></a>

```python
orchestration_type_input: str
```

- *Type:* str

---

##### `prompt_override_configuration_input`<sup>Optional</sup> <a name="prompt_override_configuration_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput"></a>

```python
prompt_override_configuration_input: IResolvable | BedrockAgentPromptOverrideConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `skip_resource_in_use_check_on_delete_input`<sup>Optional</sup> <a name="skip_resource_in_use_check_on_delete_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput"></a>

```python
skip_resource_in_use_check_on_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `test_alias_tags_input`<sup>Optional</sup> <a name="test_alias_tags_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput"></a>

```python
test_alias_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `agent_collaboration`<sup>Required</sup> <a name="agent_collaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration"></a>

```python
agent_collaboration: str
```

- *Type:* str

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

---

##### `agent_resource_role_arn`<sup>Required</sup> <a name="agent_resource_role_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn"></a>

```python
agent_resource_role_arn: str
```

- *Type:* str

---

##### `auto_prepare`<sup>Required</sup> <a name="auto_prepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare"></a>

```python
auto_prepare: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `foundation_model`<sup>Required</sup> <a name="foundation_model" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel"></a>

```python
foundation_model: str
```

- *Type:* str

---

##### `idle_session_ttl_in_seconds`<sup>Required</sup> <a name="idle_session_ttl_in_seconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `orchestration_type`<sup>Required</sup> <a name="orchestration_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType"></a>

```python
orchestration_type: str
```

- *Type:* str

---

##### `skip_resource_in_use_check_on_delete`<sup>Required</sup> <a name="skip_resource_in_use_check_on_delete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete"></a>

```python
skip_resource_in_use_check_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `test_alias_tags`<sup>Required</sup> <a name="test_alias_tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags"></a>

```python
test_alias_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentActionGroups <a name="BedrockAgentActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroups(
  action_group_executor: BedrockAgentActionGroupsActionGroupExecutor = None,
  action_group_name: str = None,
  action_group_state: str = None,
  api_schema: BedrockAgentActionGroupsApiSchema = None,
  description: str = None,
  function_schema: BedrockAgentActionGroupsFunctionSchema = None,
  parent_action_group_signature: str = None,
  skip_resource_in_use_check_on_delete: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor">action_group_executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | Type of Executors for an Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName">action_group_name</a></code> | <code>str</code> | Name of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState">action_group_state</a></code> | <code>str</code> | State of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema">api_schema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | Contains information about the API Schema for the Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description">description</a></code> | <code>str</code> | Description of action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema">function_schema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | Schema of Functions. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature">parent_action_group_signature</a></code> | <code>str</code> | Action Group Signature for a BuiltIn Action. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete">skip_resource_in_use_check_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to allow deleting action group while it is in use. |

---

##### `action_group_executor`<sup>Optional</sup> <a name="action_group_executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor"></a>

```python
action_group_executor: BedrockAgentActionGroupsActionGroupExecutor
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

Type of Executors for an Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_group_executor BedrockAgent#action_group_executor}

---

##### `action_group_name`<sup>Optional</sup> <a name="action_group_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName"></a>

```python
action_group_name: str
```

- *Type:* str

Name of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_group_name BedrockAgent#action_group_name}

---

##### `action_group_state`<sup>Optional</sup> <a name="action_group_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState"></a>

```python
action_group_state: str
```

- *Type:* str

State of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_group_state BedrockAgent#action_group_state}

---

##### `api_schema`<sup>Optional</sup> <a name="api_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema"></a>

```python
api_schema: BedrockAgentActionGroupsApiSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

Contains information about the API Schema for the Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#api_schema BedrockAgent#api_schema}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description"></a>

```python
description: str
```

- *Type:* str

Description of action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `function_schema`<sup>Optional</sup> <a name="function_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema"></a>

```python
function_schema: BedrockAgentActionGroupsFunctionSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

Schema of Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#function_schema BedrockAgent#function_schema}

---

##### `parent_action_group_signature`<sup>Optional</sup> <a name="parent_action_group_signature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature"></a>

```python
parent_action_group_signature: str
```

- *Type:* str

Action Group Signature for a BuiltIn Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#parent_action_group_signature BedrockAgent#parent_action_group_signature}

---

##### `skip_resource_in_use_check_on_delete`<sup>Optional</sup> <a name="skip_resource_in_use_check_on_delete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete"></a>

```python
skip_resource_in_use_check_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to allow deleting action group while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

### BedrockAgentActionGroupsActionGroupExecutor <a name="BedrockAgentActionGroupsActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor(
  custom_control: str = None,
  lambda: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl">custom_control</a></code> | <code>str</code> | Custom control of action execution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda">lambda</a></code> | <code>str</code> | ARN of a Lambda. |

---

##### `custom_control`<sup>Optional</sup> <a name="custom_control" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl"></a>

```python
custom_control: str
```

- *Type:* str

Custom control of action execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#custom_control BedrockAgent#custom_control}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentActionGroupsApiSchema <a name="BedrockAgentActionGroupsApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsApiSchema(
  payload: str = None,
  s3: BedrockAgentActionGroupsApiSchemaS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload">payload</a></code> | <code>str</code> | String OpenAPI Payload. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | The identifier for the S3 resource. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload"></a>

```python
payload: str
```

- *Type:* str

String OpenAPI Payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#payload BedrockAgent#payload}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3"></a>

```python
s3: BedrockAgentActionGroupsApiSchemaS3
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3 BedrockAgent#s3}

---

### BedrockAgentActionGroupsApiSchemaS3 <a name="BedrockAgentActionGroupsApiSchemaS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsApiSchemaS3(
  s3_bucket_name: str = None,
  s3_object_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey">s3_object_key</a></code> | <code>str</code> | A object key in S3. |

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3_bucket_name BedrockAgent#s3_bucket_name}

---

##### `s3_object_key`<sup>Optional</sup> <a name="s3_object_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey"></a>

```python
s3_object_key: str
```

- *Type:* str

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3_object_key BedrockAgent#s3_object_key}

---

### BedrockAgentActionGroupsFunctionSchema <a name="BedrockAgentActionGroupsFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchema(
  functions: IResolvable | typing.List[BedrockAgentActionGroupsFunctionSchemaFunctions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions">functions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]</code> | List of Function definitions. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions"></a>

```python
functions: IResolvable | typing.List[BedrockAgentActionGroupsFunctionSchemaFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]

List of Function definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#functions BedrockAgent#functions}

---

### BedrockAgentActionGroupsFunctionSchemaFunctions <a name="BedrockAgentActionGroupsFunctionSchemaFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions(
  description: str = None,
  name: str = None,
  parameters: IResolvable | typing.Mapping[BedrockAgentActionGroupsFunctionSchemaFunctionsParameters] = None,
  require_confirmation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description">description</a></code> | <code>str</code> | Description of function. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name">name</a></code> | <code>str</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>]</code> | A map of parameter name and detail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation">require_confirmation</a></code> | <code>str</code> | ENUM to check if action requires user confirmation. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name"></a>

```python
name: str
```

- *Type:* str

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#name BedrockAgent#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters"></a>

```python
parameters: IResolvable | typing.Mapping[BedrockAgentActionGroupsFunctionSchemaFunctionsParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>]

A map of parameter name and detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#parameters BedrockAgent#parameters}

---

##### `require_confirmation`<sup>Optional</sup> <a name="require_confirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation"></a>

```python
require_confirmation: str
```

- *Type:* str

ENUM to check if action requires user confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#require_confirmation BedrockAgent#require_confirmation}

---

### BedrockAgentActionGroupsFunctionSchemaFunctionsParameters <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters(
  description: str = None,
  required: bool | IResolvable = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description">description</a></code> | <code>str</code> | Description of function parameter. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | Information about if a parameter is required for function call. Default to false. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type">type</a></code> | <code>str</code> | Parameter Type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Description of function parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Information about if a parameter is required for function call. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#required BedrockAgent#required}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Parameter Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#type BedrockAgent#type}

---

### BedrockAgentAgentCollaborators <a name="BedrockAgentAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentAgentCollaborators(
  agent_descriptor: BedrockAgentAgentCollaboratorsAgentDescriptor = None,
  collaboration_instruction: str = None,
  collaborator_name: str = None,
  relay_conversation_history: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor">agent_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | Agent descriptor for agent collaborator. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction">collaboration_instruction</a></code> | <code>str</code> | Agent collaborator instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName">collaborator_name</a></code> | <code>str</code> | Agent collaborator name. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory">relay_conversation_history</a></code> | <code>str</code> | Relay conversation history state. |

---

##### `agent_descriptor`<sup>Optional</sup> <a name="agent_descriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor"></a>

```python
agent_descriptor: BedrockAgentAgentCollaboratorsAgentDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

Agent descriptor for agent collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_descriptor BedrockAgent#agent_descriptor}

---

##### `collaboration_instruction`<sup>Optional</sup> <a name="collaboration_instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction"></a>

```python
collaboration_instruction: str
```

- *Type:* str

Agent collaborator instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#collaboration_instruction BedrockAgent#collaboration_instruction}

---

##### `collaborator_name`<sup>Optional</sup> <a name="collaborator_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName"></a>

```python
collaborator_name: str
```

- *Type:* str

Agent collaborator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#collaborator_name BedrockAgent#collaborator_name}

---

##### `relay_conversation_history`<sup>Optional</sup> <a name="relay_conversation_history" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory"></a>

```python
relay_conversation_history: str
```

- *Type:* str

Relay conversation history state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#relay_conversation_history BedrockAgent#relay_conversation_history}

---

### BedrockAgentAgentCollaboratorsAgentDescriptor <a name="BedrockAgentAgentCollaboratorsAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor(
  alias_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn">alias_arn</a></code> | <code>str</code> | Alias ARN for agent descriptor. |

---

##### `alias_arn`<sup>Optional</sup> <a name="alias_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn"></a>

```python
alias_arn: str
```

- *Type:* str

Alias ARN for agent descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#alias_arn BedrockAgent#alias_arn}

---

### BedrockAgentConfig <a name="BedrockAgentConfig" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_name: str,
  action_groups: IResolvable | typing.List[BedrockAgentActionGroups] = None,
  agent_collaboration: str = None,
  agent_collaborators: IResolvable | typing.List[BedrockAgentAgentCollaborators] = None,
  agent_resource_role_arn: str = None,
  auto_prepare: bool | IResolvable = None,
  customer_encryption_key_arn: str = None,
  custom_orchestration: BedrockAgentCustomOrchestration = None,
  description: str = None,
  foundation_model: str = None,
  guardrail_configuration: BedrockAgentGuardrailConfiguration = None,
  idle_session_ttl_in_seconds: typing.Union[int, float] = None,
  instruction: str = None,
  knowledge_bases: IResolvable | typing.List[BedrockAgentKnowledgeBases] = None,
  memory_configuration: BedrockAgentMemoryConfiguration = None,
  orchestration_type: str = None,
  prompt_override_configuration: BedrockAgentPromptOverrideConfiguration = None,
  skip_resource_in_use_check_on_delete: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  test_alias_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName">agent_name</a></code> | <code>str</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups">action_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]</code> | List of ActionGroups. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration">agent_collaboration</a></code> | <code>str</code> | Agent collaboration state. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators">agent_collaborators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]</code> | List of Agent Collaborators. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn">agent_resource_role_arn</a></code> | <code>str</code> | ARN of a IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare">auto_prepare</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to automatically prepare after creating or updating the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration">custom_orchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | Structure for custom orchestration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description">description</a></code> | <code>str</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel">foundation_model</a></code> | <code>str</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration">guardrail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | Configuration for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Max Session Time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction">instruction</a></code> | <code>str</code> | Instruction for the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases">knowledge_bases</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]</code> | List of Agent Knowledge Bases. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration">memory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | Configuration for memory storage. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType">orchestration_type</a></code> | <code>str</code> | Types of orchestration strategy for agents. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration">prompt_override_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | Configuration for prompt override. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete">skip_resource_in_use_check_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to allow deleting agent while it is in use. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags">test_alias_tags</a></code> | <code>typing.Mapping[str]</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_name BedrockAgent#agent_name}

---

##### `action_groups`<sup>Optional</sup> <a name="action_groups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups"></a>

```python
action_groups: IResolvable | typing.List[BedrockAgentActionGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]

List of ActionGroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#action_groups BedrockAgent#action_groups}

---

##### `agent_collaboration`<sup>Optional</sup> <a name="agent_collaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration"></a>

```python
agent_collaboration: str
```

- *Type:* str

Agent collaboration state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaboration BedrockAgent#agent_collaboration}

---

##### `agent_collaborators`<sup>Optional</sup> <a name="agent_collaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators"></a>

```python
agent_collaborators: IResolvable | typing.List[BedrockAgentAgentCollaborators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]

List of Agent Collaborators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_collaborators BedrockAgent#agent_collaborators}

---

##### `agent_resource_role_arn`<sup>Optional</sup> <a name="agent_resource_role_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn"></a>

```python
agent_resource_role_arn: str
```

- *Type:* str

ARN of a IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#agent_resource_role_arn BedrockAgent#agent_resource_role_arn}

---

##### `auto_prepare`<sup>Optional</sup> <a name="auto_prepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare"></a>

```python
auto_prepare: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to automatically prepare after creating or updating the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#auto_prepare BedrockAgent#auto_prepare}

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#customer_encryption_key_arn BedrockAgent#customer_encryption_key_arn}

---

##### `custom_orchestration`<sup>Optional</sup> <a name="custom_orchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration"></a>

```python
custom_orchestration: BedrockAgentCustomOrchestration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

Structure for custom orchestration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#custom_orchestration BedrockAgent#custom_orchestration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `foundation_model`<sup>Optional</sup> <a name="foundation_model" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel"></a>

```python
foundation_model: str
```

- *Type:* str

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `guardrail_configuration`<sup>Optional</sup> <a name="guardrail_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration"></a>

```python
guardrail_configuration: BedrockAgentGuardrailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

Configuration for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_configuration BedrockAgent#guardrail_configuration}

---

##### `idle_session_ttl_in_seconds`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max Session Time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#idle_session_ttl_in_seconds BedrockAgent#idle_session_ttl_in_seconds}

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Instruction for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#instruction BedrockAgent#instruction}

---

##### `knowledge_bases`<sup>Optional</sup> <a name="knowledge_bases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases"></a>

```python
knowledge_bases: IResolvable | typing.List[BedrockAgentKnowledgeBases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]

List of Agent Knowledge Bases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_bases BedrockAgent#knowledge_bases}

---

##### `memory_configuration`<sup>Optional</sup> <a name="memory_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration"></a>

```python
memory_configuration: BedrockAgentMemoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

Configuration for memory storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#memory_configuration BedrockAgent#memory_configuration}

---

##### `orchestration_type`<sup>Optional</sup> <a name="orchestration_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType"></a>

```python
orchestration_type: str
```

- *Type:* str

Types of orchestration strategy for agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#orchestration_type BedrockAgent#orchestration_type}

---

##### `prompt_override_configuration`<sup>Optional</sup> <a name="prompt_override_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration"></a>

```python
prompt_override_configuration: BedrockAgentPromptOverrideConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

Configuration for prompt override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_override_configuration BedrockAgent#prompt_override_configuration}

---

##### `skip_resource_in_use_check_on_delete`<sup>Optional</sup> <a name="skip_resource_in_use_check_on_delete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete"></a>

```python
skip_resource_in_use_check_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to allow deleting agent while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#tags BedrockAgent#tags}

---

##### `test_alias_tags`<sup>Optional</sup> <a name="test_alias_tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags"></a>

```python
test_alias_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#test_alias_tags BedrockAgent#test_alias_tags}

---

### BedrockAgentCustomOrchestration <a name="BedrockAgentCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentCustomOrchestration(
  executor: BedrockAgentCustomOrchestrationExecutor = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor">executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | Types of executors for custom orchestration strategy. |

---

##### `executor`<sup>Optional</sup> <a name="executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor"></a>

```python
executor: BedrockAgentCustomOrchestrationExecutor
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

Types of executors for custom orchestration strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#executor BedrockAgent#executor}

---

### BedrockAgentCustomOrchestrationExecutor <a name="BedrockAgentCustomOrchestrationExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentCustomOrchestrationExecutor(
  lambda: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda">lambda</a></code> | <code>str</code> | ARN of a Lambda. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentGuardrailConfiguration <a name="BedrockAgentGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentGuardrailConfiguration(
  guardrail_identifier: str = None,
  guardrail_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | Identifier for the guardrail, could be the id or the arn. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | Version of the guardrail. |

---

##### `guardrail_identifier`<sup>Optional</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

Identifier for the guardrail, could be the id or the arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_identifier BedrockAgent#guardrail_identifier}

---

##### `guardrail_version`<sup>Optional</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

Version of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#guardrail_version BedrockAgent#guardrail_version}

---

### BedrockAgentKnowledgeBases <a name="BedrockAgentKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentKnowledgeBases(
  description: str = None,
  knowledge_base_id: str = None,
  knowledge_base_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description">description</a></code> | <code>str</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState">knowledge_base_state</a></code> | <code>str</code> | State of the knowledge base; whether it is enabled or disabled. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `knowledge_base_id`<sup>Optional</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_base_id BedrockAgent#knowledge_base_id}

---

##### `knowledge_base_state`<sup>Optional</sup> <a name="knowledge_base_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState"></a>

```python
knowledge_base_state: str
```

- *Type:* str

State of the knowledge base; whether it is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#knowledge_base_state BedrockAgent#knowledge_base_state}

---

### BedrockAgentMemoryConfiguration <a name="BedrockAgentMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentMemoryConfiguration(
  enabled_memory_types: typing.List[str] = None,
  session_summary_configuration: BedrockAgentMemoryConfigurationSessionSummaryConfiguration = None,
  storage_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes">enabled_memory_types</a></code> | <code>typing.List[str]</code> | Types of session storage persisted in memory. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration">session_summary_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | Configuration for Session Summarization. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays">storage_days</a></code> | <code>typing.Union[int, float]</code> | Maximum number of days to store session details. |

---

##### `enabled_memory_types`<sup>Optional</sup> <a name="enabled_memory_types" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes"></a>

```python
enabled_memory_types: typing.List[str]
```

- *Type:* typing.List[str]

Types of session storage persisted in memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#enabled_memory_types BedrockAgent#enabled_memory_types}

---

##### `session_summary_configuration`<sup>Optional</sup> <a name="session_summary_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration"></a>

```python
session_summary_configuration: BedrockAgentMemoryConfigurationSessionSummaryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

Configuration for Session Summarization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#session_summary_configuration BedrockAgent#session_summary_configuration}

---

##### `storage_days`<sup>Optional</sup> <a name="storage_days" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays"></a>

```python
storage_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of days to store session details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#storage_days BedrockAgent#storage_days}

---

### BedrockAgentMemoryConfigurationSessionSummaryConfiguration <a name="BedrockAgentMemoryConfigurationSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration(
  max_recent_sessions: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions">max_recent_sessions</a></code> | <code>typing.Union[int, float]</code> | Maximum number of Sessions to Summarize. |

---

##### `max_recent_sessions`<sup>Optional</sup> <a name="max_recent_sessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions"></a>

```python
max_recent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of Sessions to Summarize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#max_recent_sessions BedrockAgent#max_recent_sessions}

---

### BedrockAgentPromptOverrideConfiguration <a name="BedrockAgentPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentPromptOverrideConfiguration(
  override_lambda: str = None,
  prompt_configurations: IResolvable | typing.List[BedrockAgentPromptOverrideConfigurationPromptConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda">override_lambda</a></code> | <code>str</code> | ARN of a Lambda. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations">prompt_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]</code> | List of BasePromptConfiguration. |

---

##### `override_lambda`<sup>Optional</sup> <a name="override_lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```python
override_lambda: str
```

- *Type:* str

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#override_lambda BedrockAgent#override_lambda}

---

##### `prompt_configurations`<sup>Optional</sup> <a name="prompt_configurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```python
prompt_configurations: IResolvable | typing.List[BedrockAgentPromptOverrideConfigurationPromptConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]

List of BasePromptConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_configurations BedrockAgent#prompt_configurations}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations(
  additional_model_request_fields: str = None,
  base_prompt_template: str = None,
  foundation_model: str = None,
  inference_configuration: BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration = None,
  parser_mode: str = None,
  prompt_creation_mode: str = None,
  prompt_state: str = None,
  prompt_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields">additional_model_request_fields</a></code> | <code>str</code> | Additional Model Request Fields for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">base_prompt_template</a></code> | <code>str</code> | Base Prompt Template. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel">foundation_model</a></code> | <code>str</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | Configuration for inference in prompt configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">parser_mode</a></code> | <code>str</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">prompt_creation_mode</a></code> | <code>str</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">prompt_state</a></code> | <code>str</code> | Prompt State. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">prompt_type</a></code> | <code>str</code> | Prompt Type. |

---

##### `additional_model_request_fields`<sup>Optional</sup> <a name="additional_model_request_fields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields"></a>

```python
additional_model_request_fields: str
```

- *Type:* str

Additional Model Request Fields for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#additional_model_request_fields BedrockAgent#additional_model_request_fields}

---

##### `base_prompt_template`<sup>Optional</sup> <a name="base_prompt_template" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```python
base_prompt_template: str
```

- *Type:* str

Base Prompt Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#base_prompt_template BedrockAgent#base_prompt_template}

---

##### `foundation_model`<sup>Optional</sup> <a name="foundation_model" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel"></a>

```python
foundation_model: str
```

- *Type:* str

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `inference_configuration`<sup>Optional</sup> <a name="inference_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```python
inference_configuration: BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

Configuration for inference in prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#inference_configuration BedrockAgent#inference_configuration}

---

##### `parser_mode`<sup>Optional</sup> <a name="parser_mode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```python
parser_mode: str
```

- *Type:* str

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#parser_mode BedrockAgent#parser_mode}

---

##### `prompt_creation_mode`<sup>Optional</sup> <a name="prompt_creation_mode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```python
prompt_creation_mode: str
```

- *Type:* str

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_creation_mode BedrockAgent#prompt_creation_mode}

---

##### `prompt_state`<sup>Optional</sup> <a name="prompt_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```python
prompt_state: str
```

- *Type:* str

Prompt State.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_state BedrockAgent#prompt_state}

---

##### `prompt_type`<sup>Optional</sup> <a name="prompt_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```python
prompt_type: str
```

- *Type:* str

Prompt Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#prompt_type BedrockAgent#prompt_type}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration(
  maximum_length: typing.Union[int, float] = None,
  stop_sequences: typing.List[str] = None,
  temperature: typing.Union[int, float] = None,
  top_k: typing.Union[int, float] = None,
  top_p: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | Sample from the k most likely next tokens. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | Cumulative probability cutoff for token selection. |

---

##### `maximum_length`<sup>Optional</sup> <a name="maximum_length" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#maximum_length BedrockAgent#maximum_length}

---

##### `stop_sequences`<sup>Optional</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#stop_sequences BedrockAgent#stop_sequences}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#temperature BedrockAgent#temperature}

---

##### `top_k`<sup>Optional</sup> <a name="top_k" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sample from the k most likely next tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#top_k BedrockAgent#top_k}

---

##### `top_p`<sup>Optional</sup> <a name="top_p" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#top_p BedrockAgent#top_p}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentActionGroupsActionGroupExecutorOutputReference <a name="BedrockAgentActionGroupsActionGroupExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl">reset_custom_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda">reset_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_control` <a name="reset_custom_control" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl"></a>

```python
def reset_custom_control() -> None
```

##### `reset_lambda` <a name="reset_lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda"></a>

```python
def reset_lambda() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput">custom_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput">lambda_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl">custom_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda">lambda</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_control_input`<sup>Optional</sup> <a name="custom_control_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput"></a>

```python
custom_control_input: str
```

- *Type:* str

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput"></a>

```python
lambda_input: str
```

- *Type:* str

---

##### `custom_control`<sup>Required</sup> <a name="custom_control" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl"></a>

```python
custom_control: str
```

- *Type:* str

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentActionGroupsActionGroupExecutor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---


### BedrockAgentActionGroupsApiSchemaOutputReference <a name="BedrockAgentActionGroupsApiSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3"></a>

```python
def put_s3(
  s3_bucket_name: str = None,
  s3_object_key: str = None
) -> None
```

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3.parameter.s3BucketName"></a>

- *Type:* str

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3_bucket_name BedrockAgent#s3_bucket_name}

---

###### `s3_object_key`<sup>Optional</sup> <a name="s3_object_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3.parameter.s3ObjectKey"></a>

- *Type:* str

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3_object_key BedrockAgent#s3_object_key}

---

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3"></a>

```python
s3: BedrockAgentActionGroupsApiSchemaS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a>

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | BedrockAgentActionGroupsApiSchemaS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentActionGroupsApiSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---


### BedrockAgentActionGroupsApiSchemaS3OutputReference <a name="BedrockAgentActionGroupsApiSchemaS3OutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey">reset_s3_object_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```

##### `reset_s3_object_key` <a name="reset_s3_object_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```python
def reset_s3_object_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput">s3_object_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey">s3_object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_object_key_input`<sup>Optional</sup> <a name="s3_object_key_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```python
s3_object_key_input: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_object_key`<sup>Required</sup> <a name="s3_object_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```python
s3_object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentActionGroupsApiSchemaS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsList <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAgentActionGroupsFunctionSchemaFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation">reset_require_confirmation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.Mapping[BedrockAgentActionGroupsFunctionSchemaFunctionsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_require_confirmation` <a name="reset_require_confirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation"></a>

```python
def reset_require_confirmation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput">require_confirmation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation">require_confirmation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters"></a>

```python
parameters: BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.Mapping[BedrockAgentActionGroupsFunctionSchemaFunctionsParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>]

---

##### `require_confirmation_input`<sup>Optional</sup> <a name="require_confirmation_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput"></a>

```python
require_confirmation_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `require_confirmation`<sup>Required</sup> <a name="require_confirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation"></a>

```python
require_confirmation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get"></a>

```python
def get(
  key: str
) -> BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[BedrockAgentActionGroupsFunctionSchemaFunctionsParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>]

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentActionGroupsFunctionSchemaFunctionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>

---


### BedrockAgentActionGroupsFunctionSchemaOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions">put_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions">reset_functions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_functions` <a name="put_functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions"></a>

```python
def put_functions(
  value: IResolvable | typing.List[BedrockAgentActionGroupsFunctionSchemaFunctions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]

---

##### `reset_functions` <a name="reset_functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions"></a>

```python
def reset_functions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput">functions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions"></a>

```python
functions: BedrockAgentActionGroupsFunctionSchemaFunctionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a>

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput"></a>

```python
functions_input: IResolvable | typing.List[BedrockAgentActionGroupsFunctionSchemaFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentActionGroupsFunctionSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---


### BedrockAgentActionGroupsList <a name="BedrockAgentActionGroupsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAgentActionGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>]

---


### BedrockAgentActionGroupsOutputReference <a name="BedrockAgentActionGroupsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentActionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor">put_action_group_executor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema">put_api_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema">put_function_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor">reset_action_group_executor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName">reset_action_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState">reset_action_group_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema">reset_api_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema">reset_function_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature">reset_parent_action_group_signature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete">reset_skip_resource_in_use_check_on_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action_group_executor` <a name="put_action_group_executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor"></a>

```python
def put_action_group_executor(
  custom_control: str = None,
  lambda: str = None
) -> None
```

###### `custom_control`<sup>Optional</sup> <a name="custom_control" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor.parameter.customControl"></a>

- *Type:* str

Custom control of action execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#custom_control BedrockAgent#custom_control}

---

###### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor.parameter.lambda"></a>

- *Type:* str

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

##### `put_api_schema` <a name="put_api_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema"></a>

```python
def put_api_schema(
  payload: str = None,
  s3: BedrockAgentActionGroupsApiSchemaS3 = None
) -> None
```

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema.parameter.payload"></a>

- *Type:* str

String OpenAPI Payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#payload BedrockAgent#payload}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#s3 BedrockAgent#s3}

---

##### `put_function_schema` <a name="put_function_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema"></a>

```python
def put_function_schema(
  functions: IResolvable | typing.List[BedrockAgentActionGroupsFunctionSchemaFunctions] = None
) -> None
```

###### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema.parameter.functions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>]

List of Function definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#functions BedrockAgent#functions}

---

##### `reset_action_group_executor` <a name="reset_action_group_executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor"></a>

```python
def reset_action_group_executor() -> None
```

##### `reset_action_group_name` <a name="reset_action_group_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName"></a>

```python
def reset_action_group_name() -> None
```

##### `reset_action_group_state` <a name="reset_action_group_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState"></a>

```python
def reset_action_group_state() -> None
```

##### `reset_api_schema` <a name="reset_api_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema"></a>

```python
def reset_api_schema() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_function_schema` <a name="reset_function_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema"></a>

```python
def reset_function_schema() -> None
```

##### `reset_parent_action_group_signature` <a name="reset_parent_action_group_signature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature"></a>

```python
def reset_parent_action_group_signature() -> None
```

##### `reset_skip_resource_in_use_check_on_delete` <a name="reset_skip_resource_in_use_check_on_delete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete"></a>

```python
def reset_skip_resource_in_use_check_on_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor">action_group_executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema">api_schema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema">function_schema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput">action_group_executor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput">action_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput">action_group_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput">api_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput">function_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput">parent_action_group_signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput">skip_resource_in_use_check_on_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName">action_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState">action_group_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature">parent_action_group_signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete">skip_resource_in_use_check_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_group_executor`<sup>Required</sup> <a name="action_group_executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor"></a>

```python
action_group_executor: BedrockAgentActionGroupsActionGroupExecutorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a>

---

##### `api_schema`<sup>Required</sup> <a name="api_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema"></a>

```python
api_schema: BedrockAgentActionGroupsApiSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a>

---

##### `function_schema`<sup>Required</sup> <a name="function_schema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema"></a>

```python
function_schema: BedrockAgentActionGroupsFunctionSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a>

---

##### `action_group_executor_input`<sup>Optional</sup> <a name="action_group_executor_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput"></a>

```python
action_group_executor_input: IResolvable | BedrockAgentActionGroupsActionGroupExecutor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `action_group_name_input`<sup>Optional</sup> <a name="action_group_name_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput"></a>

```python
action_group_name_input: str
```

- *Type:* str

---

##### `action_group_state_input`<sup>Optional</sup> <a name="action_group_state_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput"></a>

```python
action_group_state_input: str
```

- *Type:* str

---

##### `api_schema_input`<sup>Optional</sup> <a name="api_schema_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput"></a>

```python
api_schema_input: IResolvable | BedrockAgentActionGroupsApiSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_schema_input`<sup>Optional</sup> <a name="function_schema_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput"></a>

```python
function_schema_input: IResolvable | BedrockAgentActionGroupsFunctionSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `parent_action_group_signature_input`<sup>Optional</sup> <a name="parent_action_group_signature_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput"></a>

```python
parent_action_group_signature_input: str
```

- *Type:* str

---

##### `skip_resource_in_use_check_on_delete_input`<sup>Optional</sup> <a name="skip_resource_in_use_check_on_delete_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput"></a>

```python
skip_resource_in_use_check_on_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `action_group_name`<sup>Required</sup> <a name="action_group_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName"></a>

```python
action_group_name: str
```

- *Type:* str

---

##### `action_group_state`<sup>Required</sup> <a name="action_group_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState"></a>

```python
action_group_state: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parent_action_group_signature`<sup>Required</sup> <a name="parent_action_group_signature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature"></a>

```python
parent_action_group_signature: str
```

- *Type:* str

---

##### `skip_resource_in_use_check_on_delete`<sup>Required</sup> <a name="skip_resource_in_use_check_on_delete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete"></a>

```python
skip_resource_in_use_check_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentActionGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>

---


### BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference <a name="BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn">reset_alias_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias_arn` <a name="reset_alias_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn"></a>

```python
def reset_alias_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput">alias_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn">alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_arn_input`<sup>Optional</sup> <a name="alias_arn_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput"></a>

```python
alias_arn_input: str
```

- *Type:* str

---

##### `alias_arn`<sup>Required</sup> <a name="alias_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn"></a>

```python
alias_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentAgentCollaboratorsAgentDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---


### BedrockAgentAgentCollaboratorsList <a name="BedrockAgentAgentCollaboratorsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentAgentCollaboratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentAgentCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAgentAgentCollaborators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>]

---


### BedrockAgentAgentCollaboratorsOutputReference <a name="BedrockAgentAgentCollaboratorsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor">put_agent_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor">reset_agent_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction">reset_collaboration_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName">reset_collaborator_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory">reset_relay_conversation_history</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_descriptor` <a name="put_agent_descriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor"></a>

```python
def put_agent_descriptor(
  alias_arn: str = None
) -> None
```

###### `alias_arn`<sup>Optional</sup> <a name="alias_arn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor.parameter.aliasArn"></a>

- *Type:* str

Alias ARN for agent descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#alias_arn BedrockAgent#alias_arn}

---

##### `reset_agent_descriptor` <a name="reset_agent_descriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor"></a>

```python
def reset_agent_descriptor() -> None
```

##### `reset_collaboration_instruction` <a name="reset_collaboration_instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction"></a>

```python
def reset_collaboration_instruction() -> None
```

##### `reset_collaborator_name` <a name="reset_collaborator_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName"></a>

```python
def reset_collaborator_name() -> None
```

##### `reset_relay_conversation_history` <a name="reset_relay_conversation_history" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory"></a>

```python
def reset_relay_conversation_history() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor">agent_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput">agent_descriptor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput">collaboration_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput">collaborator_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput">relay_conversation_history_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction">collaboration_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName">collaborator_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory">relay_conversation_history</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_descriptor`<sup>Required</sup> <a name="agent_descriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor"></a>

```python
agent_descriptor: BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a>

---

##### `agent_descriptor_input`<sup>Optional</sup> <a name="agent_descriptor_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput"></a>

```python
agent_descriptor_input: IResolvable | BedrockAgentAgentCollaboratorsAgentDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `collaboration_instruction_input`<sup>Optional</sup> <a name="collaboration_instruction_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput"></a>

```python
collaboration_instruction_input: str
```

- *Type:* str

---

##### `collaborator_name_input`<sup>Optional</sup> <a name="collaborator_name_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput"></a>

```python
collaborator_name_input: str
```

- *Type:* str

---

##### `relay_conversation_history_input`<sup>Optional</sup> <a name="relay_conversation_history_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput"></a>

```python
relay_conversation_history_input: str
```

- *Type:* str

---

##### `collaboration_instruction`<sup>Required</sup> <a name="collaboration_instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction"></a>

```python
collaboration_instruction: str
```

- *Type:* str

---

##### `collaborator_name`<sup>Required</sup> <a name="collaborator_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName"></a>

```python
collaborator_name: str
```

- *Type:* str

---

##### `relay_conversation_history`<sup>Required</sup> <a name="relay_conversation_history" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory"></a>

```python
relay_conversation_history: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentAgentCollaborators
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>

---


### BedrockAgentCustomOrchestrationExecutorOutputReference <a name="BedrockAgentCustomOrchestrationExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda">reset_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda` <a name="reset_lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda"></a>

```python
def reset_lambda() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput">lambda_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda">lambda</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput"></a>

```python
lambda_input: str
```

- *Type:* str

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentCustomOrchestrationExecutor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---


### BedrockAgentCustomOrchestrationOutputReference <a name="BedrockAgentCustomOrchestrationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentCustomOrchestrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor">put_executor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor">reset_executor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_executor` <a name="put_executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor"></a>

```python
def put_executor(
  lambda: str = None
) -> None
```

###### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor.parameter.lambda"></a>

- *Type:* str

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

##### `reset_executor` <a name="reset_executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor"></a>

```python
def reset_executor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor">executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput">executor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `executor`<sup>Required</sup> <a name="executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor"></a>

```python
executor: BedrockAgentCustomOrchestrationExecutorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a>

---

##### `executor_input`<sup>Optional</sup> <a name="executor_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput"></a>

```python
executor_input: IResolvable | BedrockAgentCustomOrchestrationExecutor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentCustomOrchestration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---


### BedrockAgentGuardrailConfigurationOutputReference <a name="BedrockAgentGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier">reset_guardrail_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion">reset_guardrail_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_guardrail_identifier` <a name="reset_guardrail_identifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier"></a>

```python
def reset_guardrail_identifier() -> None
```

##### `reset_guardrail_version` <a name="reset_guardrail_version" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion"></a>

```python
def reset_guardrail_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput">guardrail_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput">guardrail_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_identifier_input`<sup>Optional</sup> <a name="guardrail_identifier_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput"></a>

```python
guardrail_identifier_input: str
```

- *Type:* str

---

##### `guardrail_version_input`<sup>Optional</sup> <a name="guardrail_version_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput"></a>

```python
guardrail_version_input: str
```

- *Type:* str

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentGuardrailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---


### BedrockAgentKnowledgeBasesList <a name="BedrockAgentKnowledgeBasesList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentKnowledgeBasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentKnowledgeBasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAgentKnowledgeBases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>]

---


### BedrockAgentKnowledgeBasesOutputReference <a name="BedrockAgentKnowledgeBasesOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentKnowledgeBasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId">reset_knowledge_base_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState">reset_knowledge_base_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_knowledge_base_id` <a name="reset_knowledge_base_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId"></a>

```python
def reset_knowledge_base_id() -> None
```

##### `reset_knowledge_base_state` <a name="reset_knowledge_base_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState"></a>

```python
def reset_knowledge_base_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput">knowledge_base_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput">knowledge_base_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState">knowledge_base_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `knowledge_base_id_input`<sup>Optional</sup> <a name="knowledge_base_id_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput"></a>

```python
knowledge_base_id_input: str
```

- *Type:* str

---

##### `knowledge_base_state_input`<sup>Optional</sup> <a name="knowledge_base_state_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput"></a>

```python
knowledge_base_state_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `knowledge_base_state`<sup>Required</sup> <a name="knowledge_base_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState"></a>

```python
knowledge_base_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentKnowledgeBases
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>

---


### BedrockAgentMemoryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentMemoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration">put_session_summary_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes">reset_enabled_memory_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration">reset_session_summary_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays">reset_storage_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_session_summary_configuration` <a name="put_session_summary_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration"></a>

```python
def put_session_summary_configuration(
  max_recent_sessions: typing.Union[int, float] = None
) -> None
```

###### `max_recent_sessions`<sup>Optional</sup> <a name="max_recent_sessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration.parameter.maxRecentSessions"></a>

- *Type:* typing.Union[int, float]

Maximum number of Sessions to Summarize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#max_recent_sessions BedrockAgent#max_recent_sessions}

---

##### `reset_enabled_memory_types` <a name="reset_enabled_memory_types" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes"></a>

```python
def reset_enabled_memory_types() -> None
```

##### `reset_session_summary_configuration` <a name="reset_session_summary_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration"></a>

```python
def reset_session_summary_configuration() -> None
```

##### `reset_storage_days` <a name="reset_storage_days" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays"></a>

```python
def reset_storage_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration">session_summary_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput">enabled_memory_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput">session_summary_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput">storage_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">enabled_memory_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays">storage_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_summary_configuration`<sup>Required</sup> <a name="session_summary_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration"></a>

```python
session_summary_configuration: BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a>

---

##### `enabled_memory_types_input`<sup>Optional</sup> <a name="enabled_memory_types_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput"></a>

```python
enabled_memory_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_summary_configuration_input`<sup>Optional</sup> <a name="session_summary_configuration_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput"></a>

```python
session_summary_configuration_input: IResolvable | BedrockAgentMemoryConfigurationSessionSummaryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `storage_days_input`<sup>Optional</sup> <a name="storage_days_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput"></a>

```python
storage_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_memory_types`<sup>Required</sup> <a name="enabled_memory_types" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```python
enabled_memory_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_days`<sup>Required</sup> <a name="storage_days" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```python
storage_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentMemoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---


### BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions">reset_max_recent_sessions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_recent_sessions` <a name="reset_max_recent_sessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions"></a>

```python
def reset_max_recent_sessions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput">max_recent_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions">max_recent_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_recent_sessions_input`<sup>Optional</sup> <a name="max_recent_sessions_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput"></a>

```python
max_recent_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_recent_sessions`<sup>Required</sup> <a name="max_recent_sessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions"></a>

```python
max_recent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentMemoryConfigurationSessionSummaryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">put_prompt_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">reset_override_lambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">reset_prompt_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prompt_configurations` <a name="put_prompt_configurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```python
def put_prompt_configurations(
  value: IResolvable | typing.List[BedrockAgentPromptOverrideConfigurationPromptConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]

---

##### `reset_override_lambda` <a name="reset_override_lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```python
def reset_override_lambda() -> None
```

##### `reset_prompt_configurations` <a name="reset_prompt_configurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```python
def reset_prompt_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">prompt_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">override_lambda_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">prompt_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">override_lambda</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt_configurations`<sup>Required</sup> <a name="prompt_configurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```python
prompt_configurations: BedrockAgentPromptOverrideConfigurationPromptConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `override_lambda_input`<sup>Optional</sup> <a name="override_lambda_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```python
override_lambda_input: str
```

- *Type:* str

---

##### `prompt_configurations_input`<sup>Optional</sup> <a name="prompt_configurations_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```python
prompt_configurations_input: IResolvable | typing.List[BedrockAgentPromptOverrideConfigurationPromptConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]

---

##### `override_lambda`<sup>Required</sup> <a name="override_lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```python
override_lambda: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentPromptOverrideConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength">reset_maximum_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">reset_stop_sequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">reset_top_k</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">reset_top_p</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_length` <a name="reset_maximum_length" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength"></a>

```python
def reset_maximum_length() -> None
```

##### `reset_stop_sequences` <a name="reset_stop_sequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```python
def reset_stop_sequences() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```

##### `reset_top_k` <a name="reset_top_k" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```python
def reset_top_k() -> None
```

##### `reset_top_p` <a name="reset_top_p" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```python
def reset_top_p() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput">maximum_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">stop_sequences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">top_k_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">top_p_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_length_input`<sup>Optional</sup> <a name="maximum_length_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput"></a>

```python
maximum_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences_input`<sup>Optional</sup> <a name="stop_sequences_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```python
stop_sequences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_k_input`<sup>Optional</sup> <a name="top_k_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```python
top_k_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p_input`<sup>Optional</sup> <a name="top_p_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```python
top_p_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_length`<sup>Required</sup> <a name="maximum_length" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences`<sup>Required</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_k`<sup>Required</sup> <a name="top_k" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockAgentPromptOverrideConfigurationPromptConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>]

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_agent

bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">put_inference_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields">reset_additional_model_request_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">reset_base_prompt_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel">reset_foundation_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">reset_inference_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">reset_parser_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">reset_prompt_creation_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">reset_prompt_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">reset_prompt_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inference_configuration` <a name="put_inference_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```python
def put_inference_configuration(
  maximum_length: typing.Union[int, float] = None,
  stop_sequences: typing.List[str] = None,
  temperature: typing.Union[int, float] = None,
  top_k: typing.Union[int, float] = None,
  top_p: typing.Union[int, float] = None
) -> None
```

###### `maximum_length`<sup>Optional</sup> <a name="maximum_length" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.maximumLength"></a>

- *Type:* typing.Union[int, float]

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#maximum_length BedrockAgent#maximum_length}

---

###### `stop_sequences`<sup>Optional</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.stopSequences"></a>

- *Type:* typing.List[str]

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#stop_sequences BedrockAgent#stop_sequences}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#temperature BedrockAgent#temperature}

---

###### `top_k`<sup>Optional</sup> <a name="top_k" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.topK"></a>

- *Type:* typing.Union[int, float]

Sample from the k most likely next tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#top_k BedrockAgent#top_k}

---

###### `top_p`<sup>Optional</sup> <a name="top_p" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.topP"></a>

- *Type:* typing.Union[int, float]

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_agent#top_p BedrockAgent#top_p}

---

##### `reset_additional_model_request_fields` <a name="reset_additional_model_request_fields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields"></a>

```python
def reset_additional_model_request_fields() -> None
```

##### `reset_base_prompt_template` <a name="reset_base_prompt_template" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```python
def reset_base_prompt_template() -> None
```

##### `reset_foundation_model` <a name="reset_foundation_model" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel"></a>

```python
def reset_foundation_model() -> None
```

##### `reset_inference_configuration` <a name="reset_inference_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```python
def reset_inference_configuration() -> None
```

##### `reset_parser_mode` <a name="reset_parser_mode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```python
def reset_parser_mode() -> None
```

##### `reset_prompt_creation_mode` <a name="reset_prompt_creation_mode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```python
def reset_prompt_creation_mode() -> None
```

##### `reset_prompt_state` <a name="reset_prompt_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```python
def reset_prompt_state() -> None
```

##### `reset_prompt_type` <a name="reset_prompt_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```python
def reset_prompt_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput">additional_model_request_fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">base_prompt_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput">foundation_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">inference_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">parser_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">prompt_creation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">prompt_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">prompt_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields">additional_model_request_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">base_prompt_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel">foundation_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">parser_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">prompt_creation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">prompt_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">prompt_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inference_configuration`<sup>Required</sup> <a name="inference_configuration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```python
inference_configuration: BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a>

---

##### `additional_model_request_fields_input`<sup>Optional</sup> <a name="additional_model_request_fields_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput"></a>

```python
additional_model_request_fields_input: str
```

- *Type:* str

---

##### `base_prompt_template_input`<sup>Optional</sup> <a name="base_prompt_template_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```python
base_prompt_template_input: str
```

- *Type:* str

---

##### `foundation_model_input`<sup>Optional</sup> <a name="foundation_model_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput"></a>

```python
foundation_model_input: str
```

- *Type:* str

---

##### `inference_configuration_input`<sup>Optional</sup> <a name="inference_configuration_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```python
inference_configuration_input: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `parser_mode_input`<sup>Optional</sup> <a name="parser_mode_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```python
parser_mode_input: str
```

- *Type:* str

---

##### `prompt_creation_mode_input`<sup>Optional</sup> <a name="prompt_creation_mode_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```python
prompt_creation_mode_input: str
```

- *Type:* str

---

##### `prompt_state_input`<sup>Optional</sup> <a name="prompt_state_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```python
prompt_state_input: str
```

- *Type:* str

---

##### `prompt_type_input`<sup>Optional</sup> <a name="prompt_type_input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```python
prompt_type_input: str
```

- *Type:* str

---

##### `additional_model_request_fields`<sup>Required</sup> <a name="additional_model_request_fields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields"></a>

```python
additional_model_request_fields: str
```

- *Type:* str

---

##### `base_prompt_template`<sup>Required</sup> <a name="base_prompt_template" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```python
base_prompt_template: str
```

- *Type:* str

---

##### `foundation_model`<sup>Required</sup> <a name="foundation_model" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel"></a>

```python
foundation_model: str
```

- *Type:* str

---

##### `parser_mode`<sup>Required</sup> <a name="parser_mode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```python
parser_mode: str
```

- *Type:* str

---

##### `prompt_creation_mode`<sup>Required</sup> <a name="prompt_creation_mode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```python
prompt_creation_mode: str
```

- *Type:* str

---

##### `prompt_state`<sup>Required</sup> <a name="prompt_state" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```python
prompt_state: str
```

- *Type:* str

---

##### `prompt_type`<sup>Required</sup> <a name="prompt_type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```python
prompt_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockAgentPromptOverrideConfigurationPromptConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>

---



