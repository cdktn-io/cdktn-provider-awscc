# `quicksightAgent` Submodule <a name="`quicksightAgent` Submodule" id="@cdktn/provider-awscc.quicksightAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAgent <a name="QuicksightAgent" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent awscc_quicksight_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgent;

QuicksightAgent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentId(java.lang.String)
    .awsAccountId(java.lang.String)
    .name(java.lang.String)
//  .actionConnectors(java.util.List<java.lang.String>)
//  .agentLifecycle(java.lang.String)
//  .customPromptInput(QuicksightAgentCustomPromptInput)
//  .description(java.lang.String)
//  .iconId(java.lang.String)
//  .spaces(java.util.List<java.lang.String>)
//  .starterPrompts(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<QuicksightAgentTags>)
//  .welcomeMessage(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | The unique identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | The ID of the Amazon Web Services account where the agent is being created. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The display name of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.actionConnectors">actionConnectors</a></code> | <code>java.util.List<java.lang.String></code> | A list of ActionConnector ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentLifecycle">agentLifecycle</a></code> | <code>java.lang.String</code> | The lifecycle stage of the agent. PREVIEW or PUBLISHED. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.customPromptInput">customPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | Custom prompt configuration. Specify either ExistingPrompt or NewPrompt. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.iconId">iconId</a></code> | <code>java.lang.String</code> | The icon identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.spaces">spaces</a></code> | <code>java.util.List<java.lang.String></code> | A list of Space ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.starterPrompts">starterPrompts</a></code> | <code>java.util.List<java.lang.String></code> | A list of up to 3 starter prompts displayed to users. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>></code> | A list of key-value pairs to associate with the agent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.welcomeMessage">welcomeMessage</a></code> | <code>java.lang.String</code> | The welcome message displayed when a user opens the agent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

The unique identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#agent_id QuicksightAgent#agent_id}

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

The ID of the Amazon Web Services account where the agent is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#aws_account_id QuicksightAgent#aws_account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#name QuicksightAgent#name}

---

##### `actionConnectors`<sup>Optional</sup> <a name="actionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.actionConnectors"></a>

- *Type:* java.util.List<java.lang.String>

A list of ActionConnector ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#action_connectors QuicksightAgent#action_connectors}

---

##### `agentLifecycle`<sup>Optional</sup> <a name="agentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.agentLifecycle"></a>

- *Type:* java.lang.String

The lifecycle stage of the agent. PREVIEW or PUBLISHED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#agent_lifecycle QuicksightAgent#agent_lifecycle}

---

##### `customPromptInput`<sup>Optional</sup> <a name="customPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.customPromptInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

Custom prompt configuration. Specify either ExistingPrompt or NewPrompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#custom_prompt_input QuicksightAgent#custom_prompt_input}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#description QuicksightAgent#description}

---

##### `iconId`<sup>Optional</sup> <a name="iconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.iconId"></a>

- *Type:* java.lang.String

The icon identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#icon_id QuicksightAgent#icon_id}

---

##### `spaces`<sup>Optional</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.spaces"></a>

- *Type:* java.util.List<java.lang.String>

A list of Space ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#spaces QuicksightAgent#spaces}

---

##### `starterPrompts`<sup>Optional</sup> <a name="starterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.starterPrompts"></a>

- *Type:* java.util.List<java.lang.String>

A list of up to 3 starter prompts displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#starter_prompts QuicksightAgent#starter_prompts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>>

A list of key-value pairs to associate with the agent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#tags QuicksightAgent#tags}

---

##### `welcomeMessage`<sup>Optional</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.welcomeMessage"></a>

- *Type:* java.lang.String

The welcome message displayed when a user opens the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#welcome_message QuicksightAgent#welcome_message}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput">putCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors">resetActionConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle">resetAgentLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput">resetCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId">resetIconId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces">resetSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts">resetStarterPrompts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage">resetWelcomeMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPromptInput` <a name="putCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput"></a>

```java
public void putCustomPromptInput(QuicksightAgentCustomPromptInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightAgentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>>

---

##### `resetActionConnectors` <a name="resetActionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors"></a>

```java
public void resetActionConnectors()
```

##### `resetAgentLifecycle` <a name="resetAgentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle"></a>

```java
public void resetAgentLifecycle()
```

##### `resetCustomPromptInput` <a name="resetCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput"></a>

```java
public void resetCustomPromptInput()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIconId` <a name="resetIconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId"></a>

```java
public void resetIconId()
```

##### `resetSpaces` <a name="resetSpaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces"></a>

```java
public void resetSpaces()
```

##### `resetStarterPrompts` <a name="resetStarterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts"></a>

```java
public void resetStarterPrompts()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags"></a>

