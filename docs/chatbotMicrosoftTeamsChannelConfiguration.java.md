# `chatbotMicrosoftTeamsChannelConfiguration` Submodule <a name="`chatbotMicrosoftTeamsChannelConfiguration` Submodule" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotMicrosoftTeamsChannelConfiguration <a name="ChatbotMicrosoftTeamsChannelConfiguration" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration awscc_chatbot_microsoft_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfiguration;

ChatbotMicrosoftTeamsChannelConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationName(java.lang.String)
    .iamRoleArn(java.lang.String)
    .teamId(java.lang.String)
    .teamsChannelId(java.lang.String)
    .teamsTenantId(java.lang.String)
//  .customizationResourceArns(java.util.List<java.lang.String>)
//  .guardrailPolicies(java.util.List<java.lang.String>)
//  .loggingLevel(java.lang.String)
//  .snsTopicArns(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ChatbotMicrosoftTeamsChannelConfigurationTags>)
//  .teamsChannelName(java.lang.String)
//  .userRoleRequired(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.configurationName">configurationName</a></code> | <code>java.lang.String</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The id of the Microsoft Teams team. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamsChannelId">teamsChannelId</a></code> | <code>java.lang.String</code> | The id of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamsTenantId">teamsTenantId</a></code> | <code>java.lang.String</code> | The id of the Microsoft Teams tenant. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.customizationResourceArns">customizationResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.guardrailPolicies">guardrailPolicies</a></code> | <code>java.util.List<java.lang.String></code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>></code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamsChannelName">teamsChannelName</a></code> | <code>java.lang.String</code> | The name of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.userRoleRequired">userRoleRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.configurationName"></a>

- *Type:* java.lang.String

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#configuration_name ChatbotMicrosoftTeamsChannelConfiguration#configuration_name}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#iam_role_arn ChatbotMicrosoftTeamsChannelConfiguration#iam_role_arn}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The id of the Microsoft Teams team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#team_id ChatbotMicrosoftTeamsChannelConfiguration#team_id}

---

##### `teamsChannelId`<sup>Required</sup> <a name="teamsChannelId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamsChannelId"></a>

- *Type:* java.lang.String

The id of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_id ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_id}

---

##### `teamsTenantId`<sup>Required</sup> <a name="teamsTenantId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamsTenantId"></a>

- *Type:* java.lang.String

The id of the Microsoft Teams tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_tenant_id ChatbotMicrosoftTeamsChannelConfiguration#teams_tenant_id}

---

##### `customizationResourceArns`<sup>Optional</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.customizationResourceArns"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#customization_resource_arns ChatbotMicrosoftTeamsChannelConfiguration#customization_resource_arns}

---

##### `guardrailPolicies`<sup>Optional</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.guardrailPolicies"></a>

- *Type:* java.util.List<java.lang.String>

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#guardrail_policies ChatbotMicrosoftTeamsChannelConfiguration#guardrail_policies}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.loggingLevel"></a>

- *Type:* java.lang.String

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#logging_level ChatbotMicrosoftTeamsChannelConfiguration#logging_level}

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.snsTopicArns"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#sns_topic_arns ChatbotMicrosoftTeamsChannelConfiguration#sns_topic_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>>

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#tags ChatbotMicrosoftTeamsChannelConfiguration#tags}

---

##### `teamsChannelName`<sup>Optional</sup> <a name="teamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.teamsChannelName"></a>

- *Type:* java.lang.String

The name of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_name ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_name}

---

##### `userRoleRequired`<sup>Optional</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.userRoleRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#user_role_required ChatbotMicrosoftTeamsChannelConfiguration#user_role_required}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetCustomizationResourceArns">resetCustomizationResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetGuardrailPolicies">resetGuardrailPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetSnsTopicArns">resetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTeamsChannelName">resetTeamsChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetUserRoleRequired">resetUserRoleRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ChatbotMicrosoftTeamsChannelConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>>

---

##### `resetCustomizationResourceArns` <a name="resetCustomizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetCustomizationResourceArns"></a>

```java
public void resetCustomizationResourceArns()
```

##### `resetGuardrailPolicies` <a name="resetGuardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetGuardrailPolicies"></a>

