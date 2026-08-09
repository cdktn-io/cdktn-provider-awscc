# `appstreamStack` Submodule <a name="`appstreamStack` Submodule" id="@cdktn/provider-awscc.appstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamStack <a name="AppstreamStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack awscc_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStack;

AppstreamStack.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessEndpoints(IResolvable|java.util.List<AppstreamStackAccessEndpoints>)
//  .agentAccessConfig(AppstreamStackAgentAccessConfig)
//  .applicationSettings(AppstreamStackApplicationSettings)
//  .attributesToDelete(java.util.List<java.lang.String>)
//  .contentRedirection(AppstreamStackContentRedirection)
//  .deleteStorageConnectors(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .embedHostDomains(java.util.List<java.lang.String>)
//  .feedbackUrl(java.lang.String)
//  .name(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .storageConnectors(IResolvable|java.util.List<AppstreamStackStorageConnectors>)
//  .streamingExperienceSettings(AppstreamStackStreamingExperienceSettings)
//  .tags(IResolvable|java.util.List<AppstreamStackTags>)
//  .userSettings(IResolvable|java.util.List<AppstreamStackUserSettings>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.accessEndpoints">accessEndpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>></code> | The list of virtual private cloud (VPC) interface endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.agentAccessConfig">agentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | The configuration for agent access on the stack. If specified, agent access is enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | The persistent application settings for users of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.attributesToDelete">attributesToDelete</a></code> | <code>java.util.List<java.lang.String></code> | The stack attributes to delete. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.contentRedirection">contentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | The content redirection settings for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.deleteStorageConnectors">deleteStorageConnectors</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The stack name to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.embedHostDomains">embedHostDomains</a></code> | <code>java.util.List<java.lang.String></code> | The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.feedbackUrl">feedbackUrl</a></code> | <code>java.lang.String</code> | The URL that users are redirected to after they click the Send Feedback link. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | The URL that users are redirected to after their streaming session ends. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.storageConnectors">storageConnectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>></code> | The storage connectors to enable. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.streamingExperienceSettings">streamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | The streaming protocol that you want your stack to prefer. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>></code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.userSettings">userSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>></code> | The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.accessEndpoints"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>>

The list of virtual private cloud (VPC) interface endpoint objects.

Users of the stack can connect to AppStream 2.0 only through the specified endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `agentAccessConfig`<sup>Optional</sup> <a name="agentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.agentAccessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

The configuration for agent access on the stack. If specified, agent access is enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#agent_access_config AppstreamStack#agent_access_config}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.applicationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

The persistent application settings for users of the stack.

When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `attributesToDelete`<sup>Optional</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.attributesToDelete"></a>

- *Type:* java.util.List<java.lang.String>

The stack attributes to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#attributes_to_delete AppstreamStack#attributes_to_delete}

---

##### `contentRedirection`<sup>Optional</sup> <a name="contentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.contentRedirection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

The content redirection settings for the stack.

These settings control URL redirection between the streaming session and the local device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#content_redirection AppstreamStack#content_redirection}

---

##### `deleteStorageConnectors`<sup>Optional</sup> <a name="deleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.deleteStorageConnectors"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#delete_storage_connectors AppstreamStack#delete_storage_connectors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#description AppstreamStack#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The stack name to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}

---

##### `embedHostDomains`<sup>Optional</sup> <a name="embedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.embedHostDomains"></a>

- *Type:* java.util.List<java.lang.String>

The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}

---

##### `feedbackUrl`<sup>Optional</sup> <a name="feedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.feedbackUrl"></a>

- *Type:* java.lang.String

The URL that users are redirected to after they click the Send Feedback link.

If no URL is specified, no Send Feedback link is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#name AppstreamStack#name}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.redirectUrl"></a>

- *Type:* java.lang.String

The URL that users are redirected to after their streaming session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}

---

##### `storageConnectors`<sup>Optional</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.storageConnectors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>>

The storage connectors to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `streamingExperienceSettings`<sup>Optional</sup> <a name="streamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.streamingExperienceSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

The streaming protocol that you want your stack to prefer.

This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>>

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#tags AppstreamStack#tags}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.userSettings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>>

