# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktn/provider-awscc.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectory;

WorkspacesDirectory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .activeDirectoryConfig(WorkspacesDirectoryActiveDirectoryConfig)
//  .certificateBasedAuthProperties(WorkspacesDirectoryCertificateBasedAuthProperties)
//  .enableSelfService(java.lang.Boolean|IResolvable)
//  .endpointEncryptionMode(java.lang.String)
//  .idcInstanceArn(java.lang.String)
//  .ipGroupIds(java.util.List<java.lang.String>)
//  .microsoftEntraConfig(WorkspacesDirectoryMicrosoftEntraConfig)
//  .samlProperties(WorkspacesDirectorySamlProperties)
//  .selfservicePermissions(WorkspacesDirectorySelfservicePermissions)
//  .streamingProperties(WorkspacesDirectoryStreamingProperties)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<WorkspacesDirectoryTags>)
//  .tenancy(java.lang.String)
//  .userIdentityType(java.lang.String)
//  .workspaceAccessProperties(WorkspacesDirectoryWorkspaceAccessProperties)
//  .workspaceCreationProperties(WorkspacesDirectoryWorkspaceCreationProperties)
//  .workspaceDirectoryDescription(java.lang.String)
//  .workspaceDirectoryName(java.lang.String)
//  .workspaceType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | Information about the Active Directory config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.enableSelfService">enableSelfService</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether self-service capabilities are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.endpointEncryptionMode">endpointEncryptionMode</a></code> | <code>java.lang.String</code> | Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the identity center instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.ipGroupIds">ipGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers of the IP access control groups associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.microsoftEntraConfig">microsoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | Specifies the configurations of the Microsoft Entra. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.samlProperties">samlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.selfservicePermissions">selfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | Describes the self-service permissions for a directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.streamingProperties">streamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | Describes the streaming properties. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers of the subnets for your virtual private cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>></code> | The tags associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Indicates whether your WorkSpace directory is dedicated or shared. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.userIdentityType">userIdentityType</a></code> | <code>java.lang.String</code> | The type of identity management the user is using. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | The device types and operating systems that can be used to access a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | The default values that are used to create WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryDescription">workspaceDirectoryDescription</a></code> | <code>java.lang.String</code> | Description of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryName">workspaceDirectoryName</a></code> | <code>java.lang.String</code> | The name of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceType">workspaceType</a></code> | <code>java.lang.String</code> | Indicates whether the directory's WorkSpace type is personal or pools. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `activeDirectoryConfig`<sup>Optional</sup> <a name="activeDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.activeDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

Information about the Active Directory config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `certificateBasedAuthProperties`<sup>Optional</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.certificateBasedAuthProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `enableSelfService`<sup>Optional</sup> <a name="enableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.enableSelfService"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether self-service capabilities are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_self_service WorkspacesDirectory#enable_self_service}

---

##### `endpointEncryptionMode`<sup>Optional</sup> <a name="endpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.endpointEncryptionMode"></a>

- *Type:* java.lang.String

Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#endpoint_encryption_mode WorkspacesDirectory#endpoint_encryption_mode}

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.idcInstanceArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the identity center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#idc_instance_arn WorkspacesDirectory#idc_instance_arn}

---

##### `ipGroupIds`<sup>Optional</sup> <a name="ipGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.ipGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The identifiers of the IP access control groups associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}

---

##### `microsoftEntraConfig`<sup>Optional</sup> <a name="microsoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.microsoftEntraConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

Specifies the configurations of the Microsoft Entra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#microsoft_entra_config WorkspacesDirectory#microsoft_entra_config}

---

##### `samlProperties`<sup>Optional</sup> <a name="samlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.samlProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `selfservicePermissions`<sup>Optional</sup> <a name="selfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.selfservicePermissions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

Describes the self-service permissions for a directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#selfservice_permissions WorkspacesDirectory#selfservice_permissions}

---

##### `streamingProperties`<sup>Optional</sup> <a name="streamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.streamingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

Describes the streaming properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_properties WorkspacesDirectory#streaming_properties}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

The identifiers of the subnets for your virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>>

The tags associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tenancy"></a>

- *Type:* java.lang.String

Indicates whether your WorkSpace directory is dedicated or shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenancy WorkspacesDirectory#tenancy}

---

##### `userIdentityType`<sup>Optional</sup> <a name="userIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.userIdentityType"></a>

- *Type:* java.lang.String

The type of identity management the user is using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}

---

##### `workspaceAccessProperties`<sup>Optional</sup> <a name="workspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceAccessProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

The device types and operating systems that can be used to access a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspaceCreationProperties`<sup>Optional</sup> <a name="workspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceCreationProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

The default values that are used to create WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `workspaceDirectoryDescription`<sup>Optional</sup> <a name="workspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryDescription"></a>

- *Type:* java.lang.String

Description of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}

---

##### `workspaceDirectoryName`<sup>Optional</sup> <a name="workspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryName"></a>

- *Type:* java.lang.String

The name of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}

---

##### `workspaceType`<sup>Optional</sup> <a name="workspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceType"></a>

- *Type:* java.lang.String

Indicates whether the directory's WorkSpace type is personal or pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig">putActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties">putCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig">putMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties">putSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions">putSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties">putStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">putWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">putWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig">resetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties">resetCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService">resetEnableSelfService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode">resetEndpointEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn">resetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">resetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig">resetMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties">resetSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions">resetSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties">resetStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType">resetUserIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">resetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">resetWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription">resetWorkspaceDirectoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName">resetWorkspaceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType">resetWorkspaceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActiveDirectoryConfig` <a name="putActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig"></a>

