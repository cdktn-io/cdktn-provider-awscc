# `wisdomAiGuardrail` Submodule <a name="`wisdomAiGuardrail` Submodule" id="@cdktn/provider-awscc.wisdomAiGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiGuardrail <a name="WisdomAiGuardrail" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrail;

WisdomAiGuardrail.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assistantId(java.lang.String)
    .blockedInputMessaging(java.lang.String)
    .blockedOutputsMessaging(java.lang.String)
//  .contentPolicyConfig(WisdomAiGuardrailContentPolicyConfig)
//  .contextualGroundingPolicyConfig(WisdomAiGuardrailContextualGroundingPolicyConfig)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .sensitiveInformationPolicyConfig(WisdomAiGuardrailSensitiveInformationPolicyConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .topicPolicyConfig(WisdomAiGuardrailTopicPolicyConfig)
//  .wordPolicyConfig(WisdomAiGuardrailWordPolicyConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.assistantId">assistantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedInputMessaging">blockedInputMessaging</a></code> | <code>java.lang.String</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>java.lang.String</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contentPolicyConfig">contentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | Content policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | Contextual grounding policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the guardrail or its version. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | Sensitive information policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.topicPolicyConfig">topicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | Topic policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.wordPolicyConfig">wordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | Word policy config for a guardrail. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.assistantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}.

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedInputMessaging"></a>

- *Type:* java.lang.String

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#blocked_input_messaging WisdomAiGuardrail#blocked_input_messaging}

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.blockedOutputsMessaging"></a>

- *Type:* java.lang.String

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#blocked_outputs_messaging WisdomAiGuardrail#blocked_outputs_messaging}

---

##### `contentPolicyConfig`<sup>Optional</sup> <a name="contentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contentPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

Content policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#content_policy_config WisdomAiGuardrail#content_policy_config}

---

##### `contextualGroundingPolicyConfig`<sup>Optional</sup> <a name="contextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.contextualGroundingPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

Contextual grounding policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#contextual_grounding_policy_config WisdomAiGuardrail#contextual_grounding_policy_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the guardrail or its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}.

---

##### `sensitiveInformationPolicyConfig`<sup>Optional</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.sensitiveInformationPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

Sensitive information policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#sensitive_information_policy_config WisdomAiGuardrail#sensitive_information_policy_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}.

---

##### `topicPolicyConfig`<sup>Optional</sup> <a name="topicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.topicPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

Topic policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#topic_policy_config WisdomAiGuardrail#topic_policy_config}

---

##### `wordPolicyConfig`<sup>Optional</sup> <a name="wordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.wordPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

Word policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#word_policy_config WisdomAiGuardrail#word_policy_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig">putContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig">putContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig">putSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig">putTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig">putWordPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContentPolicyConfig">resetContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContextualGroundingPolicyConfig">resetContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetSensitiveInformationPolicyConfig">resetSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTopicPolicyConfig">resetTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetWordPolicyConfig">resetWordPolicyConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentPolicyConfig` <a name="putContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig"></a>