The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints">putAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig">putAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection">putContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors">putStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings">putStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints">resetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig">resetAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete">resetAttributesToDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection">resetContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors">resetDeleteStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains">resetEmbedHostDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl">resetFeedbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors">resetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings">resetStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessEndpoints` <a name="putAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints"></a>

```java
public void putAccessEndpoints(IResolvable|java.util.List<AppstreamStackAccessEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>>

---

##### `putAgentAccessConfig` <a name="putAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig"></a>

```java
public void putAgentAccessConfig(AppstreamStackAgentAccessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings"></a>

```java
public void putApplicationSettings(AppstreamStackApplicationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `putContentRedirection` <a name="putContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection"></a>

```java
public void putContentRedirection(AppstreamStackContentRedirection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---

##### `putStorageConnectors` <a name="putStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors"></a>

```java
public void putStorageConnectors(IResolvable|java.util.List<AppstreamStackStorageConnectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>>

---

##### `putStreamingExperienceSettings` <a name="putStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings"></a>

```java
public void putStreamingExperienceSettings(AppstreamStackStreamingExperienceSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppstreamStackTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>>

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings"></a>

```java
public void putUserSettings(IResolvable|java.util.List<AppstreamStackUserSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>>

---

##### `resetAccessEndpoints` <a name="resetAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints"></a>

```java
public void resetAccessEndpoints()
```

##### `resetAgentAccessConfig` <a name="resetAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig"></a>

```java
public void resetAgentAccessConfig()
```

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings"></a>

```java
public void resetApplicationSettings()
```

##### `resetAttributesToDelete` <a name="resetAttributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete"></a>

```java
public void resetAttributesToDelete()
```

##### `resetContentRedirection` <a name="resetContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection"></a>

```java
public void resetContentRedirection()
```

##### `resetDeleteStorageConnectors` <a name="resetDeleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors"></a>

```java
public void resetDeleteStorageConnectors()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmbedHostDomains` <a name="resetEmbedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains"></a>

```java
public void resetEmbedHostDomains()
```

##### `resetFeedbackUrl` <a name="resetFeedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl"></a>

```java
public void resetFeedbackUrl()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName"></a>

```java
public void resetName()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetStorageConnectors` <a name="resetStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors"></a>

```java
public void resetStorageConnectors()
```

##### `resetStreamingExperienceSettings` <a name="resetStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings"></a>

```java
public void resetStreamingExperienceSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings"></a>

```java
public void resetUserSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStack;

AppstreamStack.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStack;

AppstreamStack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStack;

AppstreamStack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStack;

AppstreamStack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppstreamStack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppstreamStack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppstreamStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig">agentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection">contentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors">storageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings">streamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput">accessEndpointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput">agentAccessConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput">attributesToDeleteInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput">contentRedirectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput">deleteStorageConnectorsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput">embedHostDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput">feedbackUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput">storageConnectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput">streamingExperienceSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput">userSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete">attributesToDelete</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors">deleteStorageConnectors</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains">embedHostDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl">feedbackUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints"></a>

```java
public AppstreamStackAccessEndpointsList getAccessEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a>

---

##### `agentAccessConfig`<sup>Required</sup> <a name="agentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig"></a>

```java
public AppstreamStackAgentAccessConfigOutputReference getAgentAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a>

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings"></a>

```java
public AppstreamStackApplicationSettingsOutputReference getApplicationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a>

---

##### `contentRedirection`<sup>Required</sup> <a name="contentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection"></a>

```java
public AppstreamStackContentRedirectionOutputReference getContentRedirection();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storageConnectors`<sup>Required</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors"></a>

```java
public AppstreamStackStorageConnectorsList getStorageConnectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a>

---

##### `streamingExperienceSettings`<sup>Required</sup> <a name="streamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings"></a>

```java
public AppstreamStackStreamingExperienceSettingsOutputReference getStreamingExperienceSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags"></a>

```java
public AppstreamStackTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a>

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings"></a>

```java
public AppstreamStackUserSettingsList getUserSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a>

---

##### `accessEndpointsInput`<sup>Optional</sup> <a name="accessEndpointsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput"></a>

```java
public IResolvable|java.util.List<AppstreamStackAccessEndpoints> getAccessEndpointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>>

---

##### `agentAccessConfigInput`<sup>Optional</sup> <a name="agentAccessConfigInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput"></a>

```java
public IResolvable|AppstreamStackAgentAccessConfig getAgentAccessConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput"></a>

```java
public IResolvable|AppstreamStackApplicationSettings getApplicationSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `attributesToDeleteInput`<sup>Optional</sup> <a name="attributesToDeleteInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput"></a>

```java
public java.util.List<java.lang.String> getAttributesToDeleteInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentRedirectionInput`<sup>Optional</sup> <a name="contentRedirectionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput"></a>

```java
public IResolvable|AppstreamStackContentRedirection getContentRedirectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---

##### `deleteStorageConnectorsInput`<sup>Optional</sup> <a name="deleteStorageConnectorsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteStorageConnectorsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `embedHostDomainsInput`<sup>Optional</sup> <a name="embedHostDomainsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput"></a>

```java
public java.util.List<java.lang.String> getEmbedHostDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `feedbackUrlInput`<sup>Optional</sup> <a name="feedbackUrlInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput"></a>

```java
public java.lang.String getFeedbackUrlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `storageConnectorsInput`<sup>Optional</sup> <a name="storageConnectorsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput"></a>

```java
public IResolvable|java.util.List<AppstreamStackStorageConnectors> getStorageConnectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>>

---

##### `streamingExperienceSettingsInput`<sup>Optional</sup> <a name="streamingExperienceSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput"></a>

```java
public IResolvable|AppstreamStackStreamingExperienceSettings getStreamingExperienceSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppstreamStackTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>>

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput"></a>

```java
public IResolvable|java.util.List<AppstreamStackUserSettings> getUserSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>>

---

##### `attributesToDelete`<sup>Required</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete"></a>

```java
public java.util.List<java.lang.String> getAttributesToDelete();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteStorageConnectors`<sup>Required</sup> <a name="deleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors"></a>

```java
public java.lang.Boolean|IResolvable getDeleteStorageConnectors();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `embedHostDomains`<sup>Required</sup> <a name="embedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains"></a>

```java
public java.util.List<java.lang.String> getEmbedHostDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `feedbackUrl`<sup>Required</sup> <a name="feedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl"></a>

```java
public java.lang.String getFeedbackUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamStackAccessEndpoints <a name="AppstreamStackAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAccessEndpoints;

AppstreamStackAccessEndpoints.builder()
//  .endpointType(java.lang.String)
//  .vpceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | The type of interface endpoint. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId">vpceId</a></code> | <code>java.lang.String</code> | The identifier (ID) of the VPC in which the interface endpoint is used. |

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

The type of interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#endpoint_type AppstreamStack#endpoint_type}

---

##### `vpceId`<sup>Optional</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId"></a>

```java
public java.lang.String getVpceId();
```

- *Type:* java.lang.String

The identifier (ID) of the VPC in which the interface endpoint is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#vpce_id AppstreamStack#vpce_id}

---

### AppstreamStackAgentAccessConfig <a name="AppstreamStackAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAgentAccessConfig;

AppstreamStackAgentAccessConfig.builder()
//  .s3BucketArn(java.lang.String)
//  .screenImageFormat(java.lang.String)
//  .screenResolution(java.lang.String)
//  .screenshotsUploadEnabled(java.lang.Boolean|IResolvable)
//  .settings(IResolvable|java.util.List<AppstreamStackAgentAccessConfigSettings>)
//  .userControlMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat">screenImageFormat</a></code> | <code>java.lang.String</code> | The image format for agent screen captures. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution">screenResolution</a></code> | <code>java.lang.String</code> | The screen resolution for the agent streaming environment. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled">screenshotsUploadEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings">settings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>></code> | The list of agent access settings that define permissions for each agent action. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode">userControlMode</a></code> | <code>java.lang.String</code> | The user control mode for agent sessions. |

---

##### `s3BucketArn`<sup>Optional</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored.

Required when ScreenshotsUploadEnabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#s3_bucket_arn AppstreamStack#s3_bucket_arn}

---

##### `screenImageFormat`<sup>Optional</sup> <a name="screenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat"></a>

```java
public java.lang.String getScreenImageFormat();
```

- *Type:* java.lang.String

The image format for agent screen captures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#screen_image_format AppstreamStack#screen_image_format}

---

##### `screenResolution`<sup>Optional</sup> <a name="screenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution"></a>

```java
public java.lang.String getScreenResolution();
```

- *Type:* java.lang.String

The screen resolution for the agent streaming environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#screen_resolution AppstreamStack#screen_resolution}

---

##### `screenshotsUploadEnabled`<sup>Optional</sup> <a name="screenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled"></a>

```java
public java.lang.Boolean|IResolvable getScreenshotsUploadEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#screenshots_upload_enabled AppstreamStack#screenshots_upload_enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings"></a>

```java
public IResolvable|java.util.List<AppstreamStackAgentAccessConfigSettings> getSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>>

The list of agent access settings that define permissions for each agent action.

You must specify at least one setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#settings AppstreamStack#settings}

---

##### `userControlMode`<sup>Optional</sup> <a name="userControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode"></a>

```java
public java.lang.String getUserControlMode();
```

- *Type:* java.lang.String

The user control mode for agent sessions.

This setting determines how users can interact with agent sessions. Valid values are VIEW_ONLY, VIEW_STOP, and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#user_control_mode AppstreamStack#user_control_mode}

---

### AppstreamStackAgentAccessConfigSettings <a name="AppstreamStackAgentAccessConfigSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAgentAccessConfigSettings;

AppstreamStackAgentAccessConfigSettings.builder()
//  .agentAction(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction">agentAction</a></code> | <code>java.lang.String</code> | The agent action to configure. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission">permission</a></code> | <code>java.lang.String</code> | Whether the agent action is enabled or disabled. |

---

##### `agentAction`<sup>Optional</sup> <a name="agentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction"></a>

```java
public java.lang.String getAgentAction();
```

- *Type:* java.lang.String

The agent action to configure.

Valid values are COMPUTER_VISION, COMPUTER_INPUT, and FORWARD_MCP_TOOLS. COMPUTER_VISION allows agents to take screenshots of the desktop. COMPUTER_INPUT allows agents to click, type, and scroll on the desktop and requires COMPUTER_VISION to also be enabled. FORWARD_MCP_TOOLS allows agents to interact with applications and the desktop operating system through direct MCP calls rather than using computer use tools. Forwards MCP tools configured on the WorkSpaces application session to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#agent_action AppstreamStack#agent_action}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Whether the agent action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

### AppstreamStackApplicationSettings <a name="AppstreamStackApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackApplicationSettings;

AppstreamStackApplicationSettings.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settingsGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables or disables persistent application settings for users during their streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup">settingsGroup</a></code> | <code>java.lang.String</code> | The path prefix for the S3 bucket where users' persistent application settings are stored. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables or disables persistent application settings for users during their streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

##### `settingsGroup`<sup>Optional</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup"></a>

```java
public java.lang.String getSettingsGroup();
```

- *Type:* java.lang.String

The path prefix for the S3 bucket where users' persistent application settings are stored.

You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}

---

### AppstreamStackConfig <a name="AppstreamStackConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackConfig;

AppstreamStackConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessEndpoints(IResolvable|java.util.List<AppstreamStackAccessEndpoints>)
//  .agentAccessConfig(AppstreamStackAgentAccessConfig)
//  .applicationSettings(AppstreamStackApplicationSettings)
//  .attributesToDelete(java.util.List<java.lang.String>)
//  .contentRedirection(AppstreamStackContentRedirection)
//  .deleteStorageConnectors(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .embedHostDomains(java.util.List<java.lang.String>)
//  .feedbackUrl(java.lang.String)
//  .name(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .storageConnectors(IResolvable|java.util.List<AppstreamStackStorageConnectors>)
//  .streamingExperienceSettings(AppstreamStackStreamingExperienceSettings)
//  .tags(IResolvable|java.util.List<AppstreamStackTags>)
//  .userSettings(IResolvable|java.util.List<AppstreamStackUserSettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints">accessEndpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>></code> | The list of virtual private cloud (VPC) interface endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig">agentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | The configuration for agent access on the stack. If specified, agent access is enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | The persistent application settings for users of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete">attributesToDelete</a></code> | <code>java.util.List<java.lang.String></code> | The stack attributes to delete. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection">contentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | The content redirection settings for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors">deleteStorageConnectors</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The stack name to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains">embedHostDomains</a></code> | <code>java.util.List<java.lang.String></code> | The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl">feedbackUrl</a></code> | <code>java.lang.String</code> | The URL that users are redirected to after they click the Send Feedback link. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | The URL that users are redirected to after their streaming session ends. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors">storageConnectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>></code> | The storage connectors to enable. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings">streamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | The streaming protocol that you want your stack to prefer. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>></code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings">userSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>></code> | The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints"></a>

```java
public IResolvable|java.util.List<AppstreamStackAccessEndpoints> getAccessEndpoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>>

The list of virtual private cloud (VPC) interface endpoint objects.

Users of the stack can connect to AppStream 2.0 only through the specified endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `agentAccessConfig`<sup>Optional</sup> <a name="agentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig"></a>

```java
public AppstreamStackAgentAccessConfig getAgentAccessConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

The configuration for agent access on the stack. If specified, agent access is enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#agent_access_config AppstreamStack#agent_access_config}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings"></a>

```java
public AppstreamStackApplicationSettings getApplicationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

The persistent application settings for users of the stack.

When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `attributesToDelete`<sup>Optional</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete"></a>

```java
public java.util.List<java.lang.String> getAttributesToDelete();
```

- *Type:* java.util.List<java.lang.String>

The stack attributes to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#attributes_to_delete AppstreamStack#attributes_to_delete}

---

##### `contentRedirection`<sup>Optional</sup> <a name="contentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection"></a>

```java
public AppstreamStackContentRedirection getContentRedirection();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

The content redirection settings for the stack.

These settings control URL redirection between the streaming session and the local device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#content_redirection AppstreamStack#content_redirection}

---

##### `deleteStorageConnectors`<sup>Optional</sup> <a name="deleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors"></a>

```java
public java.lang.Boolean|IResolvable getDeleteStorageConnectors();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#delete_storage_connectors AppstreamStack#delete_storage_connectors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#description AppstreamStack#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The stack name to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}

---

##### `embedHostDomains`<sup>Optional</sup> <a name="embedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains"></a>

```java
public java.util.List<java.lang.String> getEmbedHostDomains();
```

- *Type:* java.util.List<java.lang.String>

The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}

---

##### `feedbackUrl`<sup>Optional</sup> <a name="feedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl"></a>

```java
public java.lang.String getFeedbackUrl();
```

- *Type:* java.lang.String

The URL that users are redirected to after they click the Send Feedback link.

If no URL is specified, no Send Feedback link is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#name AppstreamStack#name}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

The URL that users are redirected to after their streaming session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}

---

##### `storageConnectors`<sup>Optional</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors"></a>

```java
public IResolvable|java.util.List<AppstreamStackStorageConnectors> getStorageConnectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>>

The storage connectors to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `streamingExperienceSettings`<sup>Optional</sup> <a name="streamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings"></a>

```java
public AppstreamStackStreamingExperienceSettings getStreamingExperienceSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

The streaming protocol that you want your stack to prefer.

This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppstreamStackTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>>

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#tags AppstreamStack#tags}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings"></a>

```java
public IResolvable|java.util.List<AppstreamStackUserSettings> getUserSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>>

The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}

---

### AppstreamStackContentRedirection <a name="AppstreamStackContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackContentRedirection;

AppstreamStackContentRedirection.builder()
//  .hostToClient(AppstreamStackContentRedirectionHostToClient)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient">hostToClient</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | The URL redirection configuration from the streaming session host to the client. |

---

##### `hostToClient`<sup>Optional</sup> <a name="hostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient"></a>

```java
public AppstreamStackContentRedirectionHostToClient getHostToClient();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

The URL redirection configuration from the streaming session host to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#host_to_client AppstreamStack#host_to_client}

---

### AppstreamStackContentRedirectionHostToClient <a name="AppstreamStackContentRedirectionHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackContentRedirectionHostToClient;

AppstreamStackContentRedirectionHostToClient.builder()
//  .allowedUrls(java.util.List<java.lang.String>)
//  .deniedUrls(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls">allowedUrls</a></code> | <code>java.util.List<java.lang.String></code> | The URLs that are allowed for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls">deniedUrls</a></code> | <code>java.util.List<java.lang.String></code> | The URLs that are denied for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether URL redirection is enabled or disabled. |

---

##### `allowedUrls`<sup>Optional</sup> <a name="allowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedUrls();
```

- *Type:* java.util.List<java.lang.String>

The URLs that are allowed for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#allowed_urls AppstreamStack#allowed_urls}

---

##### `deniedUrls`<sup>Optional</sup> <a name="deniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls"></a>

```java
public java.util.List<java.lang.String> getDeniedUrls();
```

- *Type:* java.util.List<java.lang.String>

The URLs that are denied for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#denied_urls AppstreamStack#denied_urls}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether URL redirection is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

### AppstreamStackStorageConnectors <a name="AppstreamStackStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackStorageConnectors;

AppstreamStackStorageConnectors.builder()
//  .connectorType(java.lang.String)
//  .domains(java.util.List<java.lang.String>)
//  .resourceIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | The type of storage connector. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | The names of the domains for the account. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | The ARN of the storage connector. |

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

The type of storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#connector_type AppstreamStack#connector_type}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

The names of the domains for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#domains AppstreamStack#domains}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

The ARN of the storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#resource_identifier AppstreamStack#resource_identifier}

---

### AppstreamStackStreamingExperienceSettings <a name="AppstreamStackStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackStreamingExperienceSettings;

AppstreamStackStreamingExperienceSettings.builder()
//  .preferredProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol">preferredProtocol</a></code> | <code>java.lang.String</code> | The preferred protocol that you want to use while streaming your application. |

---

##### `preferredProtocol`<sup>Optional</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol"></a>

```java
public java.lang.String getPreferredProtocol();
```

- *Type:* java.lang.String

The preferred protocol that you want to use while streaming your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}

---

### AppstreamStackTags <a name="AppstreamStackTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackTags;

AppstreamStackTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#key AppstreamStack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#value AppstreamStack#value}

---

### AppstreamStackUserSettings <a name="AppstreamStackUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackUserSettings;

AppstreamStackUserSettings.builder()
//  .action(java.lang.String)
//  .maximumLength(java.lang.Number)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action">action</a></code> | <code>java.lang.String</code> | The action that is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength">maximumLength</a></code> | <code>java.lang.Number</code> | Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission">permission</a></code> | <code>java.lang.String</code> | Indicates whether the action is enabled or disabled. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action that is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#action AppstreamStack#action}

---

##### `maximumLength`<sup>Optional</sup> <a name="maximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength"></a>

```java
public java.lang.Number getMaximumLength();
```

- *Type:* java.lang.Number

Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.

This can be specified only for the CLIPBOARD_COPY_FROM_LOCAL_DEVICE and CLIPBOARD_COPY_TO_LOCAL_DEVICE actions. This defaults to 20,971,520 (20 MB) when unspecified and the permission is ENABLED. This can't be specified when the permission is DISABLED. The value can be between 1 and 20,971,520 (20 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#maximum_length AppstreamStack#maximum_length}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Indicates whether the action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamStackAccessEndpointsList <a name="AppstreamStackAccessEndpointsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAccessEndpointsList;

new AppstreamStackAccessEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get"></a>

```java
public AppstreamStackAccessEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppstreamStackAccessEndpoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>>

---


### AppstreamStackAccessEndpointsOutputReference <a name="AppstreamStackAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAccessEndpointsOutputReference;

new AppstreamStackAccessEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId">resetVpceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType"></a>

```java
public void resetEndpointType()
```

##### `resetVpceId` <a name="resetVpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId"></a>

```java
public void resetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput">vpceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId">vpceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `vpceIdInput`<sup>Optional</sup> <a name="vpceIdInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput"></a>

```java
public java.lang.String getVpceIdInput();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `vpceId`<sup>Required</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```java
public java.lang.String getVpceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackAccessEndpoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>

---


### AppstreamStackAgentAccessConfigOutputReference <a name="AppstreamStackAgentAccessConfigOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAgentAccessConfigOutputReference;

new AppstreamStackAgentAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn">resetS3BucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat">resetScreenImageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution">resetScreenResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled">resetScreenshotsUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode">resetUserControlMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings"></a>

```java
public void putSettings(IResolvable|java.util.List<AppstreamStackAgentAccessConfigSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>>

---

##### `resetS3BucketArn` <a name="resetS3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn"></a>

```java
public void resetS3BucketArn()
```

##### `resetScreenImageFormat` <a name="resetScreenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat"></a>

```java
public void resetScreenImageFormat()
```

##### `resetScreenResolution` <a name="resetScreenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution"></a>

```java
public void resetScreenResolution()
```

##### `resetScreenshotsUploadEnabled` <a name="resetScreenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled"></a>

```java
public void resetScreenshotsUploadEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetUserControlMode` <a name="resetUserControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode"></a>

```java
public void resetUserControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput">screenImageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput">screenResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput">screenshotsUploadEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput">userControlModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat">screenImageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution">screenResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled">screenshotsUploadEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode">userControlMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings"></a>

```java
public AppstreamStackAgentAccessConfigSettingsList getSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a>

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput"></a>

```java
public java.lang.String getS3BucketArnInput();
```

- *Type:* java.lang.String

---

##### `screenImageFormatInput`<sup>Optional</sup> <a name="screenImageFormatInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput"></a>

```java
public java.lang.String getScreenImageFormatInput();
```

- *Type:* java.lang.String

---

##### `screenResolutionInput`<sup>Optional</sup> <a name="screenResolutionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput"></a>

```java
public java.lang.String getScreenResolutionInput();
```

- *Type:* java.lang.String

---

##### `screenshotsUploadEnabledInput`<sup>Optional</sup> <a name="screenshotsUploadEnabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getScreenshotsUploadEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput"></a>

```java
public IResolvable|java.util.List<AppstreamStackAgentAccessConfigSettings> getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>>

---

##### `userControlModeInput`<sup>Optional</sup> <a name="userControlModeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput"></a>

```java
public java.lang.String getUserControlModeInput();
```

- *Type:* java.lang.String

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

---

##### `screenImageFormat`<sup>Required</sup> <a name="screenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat"></a>

```java
public java.lang.String getScreenImageFormat();
```

- *Type:* java.lang.String

---

##### `screenResolution`<sup>Required</sup> <a name="screenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution"></a>

```java
public java.lang.String getScreenResolution();
```

- *Type:* java.lang.String

---

##### `screenshotsUploadEnabled`<sup>Required</sup> <a name="screenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled"></a>

```java
public java.lang.Boolean|IResolvable getScreenshotsUploadEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userControlMode`<sup>Required</sup> <a name="userControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode"></a>

```java
public java.lang.String getUserControlMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackAgentAccessConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---


### AppstreamStackAgentAccessConfigSettingsList <a name="AppstreamStackAgentAccessConfigSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAgentAccessConfigSettingsList;

new AppstreamStackAgentAccessConfigSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get"></a>

```java
public AppstreamStackAgentAccessConfigSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppstreamStackAgentAccessConfigSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>>

---


### AppstreamStackAgentAccessConfigSettingsOutputReference <a name="AppstreamStackAgentAccessConfigSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackAgentAccessConfigSettingsOutputReference;

new AppstreamStackAgentAccessConfigSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction">resetAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentAction` <a name="resetAgentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction"></a>

```java
public void resetAgentAction()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput">agentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction">agentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentActionInput`<sup>Optional</sup> <a name="agentActionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput"></a>

```java
public java.lang.String getAgentActionInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `agentAction`<sup>Required</sup> <a name="agentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction"></a>

```java
public java.lang.String getAgentAction();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackAgentAccessConfigSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>

---


### AppstreamStackApplicationSettingsOutputReference <a name="AppstreamStackApplicationSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackApplicationSettingsOutputReference;

new AppstreamStackApplicationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup">resetSettingsGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettingsGroup` <a name="resetSettingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup"></a>

```java
public void resetSettingsGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput">settingsGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup">settingsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsGroupInput`<sup>Optional</sup> <a name="settingsGroupInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```java
public java.lang.String getSettingsGroupInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsGroup`<sup>Required</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```java
public java.lang.String getSettingsGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackApplicationSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---


### AppstreamStackContentRedirectionHostToClientOutputReference <a name="AppstreamStackContentRedirectionHostToClientOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackContentRedirectionHostToClientOutputReference;

new AppstreamStackContentRedirectionHostToClientOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls">resetAllowedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls">resetDeniedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedUrls` <a name="resetAllowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls"></a>

```java
public void resetAllowedUrls()
```

##### `resetDeniedUrls` <a name="resetDeniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls"></a>

```java
public void resetDeniedUrls()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput">allowedUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput">deniedUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls">allowedUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls">deniedUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedUrlsInput`<sup>Optional</sup> <a name="allowedUrlsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedUrlsInput`<sup>Optional</sup> <a name="deniedUrlsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput"></a>

```java
public java.util.List<java.lang.String> getDeniedUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedUrls`<sup>Required</sup> <a name="allowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedUrls`<sup>Required</sup> <a name="deniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls"></a>

```java
public java.util.List<java.lang.String> getDeniedUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackContentRedirectionHostToClient getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---


### AppstreamStackContentRedirectionOutputReference <a name="AppstreamStackContentRedirectionOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackContentRedirectionOutputReference;

new AppstreamStackContentRedirectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient">putHostToClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient">resetHostToClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostToClient` <a name="putHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient"></a>

```java
public void putHostToClient(AppstreamStackContentRedirectionHostToClient value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---

##### `resetHostToClient` <a name="resetHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient"></a>

```java
public void resetHostToClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient">hostToClient</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput">hostToClientInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostToClient`<sup>Required</sup> <a name="hostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient"></a>

```java
public AppstreamStackContentRedirectionHostToClientOutputReference getHostToClient();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a>

---

##### `hostToClientInput`<sup>Optional</sup> <a name="hostToClientInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput"></a>

```java
public IResolvable|AppstreamStackContentRedirectionHostToClient getHostToClientInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackContentRedirection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---


### AppstreamStackStorageConnectorsList <a name="AppstreamStackStorageConnectorsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackStorageConnectorsList;

new AppstreamStackStorageConnectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get"></a>

```java
public AppstreamStackStorageConnectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppstreamStackStorageConnectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>>

---


### AppstreamStackStorageConnectorsOutputReference <a name="AppstreamStackStorageConnectorsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackStorageConnectorsOutputReference;

new AppstreamStackStorageConnectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType">resetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorType` <a name="resetConnectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType"></a>

```java
public void resetConnectorType()
```

##### `resetDomains` <a name="resetDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier"></a>

```java
public void resetResourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput">connectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```java
public java.lang.String getConnectorTypeInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput"></a>

```java
public java.lang.String getResourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackStorageConnectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>

---


### AppstreamStackStreamingExperienceSettingsOutputReference <a name="AppstreamStackStreamingExperienceSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackStreamingExperienceSettingsOutputReference;

new AppstreamStackStreamingExperienceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol">resetPreferredProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredProtocol` <a name="resetPreferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol"></a>

```java
public void resetPreferredProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput">preferredProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol">preferredProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferredProtocolInput`<sup>Optional</sup> <a name="preferredProtocolInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput"></a>

```java
public java.lang.String getPreferredProtocolInput();
```

- *Type:* java.lang.String

---

##### `preferredProtocol`<sup>Required</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol"></a>

```java
public java.lang.String getPreferredProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackStreamingExperienceSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---


### AppstreamStackTagsList <a name="AppstreamStackTagsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackTagsList;

new AppstreamStackTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get"></a>

```java
public AppstreamStackTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppstreamStackTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>>

---


### AppstreamStackTagsOutputReference <a name="AppstreamStackTagsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackTagsOutputReference;

new AppstreamStackTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>

---


### AppstreamStackUserSettingsList <a name="AppstreamStackUserSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackUserSettingsList;

new AppstreamStackUserSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get"></a>

```java
public AppstreamStackUserSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppstreamStackUserSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>>

---


### AppstreamStackUserSettingsOutputReference <a name="AppstreamStackUserSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_stack.AppstreamStackUserSettingsOutputReference;

new AppstreamStackUserSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength">resetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetMaximumLength` <a name="resetMaximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength"></a>

```java
public void resetMaximumLength()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput">maximumLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength">maximumLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `maximumLengthInput`<sup>Optional</sup> <a name="maximumLengthInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput"></a>

```java
public java.lang.Number getMaximumLengthInput();
```

- *Type:* java.lang.Number

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength"></a>

```java
public java.lang.Number getMaximumLength();
```

- *Type:* java.lang.Number

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamStackUserSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>

---