```java
public void resetGuardrailPolicies()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetSnsTopicArns` <a name="resetSnsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetSnsTopicArns"></a>

```java
public void resetSnsTopicArns()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTeamsChannelName` <a name="resetTeamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTeamsChannelName"></a>

```java
public void resetTeamsChannelName()
```

##### `resetUserRoleRequired` <a name="resetUserRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetUserRoleRequired"></a>

```java
public void resetUserRoleRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfiguration;

ChatbotMicrosoftTeamsChannelConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfiguration;

ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfiguration;

ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfiguration;

ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChatbotMicrosoftTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChatbotMicrosoftTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotMicrosoftTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList">ChatbotMicrosoftTeamsChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationNameInput">configurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArnsInput">customizationResourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPoliciesInput">guardrailPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArnsInput">snsTopicArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelIdInput">teamsChannelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelNameInput">teamsChannelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantIdInput">teamsTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequiredInput">userRoleRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationName">configurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns">customizationResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies">guardrailPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId">teamsChannelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName">teamsChannelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId">teamsTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired">userRoleRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tags"></a>

```java
public ChatbotMicrosoftTeamsChannelConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList">ChatbotMicrosoftTeamsChannelConfigurationTagsList</a>

---

##### `configurationNameInput`<sup>Optional</sup> <a name="configurationNameInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationNameInput"></a>

```java
public java.lang.String getConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `customizationResourceArnsInput`<sup>Optional</sup> <a name="customizationResourceArnsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getCustomizationResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guardrailPoliciesInput`<sup>Optional</sup> <a name="guardrailPoliciesInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getGuardrailPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnsInput`<sup>Optional</sup> <a name="snsTopicArnsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ChatbotMicrosoftTeamsChannelConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>>

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `teamsChannelIdInput`<sup>Optional</sup> <a name="teamsChannelIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelIdInput"></a>

```java
public java.lang.String getTeamsChannelIdInput();
```

- *Type:* java.lang.String

---

##### `teamsChannelNameInput`<sup>Optional</sup> <a name="teamsChannelNameInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelNameInput"></a>

```java
public java.lang.String getTeamsChannelNameInput();
```

- *Type:* java.lang.String

---

##### `teamsTenantIdInput`<sup>Optional</sup> <a name="teamsTenantIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantIdInput"></a>

```java
public java.lang.String getTeamsTenantIdInput();
```

- *Type:* java.lang.String

---

##### `userRoleRequiredInput`<sup>Optional</sup> <a name="userRoleRequiredInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getUserRoleRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationName"></a>

```java
public java.lang.String getConfigurationName();
```

- *Type:* java.lang.String

---

##### `customizationResourceArns`<sup>Required</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns"></a>

```java
public java.util.List<java.lang.String> getCustomizationResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guardrailPolicies`<sup>Required</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies"></a>

```java
public java.util.List<java.lang.String> getGuardrailPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `teamsChannelId`<sup>Required</sup> <a name="teamsChannelId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId"></a>

```java
public java.lang.String getTeamsChannelId();
```

- *Type:* java.lang.String

---

##### `teamsChannelName`<sup>Required</sup> <a name="teamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName"></a>

```java
public java.lang.String getTeamsChannelName();
```

- *Type:* java.lang.String

---

##### `teamsTenantId`<sup>Required</sup> <a name="teamsTenantId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId"></a>

```java
public java.lang.String getTeamsTenantId();
```

- *Type:* java.lang.String

---

##### `userRoleRequired`<sup>Required</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired"></a>

```java
public java.lang.Boolean|IResolvable getUserRoleRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotMicrosoftTeamsChannelConfigurationConfig <a name="ChatbotMicrosoftTeamsChannelConfigurationConfig" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfigurationConfig;

ChatbotMicrosoftTeamsChannelConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationName(java.lang.String)
    .iamRoleArn(java.lang.String)
    .teamId(java.lang.String)
    .teamsChannelId(java.lang.String)
    .teamsTenantId(java.lang.String)