```java
public void putContentPolicyConfig(WisdomAiGuardrailContentPolicyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

---

##### `putContextualGroundingPolicyConfig` <a name="putContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig"></a>

```java
public void putContextualGroundingPolicyConfig(WisdomAiGuardrailContextualGroundingPolicyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

---

##### `putSensitiveInformationPolicyConfig` <a name="putSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig"></a>

```java
public void putSensitiveInformationPolicyConfig(WisdomAiGuardrailSensitiveInformationPolicyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

---

##### `putTopicPolicyConfig` <a name="putTopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig"></a>

```java
public void putTopicPolicyConfig(WisdomAiGuardrailTopicPolicyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

---

##### `putWordPolicyConfig` <a name="putWordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig"></a>

```java
public void putWordPolicyConfig(WisdomAiGuardrailWordPolicyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

---

##### `resetContentPolicyConfig` <a name="resetContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContentPolicyConfig"></a>

```java
public void resetContentPolicyConfig()
```

##### `resetContextualGroundingPolicyConfig` <a name="resetContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContextualGroundingPolicyConfig"></a>

```java
public void resetContextualGroundingPolicyConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetName"></a>

```java
public void resetName()
```

##### `resetSensitiveInformationPolicyConfig` <a name="resetSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetSensitiveInformationPolicyConfig"></a>

```java
public void resetSensitiveInformationPolicyConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTags"></a>

```java
public void resetTags()
```

##### `resetTopicPolicyConfig` <a name="resetTopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTopicPolicyConfig"></a>

```java
public void resetTopicPolicyConfig()
```

##### `resetWordPolicyConfig` <a name="resetWordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetWordPolicyConfig"></a>

```java
public void resetWordPolicyConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAiGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrail;

WisdomAiGuardrail.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrail;

WisdomAiGuardrail.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrail;

WisdomAiGuardrail.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrail;

WisdomAiGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WisdomAiGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WisdomAiGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WisdomAiGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WisdomAiGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailArn">aiGuardrailArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailId">aiGuardrailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantArn">assistantArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfig">contentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference">WisdomAiGuardrailContentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfig">topicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference">WisdomAiGuardrailTopicPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfig">wordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference">WisdomAiGuardrailWordPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantIdInput">assistantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessagingInput">blockedInputMessagingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessagingInput">blockedOutputsMessagingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfigInput">contentPolicyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfigInput">contextualGroundingPolicyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfigInput">sensitiveInformationPolicyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfigInput">topicPolicyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfigInput">wordPolicyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantId">assistantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessaging">blockedInputMessaging</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aiGuardrailArn`<sup>Required</sup> <a name="aiGuardrailArn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailArn"></a>

```java
public java.lang.String getAiGuardrailArn();
```

- *Type:* java.lang.String

---

##### `aiGuardrailId`<sup>Required</sup> <a name="aiGuardrailId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailId"></a>

```java
public java.lang.String getAiGuardrailId();
```

- *Type:* java.lang.String

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantArn"></a>

```java
public java.lang.String getAssistantArn();
```

- *Type:* java.lang.String

---

##### `contentPolicyConfig`<sup>Required</sup> <a name="contentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfig"></a>

```java
public WisdomAiGuardrailContentPolicyConfigOutputReference getContentPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference">WisdomAiGuardrailContentPolicyConfigOutputReference</a>

---

##### `contextualGroundingPolicyConfig`<sup>Required</sup> <a name="contextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfig"></a>

```java
public WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference getContextualGroundingPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedTimeSeconds`<sup>Required</sup> <a name="modifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.modifiedTimeSeconds"></a>

```java
public java.lang.Number getModifiedTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `sensitiveInformationPolicyConfig`<sup>Required</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfig"></a>

```java
public WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference getSensitiveInformationPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a>

---

##### `topicPolicyConfig`<sup>Required</sup> <a name="topicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfig"></a>

```java
public WisdomAiGuardrailTopicPolicyConfigOutputReference getTopicPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference">WisdomAiGuardrailTopicPolicyConfigOutputReference</a>

---

##### `wordPolicyConfig`<sup>Required</sup> <a name="wordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfig"></a>

```java
public WisdomAiGuardrailWordPolicyConfigOutputReference getWordPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference">WisdomAiGuardrailWordPolicyConfigOutputReference</a>

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantIdInput"></a>

```java
public java.lang.String getAssistantIdInput();
```

- *Type:* java.lang.String

---

##### `blockedInputMessagingInput`<sup>Optional</sup> <a name="blockedInputMessagingInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessagingInput"></a>

```java
public java.lang.String getBlockedInputMessagingInput();
```

- *Type:* java.lang.String

---

##### `blockedOutputsMessagingInput`<sup>Optional</sup> <a name="blockedOutputsMessagingInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessagingInput"></a>

```java
public java.lang.String getBlockedOutputsMessagingInput();
```

- *Type:* java.lang.String

---

##### `contentPolicyConfigInput`<sup>Optional</sup> <a name="contentPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfigInput"></a>

```java
public IResolvable|WisdomAiGuardrailContentPolicyConfig getContentPolicyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

---

##### `contextualGroundingPolicyConfigInput`<sup>Optional</sup> <a name="contextualGroundingPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfigInput"></a>

```java
public IResolvable|WisdomAiGuardrailContextualGroundingPolicyConfig getContextualGroundingPolicyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sensitiveInformationPolicyConfigInput`<sup>Optional</sup> <a name="sensitiveInformationPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfigInput"></a>

```java
public IResolvable|WisdomAiGuardrailSensitiveInformationPolicyConfig getSensitiveInformationPolicyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `topicPolicyConfigInput`<sup>Optional</sup> <a name="topicPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfigInput"></a>

```java
public IResolvable|WisdomAiGuardrailTopicPolicyConfig getTopicPolicyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

---

##### `wordPolicyConfigInput`<sup>Optional</sup> <a name="wordPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfigInput"></a>

```java
public IResolvable|WisdomAiGuardrailWordPolicyConfig getWordPolicyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantId"></a>

```java
public java.lang.String getAssistantId();
```

- *Type:* java.lang.String

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessaging"></a>

```java
public java.lang.String getBlockedInputMessaging();
```

- *Type:* java.lang.String

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessaging"></a>

```java
public java.lang.String getBlockedOutputsMessaging();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiGuardrailConfig <a name="WisdomAiGuardrailConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailConfig;

WisdomAiGuardrailConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assistantId(java.lang.String)
    .blockedInputMessaging(java.lang.String)
    .blockedOutputsMessaging(java.lang.String)
//  .contentPolicyConfig(WisdomAiGuardrailContentPolicyConfig)
//  .contextualGroundingPolicyConfig(WisdomAiGuardrailContextualGroundingPolicyConfig)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .sensitiveInformationPolicyConfig(WisdomAiGuardrailSensitiveInformationPolicyConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .topicPolicyConfig(WisdomAiGuardrailTopicPolicyConfig)
//  .wordPolicyConfig(WisdomAiGuardrailWordPolicyConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.assistantId">assistantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedInputMessaging">blockedInputMessaging</a></code> | <code>java.lang.String</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>java.lang.String</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contentPolicyConfig">contentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | Content policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | Contextual grounding policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the guardrail or its version. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | Sensitive information policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.topicPolicyConfig">topicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | Topic policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.wordPolicyConfig">wordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | Word policy config for a guardrail. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.assistantId"></a>

```java
public java.lang.String getAssistantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}.

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedInputMessaging"></a>

```java
public java.lang.String getBlockedInputMessaging();
```

- *Type:* java.lang.String

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#blocked_input_messaging WisdomAiGuardrail#blocked_input_messaging}

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedOutputsMessaging"></a>

```java
public java.lang.String getBlockedOutputsMessaging();
```

- *Type:* java.lang.String

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#blocked_outputs_messaging WisdomAiGuardrail#blocked_outputs_messaging}

---

##### `contentPolicyConfig`<sup>Optional</sup> <a name="contentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contentPolicyConfig"></a>

```java
public WisdomAiGuardrailContentPolicyConfig getContentPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

Content policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#content_policy_config WisdomAiGuardrail#content_policy_config}

---

##### `contextualGroundingPolicyConfig`<sup>Optional</sup> <a name="contextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contextualGroundingPolicyConfig"></a>

```java
public WisdomAiGuardrailContextualGroundingPolicyConfig getContextualGroundingPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

Contextual grounding policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#contextual_grounding_policy_config WisdomAiGuardrail#contextual_grounding_policy_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the guardrail or its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}.

---

##### `sensitiveInformationPolicyConfig`<sup>Optional</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.sensitiveInformationPolicyConfig"></a>

```java
public WisdomAiGuardrailSensitiveInformationPolicyConfig getSensitiveInformationPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

Sensitive information policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#sensitive_information_policy_config WisdomAiGuardrail#sensitive_information_policy_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}.

---

##### `topicPolicyConfig`<sup>Optional</sup> <a name="topicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.topicPolicyConfig"></a>

```java
public WisdomAiGuardrailTopicPolicyConfig getTopicPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

Topic policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#topic_policy_config WisdomAiGuardrail#topic_policy_config}

---

##### `wordPolicyConfig`<sup>Optional</sup> <a name="wordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.wordPolicyConfig"></a>

```java
public WisdomAiGuardrailWordPolicyConfig getWordPolicyConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

Word policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#word_policy_config WisdomAiGuardrail#word_policy_config}

---

### WisdomAiGuardrailContentPolicyConfig <a name="WisdomAiGuardrailContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContentPolicyConfig;

WisdomAiGuardrailContentPolicyConfig.builder()
//  .filtersConfig(IResolvable|java.util.List<WisdomAiGuardrailContentPolicyConfigFiltersConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.property.filtersConfig">filtersConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>></code> | List of content filter configs in content policy. |

---

##### `filtersConfig`<sup>Optional</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.property.filtersConfig"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailContentPolicyConfigFiltersConfig> getFiltersConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>>

List of content filter configs in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

### WisdomAiGuardrailContentPolicyConfigFiltersConfig <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig;

WisdomAiGuardrailContentPolicyConfigFiltersConfig.builder()
//  .inputStrength(java.lang.String)
//  .outputStrength(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.inputStrength">inputStrength</a></code> | <code>java.lang.String</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.outputStrength">outputStrength</a></code> | <code>java.lang.String</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of text to text filter in content policy. |

---

##### `inputStrength`<sup>Optional</sup> <a name="inputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.inputStrength"></a>

```java
public java.lang.String getInputStrength();
```

- *Type:* java.lang.String

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#input_strength WisdomAiGuardrail#input_strength}

---

##### `outputStrength`<sup>Optional</sup> <a name="outputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.outputStrength"></a>

```java
public java.lang.String getOutputStrength();
```

- *Type:* java.lang.String

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#output_strength WisdomAiGuardrail#output_strength}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of text to text filter in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailContextualGroundingPolicyConfig <a name="WisdomAiGuardrailContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContextualGroundingPolicyConfig;

WisdomAiGuardrailContextualGroundingPolicyConfig.builder()
//  .filtersConfig(IResolvable|java.util.List<WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.property.filtersConfig">filtersConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>></code> | List of contextual grounding filter configs. |

---

##### `filtersConfig`<sup>Optional</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.property.filtersConfig"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig> getFiltersConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

List of contextual grounding filter configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig;

WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.builder()
//  .threshold(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The threshold for this filter. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of contextual grounding filter. |

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The threshold for this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#threshold WisdomAiGuardrail#threshold}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of contextual grounding filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig;

WisdomAiGuardrailSensitiveInformationPolicyConfig.builder()
//  .piiEntitiesConfig(IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig>)
//  .regexesConfig(IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig">piiEntitiesConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>></code> | List of entities. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.regexesConfig">regexesConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>></code> | List of regex. |

---

##### `piiEntitiesConfig`<sup>Optional</sup> <a name="piiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig> getPiiEntitiesConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

List of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#pii_entities_config WisdomAiGuardrail#pii_entities_config}

---

##### `regexesConfig`<sup>Optional</sup> <a name="regexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.regexesConfig"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig> getRegexesConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

List of regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#regexes_config WisdomAiGuardrail#regexes_config}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig;

WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.builder()
//  .action(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action">action</a></code> | <code>java.lang.String</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type">type</a></code> | <code>java.lang.String</code> | The currently supported PII entities. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The currently supported PII entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig;

WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.builder()
//  .action(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .pattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action">action</a></code> | <code>java.lang.String</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description">description</a></code> | <code>java.lang.String</code> | The regex description. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name">name</a></code> | <code>java.lang.String</code> | The regex name. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The regex pattern. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The regex description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The regex name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The regex pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#pattern WisdomAiGuardrail#pattern}

---

### WisdomAiGuardrailTopicPolicyConfig <a name="WisdomAiGuardrailTopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailTopicPolicyConfig;

WisdomAiGuardrailTopicPolicyConfig.builder()
//  .topicsConfig(IResolvable|java.util.List<WisdomAiGuardrailTopicPolicyConfigTopicsConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.property.topicsConfig">topicsConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>></code> | List of topic configs in topic policy. |

---

##### `topicsConfig`<sup>Optional</sup> <a name="topicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.property.topicsConfig"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailTopicPolicyConfigTopicsConfig> getTopicsConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>>

List of topic configs in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#topics_config WisdomAiGuardrail#topics_config}

---

### WisdomAiGuardrailTopicPolicyConfigTopicsConfig <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig;

WisdomAiGuardrailTopicPolicyConfigTopicsConfig.builder()
//  .definition(java.lang.String)
//  .examples(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.definition">definition</a></code> | <code>java.lang.String</code> | Definition of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | List of text examples. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of topic in a policy. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Definition of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#definition WisdomAiGuardrail#definition}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

List of text examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#examples WisdomAiGuardrail#examples}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of topic in a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailWordPolicyConfig <a name="WisdomAiGuardrailWordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfig;

WisdomAiGuardrailWordPolicyConfig.builder()
//  .managedWordListsConfig(IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig>)
//  .wordsConfig(IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigWordsConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.managedWordListsConfig">managedWordListsConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>></code> | A config for the list of managed words. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.wordsConfig">wordsConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>></code> | List of custom word configs. |

---

##### `managedWordListsConfig`<sup>Optional</sup> <a name="managedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.managedWordListsConfig"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig> getManagedWordListsConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>>

A config for the list of managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#managed_word_lists_config WisdomAiGuardrail#managed_word_lists_config}

---

##### `wordsConfig`<sup>Optional</sup> <a name="wordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.wordsConfig"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigWordsConfig> getWordsConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>>

List of custom word configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#words_config WisdomAiGuardrail#words_config}

---

### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig;

WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Options for managed words. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Options for managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailWordPolicyConfigWordsConfig <a name="WisdomAiGuardrailWordPolicyConfigWordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig;

WisdomAiGuardrailWordPolicyConfigWordsConfig.builder()
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.property.text">text</a></code> | <code>java.lang.String</code> | The custom word text. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The custom word text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#text WisdomAiGuardrail#text}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAiGuardrailContentPolicyConfigFiltersConfigList <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList;

new WisdomAiGuardrailContentPolicyConfigFiltersConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```java
public WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailContentPolicyConfigFiltersConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>>

---


### WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference;

new WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength">resetInputStrength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength">resetOutputStrength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputStrength` <a name="resetInputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength"></a>

```java
public void resetInputStrength()
```

##### `resetOutputStrength` <a name="resetOutputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength"></a>

```java
public void resetOutputStrength()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput">inputStrengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput">outputStrengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">inputStrength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">outputStrength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputStrengthInput`<sup>Optional</sup> <a name="inputStrengthInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput"></a>

```java
public java.lang.String getInputStrengthInput();
```

- *Type:* java.lang.String

---

##### `outputStrengthInput`<sup>Optional</sup> <a name="outputStrengthInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput"></a>

```java
public java.lang.String getOutputStrengthInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `inputStrength`<sup>Required</sup> <a name="inputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```java
public java.lang.String getInputStrength();
```

- *Type:* java.lang.String

---

##### `outputStrength`<sup>Required</sup> <a name="outputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```java
public java.lang.String getOutputStrength();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailContentPolicyConfigFiltersConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>

---


### WisdomAiGuardrailContentPolicyConfigOutputReference <a name="WisdomAiGuardrailContentPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContentPolicyConfigOutputReference;

new WisdomAiGuardrailContentPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig">putFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resetFiltersConfig">resetFiltersConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFiltersConfig` <a name="putFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig"></a>

```java
public void putFiltersConfig(IResolvable|java.util.List<WisdomAiGuardrailContentPolicyConfigFiltersConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>>

---

##### `resetFiltersConfig` <a name="resetFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resetFiltersConfig"></a>

```java
public void resetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList">WisdomAiGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput">filtersConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```java
public WisdomAiGuardrailContentPolicyConfigFiltersConfigList getFiltersConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList">WisdomAiGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `filtersConfigInput`<sup>Optional</sup> <a name="filtersConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailContentPolicyConfigFiltersConfig> getFiltersConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig">WisdomAiGuardrailContentPolicyConfigFiltersConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailContentPolicyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

---


### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList;

new WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```java
public WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

---


### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference;

new WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>

---


### WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference <a name="WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference;

new WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig">putFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig">resetFiltersConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFiltersConfig` <a name="putFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig"></a>

```java
public void putFiltersConfig(IResolvable|java.util.List<WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

---

##### `resetFiltersConfig` <a name="resetFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig"></a>

```java
public void resetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput">filtersConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```java
public WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList getFiltersConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `filtersConfigInput`<sup>Optional</sup> <a name="filtersConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig> getFiltersConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailContextualGroundingPolicyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference;

new WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig">putPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig">putRegexesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig">resetPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig">resetRegexesConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPiiEntitiesConfig` <a name="putPiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig"></a>

```java
public void putPiiEntitiesConfig(IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

---

##### `putRegexesConfig` <a name="putRegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig"></a>

```java
public void putRegexesConfig(IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

---

##### `resetPiiEntitiesConfig` <a name="resetPiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig"></a>

```java
public void resetPiiEntitiesConfig()
```

##### `resetRegexesConfig` <a name="resetRegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig"></a>

```java
public void resetRegexesConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">piiEntitiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">regexesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput">piiEntitiesConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput">regexesConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `piiEntitiesConfig`<sup>Required</sup> <a name="piiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```java
public WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList getPiiEntitiesConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `regexesConfig`<sup>Required</sup> <a name="regexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```java
public WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList getRegexesConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `piiEntitiesConfigInput`<sup>Optional</sup> <a name="piiEntitiesConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig> getPiiEntitiesConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

---

##### `regexesConfigInput`<sup>Optional</sup> <a name="regexesConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig> getRegexesConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailSensitiveInformationPolicyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList;

new WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```java
public WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference;

new WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList;

new WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```java
public WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference;

new WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern"></a>

```java
public void resetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>

---


### WisdomAiGuardrailTopicPolicyConfigOutputReference <a name="WisdomAiGuardrailTopicPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference;

new WisdomAiGuardrailTopicPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig">putTopicsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig">resetTopicsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopicsConfig` <a name="putTopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig"></a>

```java
public void putTopicsConfig(IResolvable|java.util.List<WisdomAiGuardrailTopicPolicyConfigTopicsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>>

---

##### `resetTopicsConfig` <a name="resetTopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig"></a>

```java
public void resetTopicsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">topicsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList">WisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput">topicsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicsConfig`<sup>Required</sup> <a name="topicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```java
public WisdomAiGuardrailTopicPolicyConfigTopicsConfigList getTopicsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList">WisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `topicsConfigInput`<sup>Optional</sup> <a name="topicsConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailTopicPolicyConfigTopicsConfig> getTopicsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailTopicPolicyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

---


### WisdomAiGuardrailTopicPolicyConfigTopicsConfigList <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList;

new WisdomAiGuardrailTopicPolicyConfigTopicsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```java
public WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailTopicPolicyConfigTopicsConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>>

---


### WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference;

new WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples">resetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetExamples` <a name="resetExamples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples"></a>

```java
public void resetExamples()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput">examplesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `examplesInput`<sup>Optional</sup> <a name="examplesInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput"></a>

```java
public java.util.List<java.lang.String> getExamplesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailTopicPolicyConfigTopicsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig">WisdomAiGuardrailTopicPolicyConfigTopicsConfig</a>

---


### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList;

new WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```java
public WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>>

---


### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference;

new WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>

---


### WisdomAiGuardrailWordPolicyConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfigOutputReference;

new WisdomAiGuardrailWordPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig">putManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig">putWordsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig">resetManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetWordsConfig">resetWordsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedWordListsConfig` <a name="putManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig"></a>

```java
public void putManagedWordListsConfig(IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>>

---

##### `putWordsConfig` <a name="putWordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig"></a>

```java
public void putWordsConfig(IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigWordsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>>

---

##### `resetManagedWordListsConfig` <a name="resetManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig"></a>

```java
public void resetManagedWordListsConfig()
```

##### `resetWordsConfig` <a name="resetWordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetWordsConfig"></a>

```java
public void resetWordsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">managedWordListsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig">wordsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList">WisdomAiGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput">managedWordListsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput">wordsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedWordListsConfig`<sup>Required</sup> <a name="managedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```java
public WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList getManagedWordListsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `wordsConfig`<sup>Required</sup> <a name="wordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```java
public WisdomAiGuardrailWordPolicyConfigWordsConfigList getWordsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList">WisdomAiGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `managedWordListsConfigInput`<sup>Optional</sup> <a name="managedWordListsConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig> getManagedWordListsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig</a>>

---

##### `wordsConfigInput`<sup>Optional</sup> <a name="wordsConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigWordsConfig> getWordsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailWordPolicyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

---


### WisdomAiGuardrailWordPolicyConfigWordsConfigList <a name="WisdomAiGuardrailWordPolicyConfigWordsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList;

new WisdomAiGuardrailWordPolicyConfigWordsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get"></a>

```java
public WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomAiGuardrailWordPolicyConfigWordsConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>>

---


### WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_ai_guardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference;

new WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomAiGuardrailWordPolicyConfigWordsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig">WisdomAiGuardrailWordPolicyConfigWordsConfig</a>

---