```java
public void putActiveDirectoryConfig(WorkspacesDirectoryActiveDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `putCertificateBasedAuthProperties` <a name="putCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties"></a>

```java
public void putCertificateBasedAuthProperties(WorkspacesDirectoryCertificateBasedAuthProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `putMicrosoftEntraConfig` <a name="putMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig"></a>

```java
public void putMicrosoftEntraConfig(WorkspacesDirectoryMicrosoftEntraConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `putSamlProperties` <a name="putSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties"></a>

```java
public void putSamlProperties(WorkspacesDirectorySamlProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `putSelfservicePermissions` <a name="putSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions"></a>

```java
public void putSelfservicePermissions(WorkspacesDirectorySelfservicePermissions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `putStreamingProperties` <a name="putStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties"></a>

```java
public void putStreamingProperties(WorkspacesDirectoryStreamingProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspacesDirectoryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>>

---

##### `putWorkspaceAccessProperties` <a name="putWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```java
public void putWorkspaceAccessProperties(WorkspacesDirectoryWorkspaceAccessProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `putWorkspaceCreationProperties` <a name="putWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```java
public void putWorkspaceCreationProperties(WorkspacesDirectoryWorkspaceCreationProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `resetActiveDirectoryConfig` <a name="resetActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig"></a>

```java
public void resetActiveDirectoryConfig()
```

##### `resetCertificateBasedAuthProperties` <a name="resetCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties"></a>

```java
public void resetCertificateBasedAuthProperties()
```

##### `resetEnableSelfService` <a name="resetEnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService"></a>

```java
public void resetEnableSelfService()
```

##### `resetEndpointEncryptionMode` <a name="resetEndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode"></a>

```java
public void resetEndpointEncryptionMode()
```

##### `resetIdcInstanceArn` <a name="resetIdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn"></a>

```java
public void resetIdcInstanceArn()
```

##### `resetIpGroupIds` <a name="resetIpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```java
public void resetIpGroupIds()
```

##### `resetMicrosoftEntraConfig` <a name="resetMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig"></a>

```java
public void resetMicrosoftEntraConfig()
```

##### `resetSamlProperties` <a name="resetSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties"></a>

```java
public void resetSamlProperties()
```

##### `resetSelfservicePermissions` <a name="resetSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions"></a>

```java
public void resetSelfservicePermissions()
```

##### `resetStreamingProperties` <a name="resetStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties"></a>

```java
public void resetStreamingProperties()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```java
public void resetTags()
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy"></a>

```java
public void resetTenancy()
```

##### `resetUserIdentityType` <a name="resetUserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType"></a>

```java
public void resetUserIdentityType()
```

##### `resetWorkspaceAccessProperties` <a name="resetWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```java
public void resetWorkspaceAccessProperties()
```

##### `resetWorkspaceCreationProperties` <a name="resetWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```java
public void resetWorkspaceCreationProperties()
```

##### `resetWorkspaceDirectoryDescription` <a name="resetWorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription"></a>

```java
public void resetWorkspaceDirectoryDescription()
```

##### `resetWorkspaceDirectoryName` <a name="resetWorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName"></a>

```java
public void resetWorkspaceDirectoryName()
```

##### `resetWorkspaceType` <a name="resetWorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType"></a>

```java
public void resetWorkspaceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectory;

WorkspacesDirectory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectory;

WorkspacesDirectory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectory;

WorkspacesDirectory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectory;

WorkspacesDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspacesDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspacesDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName">customerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType">directoryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses">dnsIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">iamRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig">idcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig">microsoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode">registrationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties">samlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions">selfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties">streamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput">activeDirectoryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput">certificateBasedAuthPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput">enableSelfServiceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput">endpointEncryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">ipGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput">microsoftEntraConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput">samlPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput">selfservicePermissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput">streamingPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput">tenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput">userIdentityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">workspaceAccessPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">workspaceCreationPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput">workspaceDirectoryDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput">workspaceDirectoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput">workspaceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService">enableSelfService</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode">endpointEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">ipGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType">userIdentityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription">workspaceDirectoryDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName">workspaceDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType">workspaceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `activeDirectoryConfig`<sup>Required</sup> <a name="activeDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig"></a>

```java
public WorkspacesDirectoryActiveDirectoryConfigOutputReference getActiveDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateBasedAuthProperties`<sup>Required</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```java
public WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference getCertificateBasedAuthProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `customerUserName`<sup>Required</sup> <a name="customerUserName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```java
public java.lang.String getCustomerUserName();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```java
public java.lang.String getDirectoryType();
```

- *Type:* java.lang.String

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsIpv6Addresses`<sup>Required</sup> <a name="dnsIpv6Addresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```java
public java.lang.String getIamRoleId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcConfig`<sup>Required</sup> <a name="idcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig"></a>

```java
public WorkspacesDirectoryIdcConfigOutputReference getIdcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `microsoftEntraConfig`<sup>Required</sup> <a name="microsoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig"></a>

```java
public WorkspacesDirectoryMicrosoftEntraConfigOutputReference getMicrosoftEntraConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `registrationCode`<sup>Required</sup> <a name="registrationCode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```java
public java.lang.String getRegistrationCode();
```

- *Type:* java.lang.String

---

##### `samlProperties`<sup>Required</sup> <a name="samlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties"></a>

```java
public WorkspacesDirectorySamlPropertiesOutputReference getSamlProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `selfservicePermissions`<sup>Required</sup> <a name="selfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions"></a>

```java
public WorkspacesDirectorySelfservicePermissionsOutputReference getSelfservicePermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streamingProperties`<sup>Required</sup> <a name="streamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties"></a>

```java
public WorkspacesDirectoryStreamingPropertiesOutputReference getStreamingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```java
public WorkspacesDirectoryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a>

---

##### `workspaceAccessProperties`<sup>Required</sup> <a name="workspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```java
public WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference getWorkspaceAccessProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspaceCreationProperties`<sup>Required</sup> <a name="workspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```java
public WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference getWorkspaceCreationProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```java
public java.lang.String getWorkspaceSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `activeDirectoryConfigInput`<sup>Optional</sup> <a name="activeDirectoryConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput"></a>

```java
public IResolvable|WorkspacesDirectoryActiveDirectoryConfig getActiveDirectoryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `certificateBasedAuthPropertiesInput`<sup>Optional</sup> <a name="certificateBasedAuthPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput"></a>

```java
public IResolvable|WorkspacesDirectoryCertificateBasedAuthProperties getCertificateBasedAuthPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `enableSelfServiceInput`<sup>Optional</sup> <a name="enableSelfServiceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSelfServiceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointEncryptionModeInput`<sup>Optional</sup> <a name="endpointEncryptionModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput"></a>

```java
public java.lang.String getEndpointEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput"></a>

```java
public java.lang.String getIdcInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `ipGroupIdsInput`<sup>Optional</sup> <a name="ipGroupIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getIpGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `microsoftEntraConfigInput`<sup>Optional</sup> <a name="microsoftEntraConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput"></a>

```java
public IResolvable|WorkspacesDirectoryMicrosoftEntraConfig getMicrosoftEntraConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `samlPropertiesInput`<sup>Optional</sup> <a name="samlPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput"></a>

```java
public IResolvable|WorkspacesDirectorySamlProperties getSamlPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `selfservicePermissionsInput`<sup>Optional</sup> <a name="selfservicePermissionsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput"></a>

```java
public IResolvable|WorkspacesDirectorySelfservicePermissions getSelfservicePermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `streamingPropertiesInput`<sup>Optional</sup> <a name="streamingPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput"></a>

```java
public IResolvable|WorkspacesDirectoryStreamingProperties getStreamingPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>>

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput"></a>

```java
public java.lang.String getTenancyInput();
```

- *Type:* java.lang.String

---

##### `userIdentityTypeInput`<sup>Optional</sup> <a name="userIdentityTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput"></a>

```java
public java.lang.String getUserIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `workspaceAccessPropertiesInput`<sup>Optional</sup> <a name="workspaceAccessPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```java
public IResolvable|WorkspacesDirectoryWorkspaceAccessProperties getWorkspaceAccessPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `workspaceCreationPropertiesInput`<sup>Optional</sup> <a name="workspaceCreationPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```java
public IResolvable|WorkspacesDirectoryWorkspaceCreationProperties getWorkspaceCreationPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `workspaceDirectoryDescriptionInput`<sup>Optional</sup> <a name="workspaceDirectoryDescriptionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput"></a>

```java
public java.lang.String getWorkspaceDirectoryDescriptionInput();
```

- *Type:* java.lang.String

---

##### `workspaceDirectoryNameInput`<sup>Optional</sup> <a name="workspaceDirectoryNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput"></a>

```java
public java.lang.String getWorkspaceDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `workspaceTypeInput`<sup>Optional</sup> <a name="workspaceTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput"></a>

```java
public java.lang.String getWorkspaceTypeInput();
```

- *Type:* java.lang.String

---

##### `enableSelfService`<sup>Required</sup> <a name="enableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService"></a>

```java
public java.lang.Boolean|IResolvable getEnableSelfService();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointEncryptionMode`<sup>Required</sup> <a name="endpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode"></a>

```java
public java.lang.String getEndpointEncryptionMode();
```

- *Type:* java.lang.String

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `ipGroupIds`<sup>Required</sup> <a name="ipGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```java
public java.util.List<java.lang.String> getIpGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `userIdentityType`<sup>Required</sup> <a name="userIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType"></a>

```java
public java.lang.String getUserIdentityType();
```

- *Type:* java.lang.String

---

##### `workspaceDirectoryDescription`<sup>Required</sup> <a name="workspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```java
public java.lang.String getWorkspaceDirectoryDescription();
```

- *Type:* java.lang.String

---

##### `workspaceDirectoryName`<sup>Required</sup> <a name="workspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName"></a>

```java
public java.lang.String getWorkspaceDirectoryName();
```

- *Type:* java.lang.String

---

##### `workspaceType`<sup>Required</sup> <a name="workspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType"></a>

```java
public java.lang.String getWorkspaceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryActiveDirectoryConfig <a name="WorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryActiveDirectoryConfig;

WorkspacesDirectoryActiveDirectoryConfig.builder()
//  .domainName(java.lang.String)
//  .serviceAccountSecretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn">serviceAccountSecretArn</a></code> | <code>java.lang.String</code> | Indicates the secret ARN on the service account. |

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}

---

##### `serviceAccountSecretArn`<sup>Optional</sup> <a name="serviceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn"></a>

```java
public java.lang.String getServiceAccountSecretArn();
```

- *Type:* java.lang.String

Indicates the secret ARN on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}

---

### WorkspacesDirectoryCertificateBasedAuthProperties <a name="WorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryCertificateBasedAuthProperties;

WorkspacesDirectoryCertificateBasedAuthProperties.builder()
//  .certificateAuthorityArn(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status">status</a></code> | <code>java.lang.String</code> | The status of the certificate-based authentication properties. |

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```java
public java.lang.String getCertificateAuthorityArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the certificate-based authentication properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryConfig;

WorkspacesDirectoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .activeDirectoryConfig(WorkspacesDirectoryActiveDirectoryConfig)
//  .certificateBasedAuthProperties(WorkspacesDirectoryCertificateBasedAuthProperties)
//  .enableSelfService(java.lang.Boolean|IResolvable)
//  .endpointEncryptionMode(java.lang.String)
//  .idcInstanceArn(java.lang.String)
//  .ipGroupIds(java.util.List<java.lang.String>)
//  .microsoftEntraConfig(WorkspacesDirectoryMicrosoftEntraConfig)
//  .samlProperties(WorkspacesDirectorySamlProperties)
//  .selfservicePermissions(WorkspacesDirectorySelfservicePermissions)
//  .streamingProperties(WorkspacesDirectoryStreamingProperties)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<WorkspacesDirectoryTags>)
//  .tenancy(java.lang.String)
//  .userIdentityType(java.lang.String)
//  .workspaceAccessProperties(WorkspacesDirectoryWorkspaceAccessProperties)
//  .workspaceCreationProperties(WorkspacesDirectoryWorkspaceCreationProperties)
//  .workspaceDirectoryDescription(java.lang.String)
//  .workspaceDirectoryName(java.lang.String)
//  .workspaceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | Information about the Active Directory config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService">enableSelfService</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether self-service capabilities are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode">endpointEncryptionMode</a></code> | <code>java.lang.String</code> | Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the identity center instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">ipGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers of the IP access control groups associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig">microsoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | Specifies the configurations of the Microsoft Entra. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties">samlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions">selfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | Describes the self-service permissions for a directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties">streamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | Describes the streaming properties. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers of the subnets for your virtual private cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>></code> | The tags associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Indicates whether your WorkSpace directory is dedicated or shared. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType">userIdentityType</a></code> | <code>java.lang.String</code> | The type of identity management the user is using. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | The device types and operating systems that can be used to access a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | The default values that are used to create WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription">workspaceDirectoryDescription</a></code> | <code>java.lang.String</code> | Description of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName">workspaceDirectoryName</a></code> | <code>java.lang.String</code> | The name of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType">workspaceType</a></code> | <code>java.lang.String</code> | Indicates whether the directory's WorkSpace type is personal or pools. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `activeDirectoryConfig`<sup>Optional</sup> <a name="activeDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig"></a>

```java
public WorkspacesDirectoryActiveDirectoryConfig getActiveDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

Information about the Active Directory config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `certificateBasedAuthProperties`<sup>Optional</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties"></a>

```java
public WorkspacesDirectoryCertificateBasedAuthProperties getCertificateBasedAuthProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `enableSelfService`<sup>Optional</sup> <a name="enableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService"></a>

```java
public java.lang.Boolean|IResolvable getEnableSelfService();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether self-service capabilities are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_self_service WorkspacesDirectory#enable_self_service}

---

##### `endpointEncryptionMode`<sup>Optional</sup> <a name="endpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode"></a>

```java
public java.lang.String getEndpointEncryptionMode();
```

- *Type:* java.lang.String

Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#endpoint_encryption_mode WorkspacesDirectory#endpoint_encryption_mode}

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the identity center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#idc_instance_arn WorkspacesDirectory#idc_instance_arn}

---

##### `ipGroupIds`<sup>Optional</sup> <a name="ipGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```java
public java.util.List<java.lang.String> getIpGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The identifiers of the IP access control groups associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}

---

##### `microsoftEntraConfig`<sup>Optional</sup> <a name="microsoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig"></a>

```java
public WorkspacesDirectoryMicrosoftEntraConfig getMicrosoftEntraConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

Specifies the configurations of the Microsoft Entra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#microsoft_entra_config WorkspacesDirectory#microsoft_entra_config}

---

##### `samlProperties`<sup>Optional</sup> <a name="samlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties"></a>

```java
public WorkspacesDirectorySamlProperties getSamlProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `selfservicePermissions`<sup>Optional</sup> <a name="selfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions"></a>

```java
public WorkspacesDirectorySelfservicePermissions getSelfservicePermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

Describes the self-service permissions for a directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#selfservice_permissions WorkspacesDirectory#selfservice_permissions}

---

##### `streamingProperties`<sup>Optional</sup> <a name="streamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties"></a>

```java
public WorkspacesDirectoryStreamingProperties getStreamingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

Describes the streaming properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_properties WorkspacesDirectory#streaming_properties}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The identifiers of the subnets for your virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>>

The tags associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

Indicates whether your WorkSpace directory is dedicated or shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenancy WorkspacesDirectory#tenancy}

---

##### `userIdentityType`<sup>Optional</sup> <a name="userIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType"></a>

```java
public java.lang.String getUserIdentityType();
```

- *Type:* java.lang.String

The type of identity management the user is using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}

---

##### `workspaceAccessProperties`<sup>Optional</sup> <a name="workspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```java
public WorkspacesDirectoryWorkspaceAccessProperties getWorkspaceAccessProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

The device types and operating systems that can be used to access a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspaceCreationProperties`<sup>Optional</sup> <a name="workspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```java
public WorkspacesDirectoryWorkspaceCreationProperties getWorkspaceCreationProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

The default values that are used to create WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `workspaceDirectoryDescription`<sup>Optional</sup> <a name="workspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription"></a>

```java
public java.lang.String getWorkspaceDirectoryDescription();
```

- *Type:* java.lang.String

Description of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}

