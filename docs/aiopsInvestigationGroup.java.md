# `aiopsInvestigationGroup` Submodule <a name="`aiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.aiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiopsInvestigationGroup <a name="AiopsInvestigationGroup" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroup;

AiopsInvestigationGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .chatbotNotificationChannels(IResolvable|java.util.List<AiopsInvestigationGroupChatbotNotificationChannels>)
//  .crossAccountConfigurations(IResolvable|java.util.List<AiopsInvestigationGroupCrossAccountConfigurations>)
//  .encryptionConfig(AiopsInvestigationGroupEncryptionConfig)
//  .investigationGroupPolicy(java.lang.String)
//  .isCloudTrailEventHistoryEnabled(java.lang.Boolean|IResolvable)
//  .retentionInDays(java.lang.Number)
//  .roleArn(java.lang.String)
//  .tagKeyBoundaries(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<AiopsInvestigationGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | User friendly name for resources. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.chatbotNotificationChannels">chatbotNotificationChannels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>></code> | An array of key-value pairs of notification channels to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.crossAccountConfigurations">crossAccountConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>></code> | An array of cross account configurations. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.investigationGroupPolicy">investigationGroupPolicy</a></code> | <code>java.lang.String</code> | Investigation Group policy. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.isCloudTrailEventHistoryEnabled">isCloudTrailEventHistoryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable cloud trail history. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | The number of days to retain the investigation group. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Investigation Role's ARN. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tagKeyBoundaries">tagKeyBoundaries</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

User friendly name for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}

---

##### `chatbotNotificationChannels`<sup>Optional</sup> <a name="chatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.chatbotNotificationChannels"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>>

An array of key-value pairs of notification channels to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}

---

##### `crossAccountConfigurations`<sup>Optional</sup> <a name="crossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.crossAccountConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>>

An array of cross account configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}.

---

##### `investigationGroupPolicy`<sup>Optional</sup> <a name="investigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.investigationGroupPolicy"></a>

- *Type:* java.lang.String

Investigation Group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}

---

##### `isCloudTrailEventHistoryEnabled`<sup>Optional</sup> <a name="isCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.isCloudTrailEventHistoryEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable cloud trail history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.retentionInDays"></a>

- *Type:* java.lang.Number

The number of days to retain the investigation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}

---

##### `tagKeyBoundaries`<sup>Optional</sup> <a name="tagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tagKeyBoundaries"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels">putChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations">putCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels">resetChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations">resetCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy">resetInvestigationGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled">resetIsCloudTrailEventHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries">resetTagKeyBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChatbotNotificationChannels` <a name="putChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels"></a>