```java
public void resetTags()
```

##### `resetWelcomeMessage` <a name="resetWelcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage"></a>

```java
public void resetWelcomeMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgent;

QuicksightAgent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgent;

QuicksightAgent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgent;

QuicksightAgent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgent;

QuicksightAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus">agentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput">customPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface">customPromptInterface</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput">actionConnectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput">agentLifecycleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput">customPromptInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput">iconIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput">spacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput">starterPromptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput">welcomeMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors">actionConnectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle">agentLifecycle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId">iconId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces">spaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts">starterPrompts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage">welcomeMessage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus"></a>

```java
public java.lang.String getAgentStatus();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `customPromptInput`<sup>Required</sup> <a name="customPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput"></a>

```java
public QuicksightAgentCustomPromptInputOutputReference getCustomPromptInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a>

---

##### `customPromptInterface`<sup>Required</sup> <a name="customPromptInterface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface"></a>

```java
public QuicksightAgentCustomPromptInterfaceOutputReference getCustomPromptInterface();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags"></a>

```java
public QuicksightAgentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `actionConnectorsInput`<sup>Optional</sup> <a name="actionConnectorsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput"></a>

```java
public java.util.List<java.lang.String> getActionConnectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `agentLifecycleInput`<sup>Optional</sup> <a name="agentLifecycleInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput"></a>

```java
public java.lang.String getAgentLifecycleInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `customPromptInputInput`<sup>Optional</sup> <a name="customPromptInputInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput"></a>

```java
public IResolvable|QuicksightAgentCustomPromptInput getCustomPromptInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `iconIdInput`<sup>Optional</sup> <a name="iconIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput"></a>

```java
public java.lang.String getIconIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `spacesInput`<sup>Optional</sup> <a name="spacesInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput"></a>

```java
public java.util.List<java.lang.String> getSpacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `starterPromptsInput`<sup>Optional</sup> <a name="starterPromptsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput"></a>

```java
public java.util.List<java.lang.String> getStarterPromptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightAgentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>>

---

##### `welcomeMessageInput`<sup>Optional</sup> <a name="welcomeMessageInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput"></a>

```java
public java.lang.String getWelcomeMessageInput();
```

- *Type:* java.lang.String

---

##### `actionConnectors`<sup>Required</sup> <a name="actionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors"></a>

```java
public java.util.List<java.lang.String> getActionConnectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `agentLifecycle`<sup>Required</sup> <a name="agentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle"></a>

```java
public java.lang.String getAgentLifecycle();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `iconId`<sup>Required</sup> <a name="iconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId"></a>

```java
public java.lang.String getIconId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `spaces`<sup>Required</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces"></a>

```java
public java.util.List<java.lang.String> getSpaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `starterPrompts`<sup>Required</sup> <a name="starterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts"></a>

```java
public java.util.List<java.lang.String> getStarterPrompts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `welcomeMessage`<sup>Required</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage"></a>

```java
public java.lang.String getWelcomeMessage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAgentConfig <a name="QuicksightAgentConfig" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentConfig;

QuicksightAgentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentId(java.lang.String)
    .awsAccountId(java.lang.String)
    .name(java.lang.String)
//  .actionConnectors(java.util.List<java.lang.String>)
//  .agentLifecycle(java.lang.String)
//  .customPromptInput(QuicksightAgentCustomPromptInput)
//  .description(java.lang.String)
//  .iconId(java.lang.String)
//  .spaces(java.util.List<java.lang.String>)
//  .starterPrompts(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<QuicksightAgentTags>)
//  .welcomeMessage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | The unique identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | The ID of the Amazon Web Services account where the agent is being created. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The display name of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors">actionConnectors</a></code> | <code>java.util.List<java.lang.String></code> | A list of ActionConnector ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle">agentLifecycle</a></code> | <code>java.lang.String</code> | The lifecycle stage of the agent. PREVIEW or PUBLISHED. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput">customPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | Custom prompt configuration. Specify either ExistingPrompt or NewPrompt. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId">iconId</a></code> | <code>java.lang.String</code> | The icon identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces">spaces</a></code> | <code>java.util.List<java.lang.String></code> | A list of Space ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts">starterPrompts</a></code> | <code>java.util.List<java.lang.String></code> | A list of up to 3 starter prompts displayed to users. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>></code> | A list of key-value pairs to associate with the agent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage">welcomeMessage</a></code> | <code>java.lang.String</code> | The welcome message displayed when a user opens the agent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

The unique identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#agent_id QuicksightAgent#agent_id}

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

The ID of the Amazon Web Services account where the agent is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#aws_account_id QuicksightAgent#aws_account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#name QuicksightAgent#name}

---

##### `actionConnectors`<sup>Optional</sup> <a name="actionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors"></a>

```java
public java.util.List<java.lang.String> getActionConnectors();
```

- *Type:* java.util.List<java.lang.String>

A list of ActionConnector ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#action_connectors QuicksightAgent#action_connectors}

---

##### `agentLifecycle`<sup>Optional</sup> <a name="agentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle"></a>

```java
public java.lang.String getAgentLifecycle();
```

- *Type:* java.lang.String

The lifecycle stage of the agent. PREVIEW or PUBLISHED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#agent_lifecycle QuicksightAgent#agent_lifecycle}

---

##### `customPromptInput`<sup>Optional</sup> <a name="customPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput"></a>

```java
public QuicksightAgentCustomPromptInput getCustomPromptInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