---

##### `workspaceDirectoryName`<sup>Optional</sup> <a name="workspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName"></a>

```java
public java.lang.String getWorkspaceDirectoryName();
```

- *Type:* java.lang.String

The name of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}

---

##### `workspaceType`<sup>Optional</sup> <a name="workspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType"></a>

```java
public java.lang.String getWorkspaceType();
```

- *Type:* java.lang.String

Indicates whether the directory's WorkSpace type is personal or pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}

---

### WorkspacesDirectoryIdcConfig <a name="WorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryIdcConfig;

WorkspacesDirectoryIdcConfig.builder()
    .build();
```


### WorkspacesDirectoryMicrosoftEntraConfig <a name="WorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryMicrosoftEntraConfig;

WorkspacesDirectoryMicrosoftEntraConfig.builder()
//  .applicationConfigSecretArn(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn">applicationConfigSecretArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the application config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The identifier of the tenant. |

---

##### `applicationConfigSecretArn`<sup>Optional</sup> <a name="applicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn"></a>

```java
public java.lang.String getApplicationConfigSecretArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the application config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#application_config_secret_arn WorkspacesDirectory#application_config_secret_arn}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The identifier of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenant_id WorkspacesDirectory#tenant_id}

---

### WorkspacesDirectorySamlProperties <a name="WorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectorySamlProperties;