//  .customizationResourceArns(java.util.List<java.lang.String>)
//  .guardrailPolicies(java.util.List<java.lang.String>)
//  .loggingLevel(java.lang.String)
//  .snsTopicArns(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ChatbotMicrosoftTeamsChannelConfigurationTags>)
//  .teamsChannelName(java.lang.String)
//  .userRoleRequired(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.configurationName">configurationName</a></code> | <code>java.lang.String</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The id of the Microsoft Teams team. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelId">teamsChannelId</a></code> | <code>java.lang.String</code> | The id of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsTenantId">teamsTenantId</a></code> | <code>java.lang.String</code> | The id of the Microsoft Teams tenant. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.customizationResourceArns">customizationResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.guardrailPolicies">guardrailPolicies</a></code> | <code>java.util.List<java.lang.String></code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>></code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelName">teamsChannelName</a></code> | <code>java.lang.String</code> | The name of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.userRoleRequired">userRoleRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.configurationName"></a>

```java
public java.lang.String getConfigurationName();
```

- *Type:* java.lang.String

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#configuration_name ChatbotMicrosoftTeamsChannelConfiguration#configuration_name}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#iam_role_arn ChatbotMicrosoftTeamsChannelConfiguration#iam_role_arn}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The id of the Microsoft Teams team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#team_id ChatbotMicrosoftTeamsChannelConfiguration#team_id}

---

##### `teamsChannelId`<sup>Required</sup> <a name="teamsChannelId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelId"></a>

```java
public java.lang.String getTeamsChannelId();
```

- *Type:* java.lang.String

The id of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_id ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_id}

---

##### `teamsTenantId`<sup>Required</sup> <a name="teamsTenantId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsTenantId"></a>

```java
public java.lang.String getTeamsTenantId();
```

- *Type:* java.lang.String

The id of the Microsoft Teams tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_tenant_id ChatbotMicrosoftTeamsChannelConfiguration#teams_tenant_id}

---

##### `customizationResourceArns`<sup>Optional</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.customizationResourceArns"></a>

```java
public java.util.List<java.lang.String> getCustomizationResourceArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#customization_resource_arns ChatbotMicrosoftTeamsChannelConfiguration#customization_resource_arns}

---

##### `guardrailPolicies`<sup>Optional</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.guardrailPolicies"></a>

```java
public java.util.List<java.lang.String> getGuardrailPolicies();
```

- *Type:* java.util.List<java.lang.String>

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#guardrail_policies ChatbotMicrosoftTeamsChannelConfiguration#guardrail_policies}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#logging_level ChatbotMicrosoftTeamsChannelConfiguration#logging_level}

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#sns_topic_arns ChatbotMicrosoftTeamsChannelConfiguration#sns_topic_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ChatbotMicrosoftTeamsChannelConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>>

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#tags ChatbotMicrosoftTeamsChannelConfiguration#tags}

---

##### `teamsChannelName`<sup>Optional</sup> <a name="teamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelName"></a>

```java
public java.lang.String getTeamsChannelName();
```

- *Type:* java.lang.String

The name of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_name ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_name}

---

##### `userRoleRequired`<sup>Optional</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.userRoleRequired"></a>

```java
public java.lang.Boolean|IResolvable getUserRoleRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#user_role_required ChatbotMicrosoftTeamsChannelConfiguration#user_role_required}

---

### ChatbotMicrosoftTeamsChannelConfigurationTags <a name="ChatbotMicrosoftTeamsChannelConfigurationTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfigurationTags;

ChatbotMicrosoftTeamsChannelConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#key ChatbotMicrosoftTeamsChannelConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#value ChatbotMicrosoftTeamsChannelConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#key ChatbotMicrosoftTeamsChannelConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#value ChatbotMicrosoftTeamsChannelConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotMicrosoftTeamsChannelConfigurationTagsList <a name="ChatbotMicrosoftTeamsChannelConfigurationTagsList" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfigurationTagsList;

new ChatbotMicrosoftTeamsChannelConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get"></a>

```java
public ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChatbotMicrosoftTeamsChannelConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>>

---


### ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference <a name="ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chatbot_microsoft_teams_channel_configuration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference;

new ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChatbotMicrosoftTeamsChannelConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>

---



