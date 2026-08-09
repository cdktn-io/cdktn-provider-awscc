# `chatbotSlackChannelConfiguration` Submodule <a name="`chatbotSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotSlackChannelConfiguration <a name="ChatbotSlackChannelConfiguration" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration awscc_chatbot_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfiguration;

ChatbotSlackChannelConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationName(java.lang.String)
    .iamRoleArn(java.lang.String)
    .slackChannelId(java.lang.String)
    .slackWorkspaceId(java.lang.String)
//  .customizationResourceArns(java.util.List<java.lang.String>)
//  .guardrailPolicies(java.util.List<java.lang.String>)
//  .loggingLevel(java.lang.String)
//  .snsTopicArns(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ChatbotSlackChannelConfigurationTags>)
//  .userRoleRequired(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.configurationName">configurationName</a></code> | <code>java.lang.String</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackChannelId">slackChannelId</a></code> | <code>java.lang.String</code> | The id of the Slack channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackWorkspaceId">slackWorkspaceId</a></code> | <code>java.lang.String</code> | The id of the Slack workspace. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.customizationResourceArns">customizationResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.guardrailPolicies">guardrailPolicies</a></code> | <code>java.util.List<java.lang.String></code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>></code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.userRoleRequired">userRoleRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.configurationName"></a>

- *Type:* java.lang.String

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackChannelId"></a>

- *Type:* java.lang.String

The id of the Slack channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}

---

##### `slackWorkspaceId`<sup>Required</sup> <a name="slackWorkspaceId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.slackWorkspaceId"></a>

- *Type:* java.lang.String

The id of the Slack workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#slack_workspace_id ChatbotSlackChannelConfiguration#slack_workspace_id}

---

##### `customizationResourceArns`<sup>Optional</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.customizationResourceArns"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#customization_resource_arns ChatbotSlackChannelConfiguration#customization_resource_arns}

---

##### `guardrailPolicies`<sup>Optional</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.guardrailPolicies"></a>

- *Type:* java.util.List<java.lang.String>

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policies ChatbotSlackChannelConfiguration#guardrail_policies}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.loggingLevel"></a>

- *Type:* java.lang.String

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.snsTopicArns"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>>

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}

---

##### `userRoleRequired`<sup>Optional</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.userRoleRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#user_role_required ChatbotSlackChannelConfiguration#user_role_required}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetCustomizationResourceArns">resetCustomizationResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicies">resetGuardrailPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns">resetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserRoleRequired">resetUserRoleRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ChatbotSlackChannelConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>>

---

##### `resetCustomizationResourceArns` <a name="resetCustomizationResourceArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetCustomizationResourceArns"></a>

```java
public void resetCustomizationResourceArns()
```

##### `resetGuardrailPolicies` <a name="resetGuardrailPolicies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicies"></a>

```java
public void resetGuardrailPolicies()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetSnsTopicArns` <a name="resetSnsTopicArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns"></a>

```java
public void resetSnsTopicArns()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserRoleRequired` <a name="resetUserRoleRequired" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserRoleRequired"></a>

```java
public void resetUserRoleRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfiguration;

ChatbotSlackChannelConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfiguration;

ChatbotSlackChannelConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfiguration;

ChatbotSlackChannelConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfiguration;

ChatbotSlackChannelConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChatbotSlackChannelConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChatbotSlackChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChatbotSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList">ChatbotSlackChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput">configurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArnsInput">customizationResourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPoliciesInput">guardrailPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput">slackChannelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceIdInput">slackWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput">snsTopicArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequiredInput">userRoleRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName">configurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArns">customizationResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicies">guardrailPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId">slackChannelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceId">slackWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequired">userRoleRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags"></a>

```java
public ChatbotSlackChannelConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList">ChatbotSlackChannelConfigurationTagsList</a>

---

##### `configurationNameInput`<sup>Optional</sup> <a name="configurationNameInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput"></a>

```java
public java.lang.String getConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `customizationResourceArnsInput`<sup>Optional</sup> <a name="customizationResourceArnsInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getCustomizationResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guardrailPoliciesInput`<sup>Optional</sup> <a name="guardrailPoliciesInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getGuardrailPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `slackChannelIdInput`<sup>Optional</sup> <a name="slackChannelIdInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput"></a>

```java
public java.lang.String getSlackChannelIdInput();
```

- *Type:* java.lang.String

---

##### `slackWorkspaceIdInput`<sup>Optional</sup> <a name="slackWorkspaceIdInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceIdInput"></a>