WorkspacesDirectorySamlProperties.builder()
//  .relayStateParameterName(java.lang.String)
//  .status(java.lang.String)
//  .userAccessUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName">relayStateParameterName</a></code> | <code>java.lang.String</code> | The relay state parameter name supported by the SAML 2.0 identity provider (IdP). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status">status</a></code> | <code>java.lang.String</code> | Indicates the status of SAML 2.0 authentication. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl">userAccessUrl</a></code> | <code>java.lang.String</code> | The SAML 2.0 identity provider (IdP) user access URL. |

---

##### `relayStateParameterName`<sup>Optional</sup> <a name="relayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName"></a>

```java
public java.lang.String getRelayStateParameterName();
```

- *Type:* java.lang.String

The relay state parameter name supported by the SAML 2.0 identity provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Indicates the status of SAML 2.0 authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

##### `userAccessUrl`<sup>Optional</sup> <a name="userAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl"></a>

```java
public java.lang.String getUserAccessUrl();
```

- *Type:* java.lang.String

The SAML 2.0 identity provider (IdP) user access URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}

---

### WorkspacesDirectorySelfservicePermissions <a name="WorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectorySelfservicePermissions;

WorkspacesDirectorySelfservicePermissions.builder()
//  .changeComputeType(java.lang.String)
//  .increaseVolumeSize(java.lang.String)
//  .rebuildWorkspace(java.lang.String)
//  .restartWorkspace(java.lang.String)
//  .switchRunningMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType">changeComputeType</a></code> | <code>java.lang.String</code> | Specifies whether users can change the compute type (bundle) for their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>java.lang.String</code> | Specifies whether users can increase the volume size of the drives on their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>java.lang.String</code> | Specifies whether users can rebuild the operating system of a WorkSpace to its original state. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace">restartWorkspace</a></code> | <code>java.lang.String</code> | Specifies whether users can restart their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode">switchRunningMode</a></code> | <code>java.lang.String</code> | Specifies whether users can switch the running mode of their WorkSpace. |

---

##### `changeComputeType`<sup>Optional</sup> <a name="changeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType"></a>

```java
public java.lang.String getChangeComputeType();
```

- *Type:* java.lang.String

Specifies whether users can change the compute type (bundle) for their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}

---

##### `increaseVolumeSize`<sup>Optional</sup> <a name="increaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize"></a>

```java
public java.lang.String getIncreaseVolumeSize();
```

- *Type:* java.lang.String

Specifies whether users can increase the volume size of the drives on their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}

---

##### `rebuildWorkspace`<sup>Optional</sup> <a name="rebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace"></a>

```java
public java.lang.String getRebuildWorkspace();
```

- *Type:* java.lang.String

Specifies whether users can rebuild the operating system of a WorkSpace to its original state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}

---

##### `restartWorkspace`<sup>Optional</sup> <a name="restartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace"></a>

```java
public java.lang.String getRestartWorkspace();
```

- *Type:* java.lang.String

Specifies whether users can restart their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}

---

##### `switchRunningMode`<sup>Optional</sup> <a name="switchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode"></a>

```java
public java.lang.String getSwitchRunningMode();
```

- *Type:* java.lang.String

Specifies whether users can switch the running mode of their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}

---

### WorkspacesDirectoryStreamingProperties <a name="WorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingProperties;

WorkspacesDirectoryStreamingProperties.builder()
//  .globalAccelerator(WorkspacesDirectoryStreamingPropertiesGlobalAccelerator)
//  .storageConnectors(IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesStorageConnectors>)
//  .streamingExperiencePreferredProtocol(java.lang.String)
//  .userSettings(IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesUserSettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator">globalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | Describes the Global Accelerator for directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors">storageConnectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>></code> | Indicates the storage connector used. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol">streamingExperiencePreferredProtocol</a></code> | <code>java.lang.String</code> | Indicates the type of preferred protocol for the streaming experience. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings">userSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>></code> | Indicates the permission settings associated with the user. |

---

##### `globalAccelerator`<sup>Optional</sup> <a name="globalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator"></a>