```java
public void putChatbotNotificationChannels(IResolvable|java.util.List<AiopsInvestigationGroupChatbotNotificationChannels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>>

---

##### `putCrossAccountConfigurations` <a name="putCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations"></a>

```java
public void putCrossAccountConfigurations(IResolvable|java.util.List<AiopsInvestigationGroupCrossAccountConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(AiopsInvestigationGroupEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AiopsInvestigationGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>>

---

##### `resetChatbotNotificationChannels` <a name="resetChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels"></a>

```java
public void resetChatbotNotificationChannels()
```

##### `resetCrossAccountConfigurations` <a name="resetCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations"></a>

```java
public void resetCrossAccountConfigurations()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetInvestigationGroupPolicy` <a name="resetInvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy"></a>

```java
public void resetInvestigationGroupPolicy()
```

##### `resetIsCloudTrailEventHistoryEnabled` <a name="resetIsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled"></a>

```java
public void resetIsCloudTrailEventHistoryEnabled()
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays"></a>

```java
public void resetRetentionInDays()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTagKeyBoundaries` <a name="resetTagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries"></a>

```java
public void resetTagKeyBoundaries()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroup;

AiopsInvestigationGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroup;

AiopsInvestigationGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroup;

AiopsInvestigationGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroup;

AiopsInvestigationGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiopsInvestigationGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiopsInvestigationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels">chatbotNotificationChannels</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations">crossAccountConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy">lastModifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput">chatbotNotificationChannelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput">crossAccountConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput">investigationGroupPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput">isCloudTrailEventHistoryEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput">tagKeyBoundariesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy">investigationGroupPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">isCloudTrailEventHistoryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries">tagKeyBoundaries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `chatbotNotificationChannels`<sup>Required</sup> <a name="chatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```java
public AiopsInvestigationGroupChatbotNotificationChannelsList getChatbotNotificationChannels();
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `crossAccountConfigurations`<sup>Required</sup> <a name="crossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```java
public AiopsInvestigationGroupCrossAccountConfigurationsList getCrossAccountConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig"></a>

```java
public AiopsInvestigationGroupEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy"></a>

```java
public java.lang.String getLastModifiedBy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags"></a>

```java
public AiopsInvestigationGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a>

---

##### `chatbotNotificationChannelsInput`<sup>Optional</sup> <a name="chatbotNotificationChannelsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupChatbotNotificationChannels> getChatbotNotificationChannelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>>

---

##### `crossAccountConfigurationsInput`<sup>Optional</sup> <a name="crossAccountConfigurationsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupCrossAccountConfigurations> getCrossAccountConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput"></a>

```java
public IResolvable|AiopsInvestigationGroupEncryptionConfig getEncryptionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `investigationGroupPolicyInput`<sup>Optional</sup> <a name="investigationGroupPolicyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput"></a>

```java
public java.lang.String getInvestigationGroupPolicyInput();
```

- *Type:* java.lang.String

---

##### `isCloudTrailEventHistoryEnabledInput`<sup>Optional</sup> <a name="isCloudTrailEventHistoryEnabledInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsCloudTrailEventHistoryEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagKeyBoundariesInput`<sup>Optional</sup> <a name="tagKeyBoundariesInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput"></a>

```java
public java.util.List<java.lang.String> getTagKeyBoundariesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>>

---

##### `investigationGroupPolicy`<sup>Required</sup> <a name="investigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```java
public java.lang.String getInvestigationGroupPolicy();
```

- *Type:* java.lang.String

---

##### `isCloudTrailEventHistoryEnabled`<sup>Required</sup> <a name="isCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsCloudTrailEventHistoryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tagKeyBoundaries`<sup>Required</sup> <a name="tagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```java
public java.util.List<java.lang.String> getTagKeyBoundaries();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiopsInvestigationGroupChatbotNotificationChannels <a name="AiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupChatbotNotificationChannels;

AiopsInvestigationGroupChatbotNotificationChannels.builder()
//  .chatConfigurationArns(java.util.List<java.lang.String>)
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns">chatConfigurationArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}. |

---

##### `chatConfigurationArns`<sup>Optional</sup> <a name="chatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns"></a>

```java
public java.util.List<java.lang.String> getChatConfigurationArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}.

---

### AiopsInvestigationGroupConfig <a name="AiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupConfig;

AiopsInvestigationGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .chatbotNotificationChannels(IResolvable|java.util.List<AiopsInvestigationGroupChatbotNotificationChannels>)
//  .crossAccountConfigurations(IResolvable|java.util.List<AiopsInvestigationGroupCrossAccountConfigurations>)
//  .encryptionConfig(AiopsInvestigationGroupEncryptionConfig)
//  .investigationGroupPolicy(java.lang.String)
//  .isCloudTrailEventHistoryEnabled(java.lang.Boolean|IResolvable)
//  .retentionInDays(java.lang.Number)
//  .roleArn(java.lang.String)
//  .tagKeyBoundaries(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<AiopsInvestigationGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | User friendly name for resources. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels">chatbotNotificationChannels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>></code> | An array of key-value pairs of notification channels to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations">crossAccountConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>></code> | An array of cross account configurations. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy">investigationGroupPolicy</a></code> | <code>java.lang.String</code> | Investigation Group policy. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled">isCloudTrailEventHistoryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable cloud trail history. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | The number of days to retain the investigation group. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Investigation Role's ARN. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries">tagKeyBoundaries</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

User friendly name for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}

---

##### `chatbotNotificationChannels`<sup>Optional</sup> <a name="chatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupChatbotNotificationChannels> getChatbotNotificationChannels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>>

An array of key-value pairs of notification channels to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}

---

##### `crossAccountConfigurations`<sup>Optional</sup> <a name="crossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupCrossAccountConfigurations> getCrossAccountConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>>

An array of cross account configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig"></a>

```java
public AiopsInvestigationGroupEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}.

---

##### `investigationGroupPolicy`<sup>Optional</sup> <a name="investigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy"></a>

```java
public java.lang.String getInvestigationGroupPolicy();
```

- *Type:* java.lang.String

Investigation Group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}

---