Custom prompt configuration. Specify either ExistingPrompt or NewPrompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#custom_prompt_input QuicksightAgent#custom_prompt_input}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#description QuicksightAgent#description}

---

##### `iconId`<sup>Optional</sup> <a name="iconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId"></a>

```java
public java.lang.String getIconId();
```

- *Type:* java.lang.String

The icon identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#icon_id QuicksightAgent#icon_id}

---

##### `spaces`<sup>Optional</sup> <a name="spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces"></a>

```java
public java.util.List<java.lang.String> getSpaces();
```

- *Type:* java.util.List<java.lang.String>

A list of Space ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#spaces QuicksightAgent#spaces}

---

##### `starterPrompts`<sup>Optional</sup> <a name="starterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts"></a>

```java
public java.util.List<java.lang.String> getStarterPrompts();
```

- *Type:* java.util.List<java.lang.String>

A list of up to 3 starter prompts displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#starter_prompts QuicksightAgent#starter_prompts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightAgentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>>

A list of key-value pairs to associate with the agent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#tags QuicksightAgent#tags}

---

##### `welcomeMessage`<sup>Optional</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage"></a>

```java
public java.lang.String getWelcomeMessage();
```

- *Type:* java.lang.String

The welcome message displayed when a user opens the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#welcome_message QuicksightAgent#welcome_message}

---

### QuicksightAgentCustomPromptInput <a name="QuicksightAgentCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInput;

QuicksightAgentCustomPromptInput.builder()
//  .existingPrompt(QuicksightAgentCustomPromptInputExistingPrompt)
//  .newPrompt(QuicksightAgentCustomPromptInputNewPrompt)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt">existingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | Reference to an existing custom prompt profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt">newPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | Parameters for creating a new custom prompt configuration. |

---

##### `existingPrompt`<sup>Optional</sup> <a name="existingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt"></a>

```java
public QuicksightAgentCustomPromptInputExistingPrompt getExistingPrompt();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

Reference to an existing custom prompt profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#existing_prompt QuicksightAgent#existing_prompt}

---

##### `newPrompt`<sup>Optional</sup> <a name="newPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt"></a>

```java
public QuicksightAgentCustomPromptInputNewPrompt getNewPrompt();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

Parameters for creating a new custom prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#new_prompt QuicksightAgent#new_prompt}

---

### QuicksightAgentCustomPromptInputExistingPrompt <a name="QuicksightAgentCustomPromptInputExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInputExistingPrompt;

QuicksightAgentCustomPromptInputExistingPrompt.builder()
//  .modelProfileId(java.lang.String)
//  .qbsAwsAccountId(java.lang.String)
//  .subscriptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId">modelProfileId</a></code> | <code>java.lang.String</code> | The identifier of the model profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId">qbsAwsAccountId</a></code> | <code>java.lang.String</code> | The QBS AWS account identifier. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription identifier. |

---

##### `modelProfileId`<sup>Optional</sup> <a name="modelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId"></a>

```java
public java.lang.String getModelProfileId();
```

- *Type:* java.lang.String

The identifier of the model profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#model_profile_id QuicksightAgent#model_profile_id}

---

##### `qbsAwsAccountId`<sup>Optional</sup> <a name="qbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId"></a>

```java
public java.lang.String getQbsAwsAccountId();
```

- *Type:* java.lang.String