```java
public WorkspacesDirectoryStreamingPropertiesGlobalAccelerator getGlobalAccelerator();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

Describes the Global Accelerator for directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#global_accelerator WorkspacesDirectory#global_accelerator}

---

##### `storageConnectors`<sup>Optional</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesStorageConnectors> getStorageConnectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>>

Indicates the storage connector used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#storage_connectors WorkspacesDirectory#storage_connectors}

---

##### `streamingExperiencePreferredProtocol`<sup>Optional</sup> <a name="streamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol"></a>

```java
public java.lang.String getStreamingExperiencePreferredProtocol();
```

- *Type:* java.lang.String

Indicates the type of preferred protocol for the streaming experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_experience_preferred_protocol WorkspacesDirectory#streaming_experience_preferred_protocol}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesUserSettings> getUserSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>>

Indicates the permission settings associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_settings WorkspacesDirectory#user_settings}

---

### WorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="WorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator;

WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.builder()
//  .mode(java.lang.String)
//  .preferredProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode">mode</a></code> | <code>java.lang.String</code> | Indicates if Global Accelerator for directory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol">preferredProtocol</a></code> | <code>java.lang.String</code> | Indicates the preferred protocol for Global Accelerator. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Indicates if Global Accelerator for directory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#mode WorkspacesDirectory#mode}

---

##### `preferredProtocol`<sup>Optional</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol"></a>

```java
public java.lang.String getPreferredProtocol();
```

- *Type:* java.lang.String

Indicates the preferred protocol for Global Accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#preferred_protocol WorkspacesDirectory#preferred_protocol}

---

### WorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesStorageConnectors;

WorkspacesDirectoryStreamingPropertiesStorageConnectors.builder()
//  .connectorType(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | The type of connector used to save user files. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status">status</a></code> | <code>java.lang.String</code> | Indicates if the storage connector is enabled or disabled. |

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

The type of connector used to save user files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#connector_type WorkspacesDirectory#connector_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Indicates if the storage connector is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryStreamingPropertiesUserSettings <a name="WorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesUserSettings;

WorkspacesDirectoryStreamingPropertiesUserSettings.builder()
//  .action(java.lang.String)
//  .maximumLength(java.lang.Number)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action">action</a></code> | <code>java.lang.String</code> | Indicates the type of action. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength">maximumLength</a></code> | <code>java.lang.Number</code> | Indicates the maximum character length for the specified user setting. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission">permission</a></code> | <code>java.lang.String</code> | Indicates if the setting is enabled or disabled. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Indicates the type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#action WorkspacesDirectory#action}

---

##### `maximumLength`<sup>Optional</sup> <a name="maximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength"></a>

```java
public java.lang.Number getMaximumLength();
```

- *Type:* java.lang.Number

Indicates the maximum character length for the specified user setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#maximum_length WorkspacesDirectory#maximum_length}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Indicates if the setting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#permission WorkspacesDirectory#permission}

---

### WorkspacesDirectoryTags <a name="WorkspacesDirectoryTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryTags;

WorkspacesDirectoryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#key WorkspacesDirectory#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#value WorkspacesDirectory#value}

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceAccessProperties;

WorkspacesDirectoryWorkspaceAccessProperties.builder()
//  .accessEndpointConfig(WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig)
//  .deviceTypeAndroid(java.lang.String)
//  .deviceTypeChromeOs(java.lang.String)
//  .deviceTypeIos(java.lang.String)
//  .deviceTypeLinux(java.lang.String)
//  .deviceTypeOsx(java.lang.String)
//  .deviceTypeWeb(java.lang.String)
//  .deviceTypeWindows(java.lang.String)
//  .deviceTypeWorkSpacesThinClient(java.lang.String)
//  .deviceTypeZeroClient(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig">accessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | Describes the access endpoint configuration for a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>java.lang.String</code> | Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs">deviceTypeChromeOs</a></code> | <code>java.lang.String</code> | Indicates whether users can use Chromebooks to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">deviceTypeIos</a></code> | <code>java.lang.String</code> | Indicates whether users can use iOS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>java.lang.String</code> | Indicates whether users can use Linux clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>java.lang.String</code> | Indicates whether users can use macOS clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>java.lang.String</code> | Indicates whether users can access their WorkSpaces through a web browser. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>java.lang.String</code> | Indicates whether users can use Windows clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient">deviceTypeWorkSpacesThinClient</a></code> | <code>java.lang.String</code> | Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient">deviceTypeZeroClient</a></code> | <code>java.lang.String</code> | Indicates whether users can use zero client devices to access their WorkSpaces. |

---

##### `accessEndpointConfig`<sup>Optional</sup> <a name="accessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig"></a>

```java
public WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig getAccessEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

Describes the access endpoint configuration for a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_config WorkspacesDirectory#access_endpoint_config}

---

##### `deviceTypeAndroid`<sup>Optional</sup> <a name="deviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```java
public java.lang.String getDeviceTypeAndroid();
```

- *Type:* java.lang.String

Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}

---

##### `deviceTypeChromeOs`<sup>Optional</sup> <a name="deviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs"></a>

```java
public java.lang.String getDeviceTypeChromeOs();
```

- *Type:* java.lang.String

Indicates whether users can use Chromebooks to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_chrome_os WorkspacesDirectory#device_type_chrome_os}

---

##### `deviceTypeIos`<sup>Optional</sup> <a name="deviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```java
public java.lang.String getDeviceTypeIos();
```

- *Type:* java.lang.String

Indicates whether users can use iOS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}

---

##### `deviceTypeLinux`<sup>Optional</sup> <a name="deviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```java
public java.lang.String getDeviceTypeLinux();
```

- *Type:* java.lang.String

Indicates whether users can use Linux clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}

---

##### `deviceTypeOsx`<sup>Optional</sup> <a name="deviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```java
public java.lang.String getDeviceTypeOsx();
```

- *Type:* java.lang.String

Indicates whether users can use macOS clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}

---

##### `deviceTypeWeb`<sup>Optional</sup> <a name="deviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```java
public java.lang.String getDeviceTypeWeb();
```

- *Type:* java.lang.String

Indicates whether users can access their WorkSpaces through a web browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}

---

##### `deviceTypeWindows`<sup>Optional</sup> <a name="deviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```java
public java.lang.String getDeviceTypeWindows();
```

- *Type:* java.lang.String

Indicates whether users can use Windows clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}

---

##### `deviceTypeWorkSpacesThinClient`<sup>Optional</sup> <a name="deviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient"></a>

```java
public java.lang.String getDeviceTypeWorkSpacesThinClient();
```

- *Type:* java.lang.String

Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_work_spaces_thin_client WorkspacesDirectory#device_type_work_spaces_thin_client}

---

##### `deviceTypeZeroClient`<sup>Optional</sup> <a name="deviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient"></a>

```java
public java.lang.String getDeviceTypeZeroClient();
```

- *Type:* java.lang.String

Indicates whether users can use zero client devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_zero_client WorkspacesDirectory#device_type_zero_client}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig;

WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.builder()
//  .accessEndpoints(IResolvable|java.util.List<WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints>)
//  .internetFallbackProtocols(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints">accessEndpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>></code> | Indicates a list of access endpoints associated with this directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols">internetFallbackProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available. |

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints> getAccessEndpoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>>

Indicates a list of access endpoints associated with this directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoints WorkspacesDirectory#access_endpoints}

---

##### `internetFallbackProtocols`<sup>Optional</sup> <a name="internetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols"></a>

```java
public java.util.List<java.lang.String> getInternetFallbackProtocols();
```

- *Type:* java.util.List<java.lang.String>

Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#internet_fallback_protocols WorkspacesDirectory#internet_fallback_protocols}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints;

WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.builder()
//  .accessEndpointType(java.lang.String)
//  .vpcEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType">accessEndpointType</a></code> | <code>java.lang.String</code> | Indicates the type of access endpoint. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Indicates the VPC endpoint to use for access. |

---

##### `accessEndpointType`<sup>Optional</sup> <a name="accessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType"></a>

```java
public java.lang.String getAccessEndpointType();
```

- *Type:* java.lang.String

Indicates the type of access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_type WorkspacesDirectory#access_endpoint_type}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Indicates the VPC endpoint to use for access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#vpc_endpoint_id WorkspacesDirectory#vpc_endpoint_id}

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceCreationProperties;

WorkspacesDirectoryWorkspaceCreationProperties.builder()
//  .customSecurityGroupId(java.lang.String)
//  .defaultOu(java.lang.String)
//  .enableInternetAccess(java.lang.Boolean|IResolvable)
//  .enableMaintenanceMode(java.lang.Boolean|IResolvable)
//  .instanceIamRoleArn(java.lang.String)
//  .userEnabledAsLocalAdministrator(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>java.lang.String</code> | The identifier of the default security group to apply to WorkSpaces when they are created. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">defaultOu</a></code> | <code>java.lang.String</code> | The organizational unit (OU) in the directory for the WorkSpace machine accounts. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether maintenance mode is enabled for WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn">instanceIamRoleArn</a></code> | <code>java.lang.String</code> | Indicates the IAM role ARN of the instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether WorkSpace users are local administrators on their WorkSpaces. |

---

##### `customSecurityGroupId`<sup>Optional</sup> <a name="customSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```java
public java.lang.String getCustomSecurityGroupId();
```

- *Type:* java.lang.String

The identifier of the default security group to apply to WorkSpaces when they are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}

---

##### `defaultOu`<sup>Optional</sup> <a name="defaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```java
public java.lang.String getDefaultOu();
```

- *Type:* java.lang.String

The organizational unit (OU) in the directory for the WorkSpace machine accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternetAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}

---

##### `enableMaintenanceMode`<sup>Optional</sup> <a name="enableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```java
public java.lang.Boolean|IResolvable getEnableMaintenanceMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether maintenance mode is enabled for WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}