##### `isCloudTrailEventHistoryEnabled`<sup>Optional</sup> <a name="isCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsCloudTrailEventHistoryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable cloud trail history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

The number of days to retain the investigation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}

---

##### `tagKeyBoundaries`<sup>Optional</sup> <a name="tagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries"></a>

```java
public java.util.List<java.lang.String> getTagKeyBoundaries();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}

---

### AiopsInvestigationGroupCrossAccountConfigurations <a name="AiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupCrossAccountConfigurations;

AiopsInvestigationGroupCrossAccountConfigurations.builder()
//  .sourceRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn">sourceRoleArn</a></code> | <code>java.lang.String</code> | The Investigation Role's ARN. |

---

##### `sourceRoleArn`<sup>Optional</sup> <a name="sourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn"></a>

```java
public java.lang.String getSourceRoleArn();
```

- *Type:* java.lang.String

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#source_role_arn AiopsInvestigationGroup#source_role_arn}

---

### AiopsInvestigationGroupEncryptionConfig <a name="AiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupEncryptionConfig;

AiopsInvestigationGroupEncryptionConfig.builder()
//  .encryptionConfigurationType(java.lang.String)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType">encryptionConfigurationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}. |

---

##### `encryptionConfigurationType`<sup>Optional</sup> <a name="encryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType"></a>

```java
public java.lang.String getEncryptionConfigurationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}.

---

### AiopsInvestigationGroupTags <a name="AiopsInvestigationGroupTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupTags;

AiopsInvestigationGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiopsInvestigationGroupChatbotNotificationChannelsList <a name="AiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupChatbotNotificationChannelsList;

new AiopsInvestigationGroupChatbotNotificationChannelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```java
public AiopsInvestigationGroupChatbotNotificationChannelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupChatbotNotificationChannels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>>

---


### AiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="AiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference;

new AiopsInvestigationGroupChatbotNotificationChannelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns">resetChatConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChatConfigurationArns` <a name="resetChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns"></a>

```java
public void resetChatConfigurationArns()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput">chatConfigurationArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">chatConfigurationArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chatConfigurationArnsInput`<sup>Optional</sup> <a name="chatConfigurationArnsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput"></a>

```java
public java.util.List<java.lang.String> getChatConfigurationArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `chatConfigurationArns`<sup>Required</sup> <a name="chatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```java
public java.util.List<java.lang.String> getChatConfigurationArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiopsInvestigationGroupChatbotNotificationChannels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>

---


### AiopsInvestigationGroupCrossAccountConfigurationsList <a name="AiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupCrossAccountConfigurationsList;

new AiopsInvestigationGroupCrossAccountConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```java
public AiopsInvestigationGroupCrossAccountConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupCrossAccountConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>>

---


### AiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="AiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference;

new AiopsInvestigationGroupCrossAccountConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn">resetSourceRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceRoleArn` <a name="resetSourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn"></a>

```java
public void resetSourceRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput">sourceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">sourceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceRoleArnInput`<sup>Optional</sup> <a name="sourceRoleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput"></a>

```java
public java.lang.String getSourceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sourceRoleArn`<sup>Required</sup> <a name="sourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```java
public java.lang.String getSourceRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiopsInvestigationGroupCrossAccountConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>

---


### AiopsInvestigationGroupEncryptionConfigOutputReference <a name="AiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupEncryptionConfigOutputReference;

new AiopsInvestigationGroupEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType">resetEncryptionConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionConfigurationType` <a name="resetEncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType"></a>

```java
public void resetEncryptionConfigurationType()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput">encryptionConfigurationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">encryptionConfigurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationTypeInput`<sup>Optional</sup> <a name="encryptionConfigurationTypeInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput"></a>

```java
public java.lang.String getEncryptionConfigurationTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationType`<sup>Required</sup> <a name="encryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```java
public java.lang.String getEncryptionConfigurationType();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AiopsInvestigationGroupEncryptionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---


### AiopsInvestigationGroupTagsList <a name="AiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupTagsList;

new AiopsInvestigationGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get"></a>

```java
public AiopsInvestigationGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiopsInvestigationGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>>

---


### AiopsInvestigationGroupTagsOutputReference <a name="AiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aiops_investigation_group.AiopsInvestigationGroupTagsOutputReference;

new AiopsInvestigationGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiopsInvestigationGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>

---