```java
public java.lang.String getSlackWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnsInput`<sup>Optional</sup> <a name="snsTopicArnsInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ChatbotSlackChannelConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>>

---

##### `userRoleRequiredInput`<sup>Optional</sup> <a name="userRoleRequiredInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getUserRoleRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName"></a>

```java
public java.lang.String getConfigurationName();
```

- *Type:* java.lang.String

---

##### `customizationResourceArns`<sup>Required</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.customizationResourceArns"></a>

```java
public java.util.List<java.lang.String> getCustomizationResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guardrailPolicies`<sup>Required</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicies"></a>

```java
public java.util.List<java.lang.String> getGuardrailPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId"></a>

```java
public java.lang.String getSlackChannelId();
```

- *Type:* java.lang.String

---

##### `slackWorkspaceId`<sup>Required</sup> <a name="slackWorkspaceId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackWorkspaceId"></a>

```java
public java.lang.String getSlackWorkspaceId();
```

- *Type:* java.lang.String

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userRoleRequired`<sup>Required</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userRoleRequired"></a>

```java
public java.lang.Boolean|IResolvable getUserRoleRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotSlackChannelConfigurationConfig <a name="ChatbotSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfigurationConfig;

ChatbotSlackChannelConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationName(java.lang.String)
    .iamRoleArn(java.lang.String)
    .slackChannelId(java.lang.String)
    .slackWorkspaceId(java.lang.String)
//  .customizationResourceArns(java.util.List<java.lang.String>)
//  .guardrailPolicies(java.util.List<java.lang.String>)
//  .loggingLevel(java.lang.String)
//  .snsTopicArns(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ChatbotSlackChannelConfigurationTags>)
//  .userRoleRequired(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName">configurationName</a></code> | <code>java.lang.String</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId">slackChannelId</a></code> | <code>java.lang.String</code> | The id of the Slack channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackWorkspaceId">slackWorkspaceId</a></code> | <code>java.lang.String</code> | The id of the Slack workspace. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.customizationResourceArns">customizationResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicies">guardrailPolicies</a></code> | <code>java.util.List<java.lang.String></code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>></code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userRoleRequired">userRoleRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName"></a>

```java
public java.lang.String getConfigurationName();
```

- *Type:* java.lang.String

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId"></a>

```java
public java.lang.String getSlackChannelId();
```

- *Type:* java.lang.String

The id of the Slack channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}

---

##### `slackWorkspaceId`<sup>Required</sup> <a name="slackWorkspaceId" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackWorkspaceId"></a>

```java
public java.lang.String getSlackWorkspaceId();
```

- *Type:* java.lang.String

The id of the Slack workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#slack_workspace_id ChatbotSlackChannelConfiguration#slack_workspace_id}

---

##### `customizationResourceArns`<sup>Optional</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.customizationResourceArns"></a>

```java
public java.util.List<java.lang.String> getCustomizationResourceArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#customization_resource_arns ChatbotSlackChannelConfiguration#customization_resource_arns}

---

##### `guardrailPolicies`<sup>Optional</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicies"></a>

```java
public java.util.List<java.lang.String> getGuardrailPolicies();
```

- *Type:* java.util.List<java.lang.String>

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policies ChatbotSlackChannelConfiguration#guardrail_policies}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ChatbotSlackChannelConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>>

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}

---

##### `userRoleRequired`<sup>Optional</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userRoleRequired"></a>

```java
public java.lang.Boolean|IResolvable getUserRoleRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#user_role_required ChatbotSlackChannelConfiguration#user_role_required}

---

### ChatbotSlackChannelConfigurationTags <a name="ChatbotSlackChannelConfigurationTags" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfigurationTags;

ChatbotSlackChannelConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#key ChatbotSlackChannelConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#value ChatbotSlackChannelConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#key ChatbotSlackChannelConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chatbot_slack_channel_configuration#value ChatbotSlackChannelConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotSlackChannelConfigurationTagsList <a name="ChatbotSlackChannelConfigurationTagsList" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfigurationTagsList;

new ChatbotSlackChannelConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.get"></a>

```java
public ChatbotSlackChannelConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChatbotSlackChannelConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>>

---


### ChatbotSlackChannelConfigurationTagsOutputReference <a name="ChatbotSlackChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_slack_channel_configuration.ChatbotSlackChannelConfigurationTagsOutputReference;

new ChatbotSlackChannelConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChatbotSlackChannelConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTags">ChatbotSlackChannelConfigurationTags</a>

---