---

##### `instanceIamRoleArn`<sup>Optional</sup> <a name="instanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn"></a>

```java
public java.lang.String getInstanceIamRoleArn();
```

- *Type:* java.lang.String

Indicates the IAM role ARN of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#instance_iam_role_arn WorkspacesDirectory#instance_iam_role_arn}

---

##### `userEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```java
public java.lang.Boolean|IResolvable getUserEnabledAsLocalAdministrator();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether WorkSpace users are local administrators on their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="WorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryActiveDirectoryConfigOutputReference;

new WorkspacesDirectoryActiveDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn">resetServiceAccountSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetServiceAccountSecretArn` <a name="resetServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn"></a>

```java
public void resetServiceAccountSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput">serviceAccountSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">serviceAccountSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountSecretArnInput`<sup>Optional</sup> <a name="serviceAccountSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput"></a>

```java
public java.lang.String getServiceAccountSecretArnInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `serviceAccountSecretArn`<sup>Required</sup> <a name="serviceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```java
public java.lang.String getServiceAccountSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryActiveDirectoryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---


### WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference;

new WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">resetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateAuthorityArn` <a name="resetCertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```java
public void resetCertificateAuthorityArn()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```java
public java.lang.String getCertificateAuthorityArnInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```java
public java.lang.String getCertificateAuthorityArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryCertificateBasedAuthProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### WorkspacesDirectoryIdcConfigOutputReference <a name="WorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryIdcConfigOutputReference;

new WorkspacesDirectoryIdcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```java
public WorkspacesDirectoryIdcConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a>

---


### WorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="WorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference;

new WorkspacesDirectoryMicrosoftEntraConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn">resetApplicationConfigSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationConfigSecretArn` <a name="resetApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn"></a>

```java
public void resetApplicationConfigSecretArn()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput">applicationConfigSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">applicationConfigSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationConfigSecretArnInput`<sup>Optional</sup> <a name="applicationConfigSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput"></a>

```java
public java.lang.String getApplicationConfigSecretArnInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `applicationConfigSecretArn`<sup>Required</sup> <a name="applicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```java
public java.lang.String getApplicationConfigSecretArn();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryMicrosoftEntraConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---


### WorkspacesDirectorySamlPropertiesOutputReference <a name="WorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectorySamlPropertiesOutputReference;

new WorkspacesDirectorySamlPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName">resetRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl">resetUserAccessUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRelayStateParameterName` <a name="resetRelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName"></a>

```java
public void resetRelayStateParameterName()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUserAccessUrl` <a name="resetUserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl"></a>

```java
public void resetUserAccessUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput">relayStateParameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput">userAccessUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">relayStateParameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">userAccessUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relayStateParameterNameInput`<sup>Optional</sup> <a name="relayStateParameterNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput"></a>

```java
public java.lang.String getRelayStateParameterNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `userAccessUrlInput`<sup>Optional</sup> <a name="userAccessUrlInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput"></a>

```java
public java.lang.String getUserAccessUrlInput();
```

- *Type:* java.lang.String

---

##### `relayStateParameterName`<sup>Required</sup> <a name="relayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```java
public java.lang.String getRelayStateParameterName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `userAccessUrl`<sup>Required</sup> <a name="userAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```java
public java.lang.String getUserAccessUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectorySamlProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---


### WorkspacesDirectorySelfservicePermissionsOutputReference <a name="WorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectorySelfservicePermissionsOutputReference;

new WorkspacesDirectorySelfservicePermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType">resetChangeComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize">resetIncreaseVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace">resetRebuildWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace">resetRestartWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode">resetSwitchRunningMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangeComputeType` <a name="resetChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType"></a>

```java
public void resetChangeComputeType()
```

##### `resetIncreaseVolumeSize` <a name="resetIncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```java
public void resetIncreaseVolumeSize()
```

##### `resetRebuildWorkspace` <a name="resetRebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace"></a>

```java
public void resetRebuildWorkspace()
```

##### `resetRestartWorkspace` <a name="resetRestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace"></a>

```java
public void resetRestartWorkspace()
```

##### `resetSwitchRunningMode` <a name="resetSwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode"></a>

```java
public void resetSwitchRunningMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput">changeComputeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput">increaseVolumeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput">rebuildWorkspaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput">restartWorkspaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput">switchRunningModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">changeComputeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">restartWorkspace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">switchRunningMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changeComputeTypeInput`<sup>Optional</sup> <a name="changeComputeTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```java
public java.lang.String getChangeComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `increaseVolumeSizeInput`<sup>Optional</sup> <a name="increaseVolumeSizeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```java
public java.lang.String getIncreaseVolumeSizeInput();
```

- *Type:* java.lang.String

---

##### `rebuildWorkspaceInput`<sup>Optional</sup> <a name="rebuildWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```java
public java.lang.String getRebuildWorkspaceInput();
```

- *Type:* java.lang.String

---

##### `restartWorkspaceInput`<sup>Optional</sup> <a name="restartWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```java
public java.lang.String getRestartWorkspaceInput();
```

- *Type:* java.lang.String

---

##### `switchRunningModeInput`<sup>Optional</sup> <a name="switchRunningModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput"></a>

```java
public java.lang.String getSwitchRunningModeInput();
```

- *Type:* java.lang.String

---

##### `changeComputeType`<sup>Required</sup> <a name="changeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```java
public java.lang.String getChangeComputeType();
```

- *Type:* java.lang.String

---

##### `increaseVolumeSize`<sup>Required</sup> <a name="increaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```java
public java.lang.String getIncreaseVolumeSize();
```

- *Type:* java.lang.String

---

##### `rebuildWorkspace`<sup>Required</sup> <a name="rebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```java
public java.lang.String getRebuildWorkspace();
```

- *Type:* java.lang.String

---

##### `restartWorkspace`<sup>Required</sup> <a name="restartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```java
public java.lang.String getRestartWorkspace();
```

- *Type:* java.lang.String

---

##### `switchRunningMode`<sup>Required</sup> <a name="switchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```java
public java.lang.String getSwitchRunningMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectorySelfservicePermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---


### WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference;

new WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol">resetPreferredProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetPreferredProtocol` <a name="resetPreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol"></a>

```java
public void resetPreferredProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput">preferredProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">preferredProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `preferredProtocolInput`<sup>Optional</sup> <a name="preferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput"></a>

```java
public java.lang.String getPreferredProtocolInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `preferredProtocol`<sup>Required</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```java
public java.lang.String getPreferredProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryStreamingPropertiesGlobalAccelerator getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---


### WorkspacesDirectoryStreamingPropertiesOutputReference <a name="WorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesOutputReference;

new WorkspacesDirectoryStreamingPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator">putGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors">putStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator">resetGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors">resetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol">resetStreamingExperiencePreferredProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlobalAccelerator` <a name="putGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator"></a>

```java
public void putGlobalAccelerator(WorkspacesDirectoryStreamingPropertiesGlobalAccelerator value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `putStorageConnectors` <a name="putStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors"></a>

```java
public void putStorageConnectors(IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesStorageConnectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>>

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings"></a>

```java
public void putUserSettings(IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesUserSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>>

---

##### `resetGlobalAccelerator` <a name="resetGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator"></a>

```java
public void resetGlobalAccelerator()
```

##### `resetStorageConnectors` <a name="resetStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors"></a>

```java
public void resetStorageConnectors()
```

##### `resetStreamingExperiencePreferredProtocol` <a name="resetStreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol"></a>

```java
public void resetStreamingExperiencePreferredProtocol()
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings"></a>

```java
public void resetUserSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">globalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">storageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput">globalAcceleratorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput">storageConnectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput">streamingExperiencePreferredProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput">userSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">streamingExperiencePreferredProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `globalAccelerator`<sup>Required</sup> <a name="globalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```java
public WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference getGlobalAccelerator();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `storageConnectors`<sup>Required</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```java
public WorkspacesDirectoryStreamingPropertiesStorageConnectorsList getStorageConnectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```java
public WorkspacesDirectoryStreamingPropertiesUserSettingsList getUserSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `globalAcceleratorInput`<sup>Optional</sup> <a name="globalAcceleratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput"></a>

```java
public IResolvable|WorkspacesDirectoryStreamingPropertiesGlobalAccelerator getGlobalAcceleratorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `storageConnectorsInput`<sup>Optional</sup> <a name="storageConnectorsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesStorageConnectors> getStorageConnectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>>

---

##### `streamingExperiencePreferredProtocolInput`<sup>Optional</sup> <a name="streamingExperiencePreferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput"></a>

```java
public java.lang.String getStreamingExperiencePreferredProtocolInput();
```

- *Type:* java.lang.String

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesUserSettings> getUserSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>>

---

##### `streamingExperiencePreferredProtocol`<sup>Required</sup> <a name="streamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```java
public java.lang.String getStreamingExperiencePreferredProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryStreamingProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList;

new WorkspacesDirectoryStreamingPropertiesStorageConnectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```java
public WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesStorageConnectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>>

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference;

new WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType">resetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorType` <a name="resetConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType"></a>

```java
public void resetConnectorType()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput">connectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```java
public java.lang.String getConnectorTypeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryStreamingPropertiesStorageConnectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesUserSettingsList;

new WorkspacesDirectoryStreamingPropertiesUserSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```java
public WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryStreamingPropertiesUserSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>>

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference;

new WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength">resetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetMaximumLength` <a name="resetMaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength"></a>

```java
public void resetMaximumLength()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput">maximumLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">maximumLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `maximumLengthInput`<sup>Optional</sup> <a name="maximumLengthInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput"></a>

```java
public java.lang.Number getMaximumLengthInput();
```

- *Type:* java.lang.Number

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```java
public java.lang.Number getMaximumLength();
```

- *Type:* java.lang.Number

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryStreamingPropertiesUserSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>

---


### WorkspacesDirectoryTagsList <a name="WorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryTagsList;

new WorkspacesDirectoryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get"></a>

```java
public WorkspacesDirectoryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>>

---


### WorkspacesDirectoryTagsOutputReference <a name="WorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryTagsOutputReference;

new WorkspacesDirectoryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```java
public WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType">resetAccessEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessEndpointType` <a name="resetAccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType"></a>

```java
public void resetAccessEndpointType()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput">accessEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">accessEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessEndpointTypeInput`<sup>Optional</sup> <a name="accessEndpointTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput"></a>

```java
public java.lang.String getAccessEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `accessEndpointType`<sup>Required</sup> <a name="accessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```java
public java.lang.String getAccessEndpointType();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints">putAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints">resetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols">resetInternetFallbackProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessEndpoints` <a name="putAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints"></a>

```java
public void putAccessEndpoints(IResolvable|java.util.List<WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>>

---

##### `resetAccessEndpoints` <a name="resetAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints"></a>

```java
public void resetAccessEndpoints()
```

##### `resetInternetFallbackProtocols` <a name="resetInternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols"></a>

```java
public void resetInternetFallbackProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput">accessEndpointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput">internetFallbackProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">internetFallbackProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```java
public WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList getAccessEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `accessEndpointsInput`<sup>Optional</sup> <a name="accessEndpointsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints> getAccessEndpointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>>

---

##### `internetFallbackProtocolsInput`<sup>Optional</sup> <a name="internetFallbackProtocolsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getInternetFallbackProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internetFallbackProtocols`<sup>Required</sup> <a name="internetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```java
public java.util.List<java.lang.String> getInternetFallbackProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;

new WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig">putAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig">resetAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">resetDeviceTypeAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs">resetDeviceTypeChromeOs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">resetDeviceTypeIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">resetDeviceTypeLinux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">resetDeviceTypeOsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">resetDeviceTypeWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">resetDeviceTypeWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient">resetDeviceTypeWorkSpacesThinClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient">resetDeviceTypeZeroClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessEndpointConfig` <a name="putAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig"></a>

```java
public void putAccessEndpointConfig(WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `resetAccessEndpointConfig` <a name="resetAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig"></a>

```java
public void resetAccessEndpointConfig()
```

##### `resetDeviceTypeAndroid` <a name="resetDeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```java
public void resetDeviceTypeAndroid()
```

##### `resetDeviceTypeChromeOs` <a name="resetDeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs"></a>

```java
public void resetDeviceTypeChromeOs()
```

##### `resetDeviceTypeIos` <a name="resetDeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```java
public void resetDeviceTypeIos()
```

##### `resetDeviceTypeLinux` <a name="resetDeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```java
public void resetDeviceTypeLinux()
```

##### `resetDeviceTypeOsx` <a name="resetDeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```java
public void resetDeviceTypeOsx()
```

##### `resetDeviceTypeWeb` <a name="resetDeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```java
public void resetDeviceTypeWeb()
```

##### `resetDeviceTypeWindows` <a name="resetDeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```java
public void resetDeviceTypeWindows()
```

##### `resetDeviceTypeWorkSpacesThinClient` <a name="resetDeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient"></a>

```java
public void resetDeviceTypeWorkSpacesThinClient()
```

##### `resetDeviceTypeZeroClient` <a name="resetDeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient"></a>

```java
public void resetDeviceTypeZeroClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">accessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput">accessEndpointConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">deviceTypeAndroidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput">deviceTypeChromeOsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">deviceTypeIosInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">deviceTypeLinuxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">deviceTypeOsxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">deviceTypeWebInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">deviceTypeWindowsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput">deviceTypeWorkSpacesThinClientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput">deviceTypeZeroClientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">deviceTypeChromeOs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">deviceTypeIos</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">deviceTypeWorkSpacesThinClient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">deviceTypeZeroClient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessEndpointConfig`<sup>Required</sup> <a name="accessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```java
public WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference getAccessEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `accessEndpointConfigInput`<sup>Optional</sup> <a name="accessEndpointConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput"></a>

```java
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig getAccessEndpointConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `deviceTypeAndroidInput`<sup>Optional</sup> <a name="deviceTypeAndroidInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```java
public java.lang.String getDeviceTypeAndroidInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeChromeOsInput`<sup>Optional</sup> <a name="deviceTypeChromeOsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput"></a>

```java
public java.lang.String getDeviceTypeChromeOsInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeIosInput`<sup>Optional</sup> <a name="deviceTypeIosInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```java
public java.lang.String getDeviceTypeIosInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeLinuxInput`<sup>Optional</sup> <a name="deviceTypeLinuxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```java
public java.lang.String getDeviceTypeLinuxInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeOsxInput`<sup>Optional</sup> <a name="deviceTypeOsxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```java
public java.lang.String getDeviceTypeOsxInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeWebInput`<sup>Optional</sup> <a name="deviceTypeWebInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```java
public java.lang.String getDeviceTypeWebInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeWindowsInput`<sup>Optional</sup> <a name="deviceTypeWindowsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```java
public java.lang.String getDeviceTypeWindowsInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeWorkSpacesThinClientInput`<sup>Optional</sup> <a name="deviceTypeWorkSpacesThinClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput"></a>

```java
public java.lang.String getDeviceTypeWorkSpacesThinClientInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeZeroClientInput`<sup>Optional</sup> <a name="deviceTypeZeroClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput"></a>

```java
public java.lang.String getDeviceTypeZeroClientInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeAndroid`<sup>Required</sup> <a name="deviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```java
public java.lang.String getDeviceTypeAndroid();
```

- *Type:* java.lang.String

---

##### `deviceTypeChromeOs`<sup>Required</sup> <a name="deviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```java
public java.lang.String getDeviceTypeChromeOs();
```

- *Type:* java.lang.String

---

##### `deviceTypeIos`<sup>Required</sup> <a name="deviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```java
public java.lang.String getDeviceTypeIos();
```

- *Type:* java.lang.String

---

##### `deviceTypeLinux`<sup>Required</sup> <a name="deviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```java
public java.lang.String getDeviceTypeLinux();
```

- *Type:* java.lang.String

---

##### `deviceTypeOsx`<sup>Required</sup> <a name="deviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```java
public java.lang.String getDeviceTypeOsx();
```

- *Type:* java.lang.String

---

##### `deviceTypeWeb`<sup>Required</sup> <a name="deviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```java
public java.lang.String getDeviceTypeWeb();
```

- *Type:* java.lang.String

---

##### `deviceTypeWindows`<sup>Required</sup> <a name="deviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```java
public java.lang.String getDeviceTypeWindows();
```

- *Type:* java.lang.String

---

##### `deviceTypeWorkSpacesThinClient`<sup>Required</sup> <a name="deviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```java
public java.lang.String getDeviceTypeWorkSpacesThinClient();
```

- *Type:* java.lang.String

---

##### `deviceTypeZeroClient`<sup>Required</sup> <a name="deviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```java
public java.lang.String getDeviceTypeZeroClient();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryWorkspaceAccessProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_directory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;

new WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">resetCustomSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">resetDefaultOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">resetEnableMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn">resetInstanceIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">resetUserEnabledAsLocalAdministrator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSecurityGroupId` <a name="resetCustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```java
public void resetCustomSecurityGroupId()
```

##### `resetDefaultOu` <a name="resetDefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```java
public void resetDefaultOu()
```

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```java
public void resetEnableInternetAccess()
```

##### `resetEnableMaintenanceMode` <a name="resetEnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```java
public void resetEnableMaintenanceMode()
```

##### `resetInstanceIamRoleArn` <a name="resetInstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn"></a>

```java
public void resetInstanceIamRoleArn()
```

##### `resetUserEnabledAsLocalAdministrator` <a name="resetUserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```java
public void resetUserEnabledAsLocalAdministrator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">customSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">defaultOuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">enableMaintenanceModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput">instanceIamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">userEnabledAsLocalAdministratorInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">defaultOu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">instanceIamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIdInput`<sup>Optional</sup> <a name="customSecurityGroupIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```java
public java.lang.String getCustomSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `defaultOuInput`<sup>Optional</sup> <a name="defaultOuInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```java
public java.lang.String getDefaultOuInput();
```

- *Type:* java.lang.String

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternetAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableMaintenanceModeInput`<sup>Optional</sup> <a name="enableMaintenanceModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMaintenanceModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceIamRoleArnInput`<sup>Optional</sup> <a name="instanceIamRoleArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput"></a>

```java
public java.lang.String getInstanceIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `userEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="userEnabledAsLocalAdministratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```java
public java.lang.Boolean|IResolvable getUserEnabledAsLocalAdministratorInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customSecurityGroupId`<sup>Required</sup> <a name="customSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```java
public java.lang.String getCustomSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `defaultOu`<sup>Required</sup> <a name="defaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```java
public java.lang.String getDefaultOu();
```

- *Type:* java.lang.String

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternetAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableMaintenanceMode`<sup>Required</sup> <a name="enableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```java
public java.lang.Boolean|IResolvable getEnableMaintenanceMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceIamRoleArn`<sup>Required</sup> <a name="instanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```java
public java.lang.String getInstanceIamRoleArn();
```

- *Type:* java.lang.String

---

##### `userEnabledAsLocalAdministrator`<sup>Required</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```java
public java.lang.Boolean|IResolvable getUserEnabledAsLocalAdministrator();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesDirectoryWorkspaceCreationProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