The QBS AWS account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#qbs_aws_account_id QuicksightAgent#qbs_aws_account_id}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The subscription identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#subscription_id QuicksightAgent#subscription_id}

---

### QuicksightAgentCustomPromptInputNewPrompt <a name="QuicksightAgentCustomPromptInputNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInputNewPrompt;

QuicksightAgentCustomPromptInputNewPrompt.builder()
//  .customInstructions(java.lang.String)
//  .identity(java.lang.String)
//  .outputStyle(java.lang.String)
//  .responseLength(java.lang.String)
//  .tone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions">customInstructions</a></code> | <code>java.lang.String</code> | Custom instructions for the agent behavior. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity">identity</a></code> | <code>java.lang.String</code> | The identity or persona of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle">outputStyle</a></code> | <code>java.lang.String</code> | The output style for the agent responses. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength">responseLength</a></code> | <code>java.lang.String</code> | The desired response length for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone">tone</a></code> | <code>java.lang.String</code> | The tone used in agent responses. |

---

##### `customInstructions`<sup>Optional</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions"></a>

```java
public java.lang.String getCustomInstructions();
```

- *Type:* java.lang.String

Custom instructions for the agent behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#custom_instructions QuicksightAgent#custom_instructions}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

The identity or persona of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#identity QuicksightAgent#identity}

---

##### `outputStyle`<sup>Optional</sup> <a name="outputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle"></a>

```java
public java.lang.String getOutputStyle();
```

- *Type:* java.lang.String

The output style for the agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#output_style QuicksightAgent#output_style}

---

##### `responseLength`<sup>Optional</sup> <a name="responseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength"></a>

```java
public java.lang.String getResponseLength();
```

- *Type:* java.lang.String

The desired response length for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#response_length QuicksightAgent#response_length}

---

##### `tone`<sup>Optional</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone"></a>

```java
public java.lang.String getTone();
```

- *Type:* java.lang.String

The tone used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#tone QuicksightAgent#tone}

---

### QuicksightAgentCustomPromptInterface <a name="QuicksightAgentCustomPromptInterface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInterface;

QuicksightAgentCustomPromptInterface.builder()
    .build();
```


### QuicksightAgentTags <a name="QuicksightAgentTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentTags;

QuicksightAgentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#key QuicksightAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_agent#value QuicksightAgent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAgentCustomPromptInputExistingPromptOutputReference <a name="QuicksightAgentCustomPromptInputExistingPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInputExistingPromptOutputReference;

new QuicksightAgentCustomPromptInputExistingPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId">resetModelProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId">resetQbsAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModelProfileId` <a name="resetModelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId"></a>

```java
public void resetModelProfileId()
```

##### `resetQbsAwsAccountId` <a name="resetQbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId"></a>

```java
public void resetQbsAwsAccountId()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput">modelProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput">qbsAwsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId">modelProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId">qbsAwsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelProfileIdInput`<sup>Optional</sup> <a name="modelProfileIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput"></a>

```java
public java.lang.String getModelProfileIdInput();
```

- *Type:* java.lang.String

---

##### `qbsAwsAccountIdInput`<sup>Optional</sup> <a name="qbsAwsAccountIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput"></a>

```java
public java.lang.String getQbsAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `modelProfileId`<sup>Required</sup> <a name="modelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId"></a>

```java
public java.lang.String getModelProfileId();
```

- *Type:* java.lang.String

---

##### `qbsAwsAccountId`<sup>Required</sup> <a name="qbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId"></a>

```java
public java.lang.String getQbsAwsAccountId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAgentCustomPromptInputExistingPrompt getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---


### QuicksightAgentCustomPromptInputNewPromptOutputReference <a name="QuicksightAgentCustomPromptInputNewPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInputNewPromptOutputReference;

new QuicksightAgentCustomPromptInputNewPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions">resetCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle">resetOutputStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength">resetResponseLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone">resetTone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomInstructions` <a name="resetCustomInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions"></a>

```java
public void resetCustomInstructions()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetOutputStyle` <a name="resetOutputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle"></a>

```java
public void resetOutputStyle()
```

##### `resetResponseLength` <a name="resetResponseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength"></a>

```java
public void resetResponseLength()
```

##### `resetTone` <a name="resetTone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone"></a>

```java
public void resetTone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput">customInstructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput">outputStyleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput">responseLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput">toneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions">customInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle">outputStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength">responseLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone">tone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customInstructionsInput`<sup>Optional</sup> <a name="customInstructionsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput"></a>

```java
public java.lang.String getCustomInstructionsInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `outputStyleInput`<sup>Optional</sup> <a name="outputStyleInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput"></a>

```java
public java.lang.String getOutputStyleInput();
```

- *Type:* java.lang.String

---

##### `responseLengthInput`<sup>Optional</sup> <a name="responseLengthInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput"></a>

```java
public java.lang.String getResponseLengthInput();
```

- *Type:* java.lang.String

---

##### `toneInput`<sup>Optional</sup> <a name="toneInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput"></a>

```java
public java.lang.String getToneInput();
```

- *Type:* java.lang.String

---

##### `customInstructions`<sup>Required</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions"></a>

```java
public java.lang.String getCustomInstructions();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `outputStyle`<sup>Required</sup> <a name="outputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle"></a>

```java
public java.lang.String getOutputStyle();
```

- *Type:* java.lang.String

---

##### `responseLength`<sup>Required</sup> <a name="responseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength"></a>

```java
public java.lang.String getResponseLength();
```

- *Type:* java.lang.String

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone"></a>

```java
public java.lang.String getTone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAgentCustomPromptInputNewPrompt getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---


### QuicksightAgentCustomPromptInputOutputReference <a name="QuicksightAgentCustomPromptInputOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInputOutputReference;

new QuicksightAgentCustomPromptInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt">putExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt">putNewPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt">resetExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt">resetNewPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExistingPrompt` <a name="putExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt"></a>

```java
public void putExistingPrompt(QuicksightAgentCustomPromptInputExistingPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---

##### `putNewPrompt` <a name="putNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt"></a>

```java
public void putNewPrompt(QuicksightAgentCustomPromptInputNewPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---

##### `resetExistingPrompt` <a name="resetExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt"></a>

```java
public void resetExistingPrompt()
```

##### `resetNewPrompt` <a name="resetNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt"></a>

```java
public void resetNewPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt">existingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt">newPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput">existingPromptInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput">newPromptInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `existingPrompt`<sup>Required</sup> <a name="existingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt"></a>

```java
public QuicksightAgentCustomPromptInputExistingPromptOutputReference getExistingPrompt();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a>

---

##### `newPrompt`<sup>Required</sup> <a name="newPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt"></a>

```java
public QuicksightAgentCustomPromptInputNewPromptOutputReference getNewPrompt();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a>

---

##### `existingPromptInput`<sup>Optional</sup> <a name="existingPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput"></a>

```java
public IResolvable|QuicksightAgentCustomPromptInputExistingPrompt getExistingPromptInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---

##### `newPromptInput`<sup>Optional</sup> <a name="newPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput"></a>

```java
public IResolvable|QuicksightAgentCustomPromptInputNewPrompt getNewPromptInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAgentCustomPromptInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---


### QuicksightAgentCustomPromptInterfaceOutputReference <a name="QuicksightAgentCustomPromptInterfaceOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentCustomPromptInterfaceOutputReference;

new QuicksightAgentCustomPromptInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions">customInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId">modelProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle">outputStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary">promptSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId">qbsAwsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength">responseLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone">tone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customInstructions`<sup>Required</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions"></a>

```java
public java.lang.String getCustomInstructions();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `modelProfileId`<sup>Required</sup> <a name="modelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId"></a>

```java
public java.lang.String getModelProfileId();
```

- *Type:* java.lang.String

---

##### `outputStyle`<sup>Required</sup> <a name="outputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle"></a>

```java
public java.lang.String getOutputStyle();
```

- *Type:* java.lang.String

---

##### `promptSummary`<sup>Required</sup> <a name="promptSummary" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary"></a>

```java
public java.lang.String getPromptSummary();
```

- *Type:* java.lang.String

---

##### `qbsAwsAccountId`<sup>Required</sup> <a name="qbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId"></a>

```java
public java.lang.String getQbsAwsAccountId();
```

- *Type:* java.lang.String

---

##### `responseLength`<sup>Required</sup> <a name="responseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength"></a>

```java
public java.lang.String getResponseLength();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone"></a>

```java
public java.lang.String getTone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue"></a>

```java
public QuicksightAgentCustomPromptInterface getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a>

---


### QuicksightAgentTagsList <a name="QuicksightAgentTagsList" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentTagsList;

new QuicksightAgentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get"></a>

```java
public QuicksightAgentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightAgentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>>

---


### QuicksightAgentTagsOutputReference <a name="QuicksightAgentTagsOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_agent.QuicksightAgentTagsOutputReference;

new QuicksightAgentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightAgentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags">QuicksightAgentTags</a>

---



