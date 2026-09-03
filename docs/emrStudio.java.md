# `emrStudio` Submodule <a name="`emrStudio` Submodule" id="@cdktn/provider-awscc.emrStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudio <a name="EmrStudio" id="@cdktn/provider-awscc.emrStudio.EmrStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio awscc_emr_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudio;

EmrStudio.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authMode(java.lang.String)
    .defaultS3Location(java.lang.String)
    .engineSecurityGroupId(java.lang.String)
    .name(java.lang.String)
    .serviceRole(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .workspaceSecurityGroupId(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .idcInstanceArn(java.lang.String)
//  .idcUserAssignment(java.lang.String)
//  .idpAuthUrl(java.lang.String)
//  .idpRelayStateParameterName(java.lang.String)
//  .tags(IResolvable|java.util.List<EmrStudioTags>)
//  .trustedIdentityPropagationEnabled(java.lang.Boolean|IResolvable)
//  .userRole(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.authMode">authMode</a></code> | <code>java.lang.String</code> | Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.defaultS3Location">defaultS3Location</a></code> | <code>java.lang.String</code> | The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.engineSecurityGroupId">engineSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | The IAM role that will be assumed by the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of up to 5 subnet IDs to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EMR Studio Workspace security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM Identity Center instance to create the Studio application. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcUserAssignment">idcUserAssignment</a></code> | <code>java.lang.String</code> | Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpAuthUrl">idpAuthUrl</a></code> | <code>java.lang.String</code> | Your identity provider's authentication endpoint. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpRelayStateParameterName">idpRelayStateParameterName</a></code> | <code>java.lang.String</code> | The name of relay state parameter for external Identity Provider. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>></code> | A list of tags to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.trustedIdentityPropagationEnabled">trustedIdentityPropagationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.userRole">userRole</a></code> | <code>java.lang.String</code> | The IAM user role that will be assumed by users and groups logged in to a Studio. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.authMode"></a>

- *Type:* java.lang.String

Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM.

Amazon EMR Studio currently only supports SSO authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#auth_mode EmrStudio#auth_mode}

---

##### `defaultS3Location`<sup>Required</sup> <a name="defaultS3Location" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.defaultS3Location"></a>

- *Type:* java.lang.String

The default Amazon S3 location to back up EMR Studio Workspaces and notebook files.

A Studio user can select an alternative Amazon S3 location when creating a Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#default_s3_location EmrStudio#default_s3_location}

---

##### `engineSecurityGroupId`<sup>Required</sup> <a name="engineSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.engineSecurityGroupId"></a>

- *Type:* java.lang.String

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A descriptive name for the Amazon EMR Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#name EmrStudio#name}

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.serviceRole"></a>

- *Type:* java.lang.String

The IAM role that will be assumed by the Amazon EMR Studio.

The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#service_role EmrStudio#service_role}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of up to 5 subnet IDs to associate with the Studio.

The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#subnet_ids EmrStudio#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#vpc_id EmrStudio#vpc_id}

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.workspaceSecurityGroupId"></a>

- *Type:* java.lang.String

The ID of the Amazon EMR Studio Workspace security group.

The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A detailed description of the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#description EmrStudio#description}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* java.lang.String

The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#encryption_key_arn EmrStudio#encryption_key_arn}

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcInstanceArn"></a>

- *Type:* java.lang.String

The ARN of the IAM Identity Center instance to create the Studio application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idc_instance_arn EmrStudio#idc_instance_arn}

---

##### `idcUserAssignment`<sup>Optional</sup> <a name="idcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcUserAssignment"></a>

- *Type:* java.lang.String

Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL.

If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idc_user_assignment EmrStudio#idc_user_assignment}

---

##### `idpAuthUrl`<sup>Optional</sup> <a name="idpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpAuthUrl"></a>

- *Type:* java.lang.String

Your identity provider's authentication endpoint.

Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idp_auth_url EmrStudio#idp_auth_url}

---

##### `idpRelayStateParameterName`<sup>Optional</sup> <a name="idpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpRelayStateParameterName"></a>

- *Type:* java.lang.String

The name of relay state parameter for external Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>>

A list of tags to associate with the Studio.

Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#tags EmrStudio#tags}

---

##### `trustedIdentityPropagationEnabled`<sup>Optional</sup> <a name="trustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.trustedIdentityPropagationEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#trusted_identity_propagation_enabled EmrStudio#trusted_identity_propagation_enabled}

---

##### `userRole`<sup>Optional</sup> <a name="userRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.userRole"></a>

- *Type:* java.lang.String

The IAM user role that will be assumed by users and groups logged in to a Studio.

The permissions attached to this IAM role can be scoped down for each user or group using session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#user_role EmrStudio#user_role}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn">resetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment">resetIdcUserAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl">resetIdpAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName">resetIdpRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled">resetTrustedIdentityPropagationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole">resetUserRole</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EmrStudioTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn"></a>

```java
public void resetEncryptionKeyArn()
```

##### `resetIdcInstanceArn` <a name="resetIdcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn"></a>

```java
public void resetIdcInstanceArn()
```

##### `resetIdcUserAssignment` <a name="resetIdcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment"></a>

```java
public void resetIdcUserAssignment()
```

##### `resetIdpAuthUrl` <a name="resetIdpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl"></a>

```java
public void resetIdpAuthUrl()
```

##### `resetIdpRelayStateParameterName` <a name="resetIdpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName"></a>

```java
public void resetIdpRelayStateParameterName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrustedIdentityPropagationEnabled` <a name="resetTrustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled"></a>

```java
public void resetTrustedIdentityPropagationEnabled()
```

##### `resetUserRole` <a name="resetUserRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole"></a>

```java
public void resetUserRole()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudio;

EmrStudio.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudio;

EmrStudio.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudio;

EmrStudio.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudio;

EmrStudio.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmrStudio.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmrStudio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmrStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EmrStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId">studioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput">authModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput">defaultS3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput">engineSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput">idcUserAssignmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput">idpAuthUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput">idpRelayStateParameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput">serviceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput">trustedIdentityPropagationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput">userRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput">workspaceSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode">authMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location">defaultS3Location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId">engineSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment">idcUserAssignment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl">idpAuthUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName">idpRelayStateParameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled">trustedIdentityPropagationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole">userRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags"></a>

```java
public EmrStudioTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `authModeInput`<sup>Optional</sup> <a name="authModeInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput"></a>

```java
public java.lang.String getAuthModeInput();
```

- *Type:* java.lang.String

---

##### `defaultS3LocationInput`<sup>Optional</sup> <a name="defaultS3LocationInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput"></a>

```java
public java.lang.String getDefaultS3LocationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput"></a>

```java
public java.lang.String getEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `engineSecurityGroupIdInput`<sup>Optional</sup> <a name="engineSecurityGroupIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput"></a>

```java
public java.lang.String getEngineSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput"></a>

```java
public java.lang.String getIdcInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `idcUserAssignmentInput`<sup>Optional</sup> <a name="idcUserAssignmentInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput"></a>

```java
public java.lang.String getIdcUserAssignmentInput();
```

- *Type:* java.lang.String

---

##### `idpAuthUrlInput`<sup>Optional</sup> <a name="idpAuthUrlInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput"></a>

```java
public java.lang.String getIdpAuthUrlInput();
```

- *Type:* java.lang.String

---

##### `idpRelayStateParameterNameInput`<sup>Optional</sup> <a name="idpRelayStateParameterNameInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput"></a>

```java
public java.lang.String getIdpRelayStateParameterNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput"></a>

```java
public java.lang.String getServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EmrStudioTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>>

---

##### `trustedIdentityPropagationEnabledInput`<sup>Optional</sup> <a name="trustedIdentityPropagationEnabledInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTrustedIdentityPropagationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userRoleInput`<sup>Optional</sup> <a name="userRoleInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput"></a>

```java
public java.lang.String getUserRoleInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceSecurityGroupIdInput`<sup>Optional</sup> <a name="workspaceSecurityGroupIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput"></a>

```java
public java.lang.String getWorkspaceSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode"></a>

```java
public java.lang.String getAuthMode();
```

- *Type:* java.lang.String

---

##### `defaultS3Location`<sup>Required</sup> <a name="defaultS3Location" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location"></a>

```java
public java.lang.String getDefaultS3Location();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `engineSecurityGroupId`<sup>Required</sup> <a name="engineSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId"></a>

```java
public java.lang.String getEngineSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `idcUserAssignment`<sup>Required</sup> <a name="idcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment"></a>

```java
public java.lang.String getIdcUserAssignment();
```

- *Type:* java.lang.String

---

##### `idpAuthUrl`<sup>Required</sup> <a name="idpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl"></a>

```java
public java.lang.String getIdpAuthUrl();
```

- *Type:* java.lang.String

---

##### `idpRelayStateParameterName`<sup>Required</sup> <a name="idpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName"></a>

```java
public java.lang.String getIdpRelayStateParameterName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedIdentityPropagationEnabled`<sup>Required</sup> <a name="trustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTrustedIdentityPropagationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole"></a>

```java
public java.lang.String getUserRole();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId"></a>

```java
public java.lang.String getWorkspaceSecurityGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioConfig <a name="EmrStudioConfig" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudioConfig;

EmrStudioConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authMode(java.lang.String)
    .defaultS3Location(java.lang.String)
    .engineSecurityGroupId(java.lang.String)
    .name(java.lang.String)
    .serviceRole(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .workspaceSecurityGroupId(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .idcInstanceArn(java.lang.String)
//  .idcUserAssignment(java.lang.String)
//  .idpAuthUrl(java.lang.String)
//  .idpRelayStateParameterName(java.lang.String)
//  .tags(IResolvable|java.util.List<EmrStudioTags>)
//  .trustedIdentityPropagationEnabled(java.lang.Boolean|IResolvable)
//  .userRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode">authMode</a></code> | <code>java.lang.String</code> | Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location">defaultS3Location</a></code> | <code>java.lang.String</code> | The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId">engineSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | The IAM role that will be assumed by the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of up to 5 subnet IDs to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the Amazon EMR Studio Workspace security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM Identity Center instance to create the Studio application. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment">idcUserAssignment</a></code> | <code>java.lang.String</code> | Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl">idpAuthUrl</a></code> | <code>java.lang.String</code> | Your identity provider's authentication endpoint. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName">idpRelayStateParameterName</a></code> | <code>java.lang.String</code> | The name of relay state parameter for external Identity Provider. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>></code> | A list of tags to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled">trustedIdentityPropagationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole">userRole</a></code> | <code>java.lang.String</code> | The IAM user role that will be assumed by users and groups logged in to a Studio. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode"></a>

```java
public java.lang.String getAuthMode();
```

- *Type:* java.lang.String

Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM.

Amazon EMR Studio currently only supports SSO authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#auth_mode EmrStudio#auth_mode}

---

##### `defaultS3Location`<sup>Required</sup> <a name="defaultS3Location" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location"></a>

```java
public java.lang.String getDefaultS3Location();
```

- *Type:* java.lang.String

The default Amazon S3 location to back up EMR Studio Workspaces and notebook files.

A Studio user can select an alternative Amazon S3 location when creating a Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#default_s3_location EmrStudio#default_s3_location}

---

##### `engineSecurityGroupId`<sup>Required</sup> <a name="engineSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId"></a>

```java
public java.lang.String getEngineSecurityGroupId();
```

- *Type:* java.lang.String

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive name for the Amazon EMR Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#name EmrStudio#name}

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

The IAM role that will be assumed by the Amazon EMR Studio.

The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#service_role EmrStudio#service_role}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of up to 5 subnet IDs to associate with the Studio.

The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#subnet_ids EmrStudio#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#vpc_id EmrStudio#vpc_id}

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId"></a>

```java
public java.lang.String getWorkspaceSecurityGroupId();
```

- *Type:* java.lang.String

The ID of the Amazon EMR Studio Workspace security group.

The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A detailed description of the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#description EmrStudio#description}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#encryption_key_arn EmrStudio#encryption_key_arn}

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

The ARN of the IAM Identity Center instance to create the Studio application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idc_instance_arn EmrStudio#idc_instance_arn}

---

##### `idcUserAssignment`<sup>Optional</sup> <a name="idcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment"></a>

```java
public java.lang.String getIdcUserAssignment();
```

- *Type:* java.lang.String

Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL.

If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idc_user_assignment EmrStudio#idc_user_assignment}

---

##### `idpAuthUrl`<sup>Optional</sup> <a name="idpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl"></a>

```java
public java.lang.String getIdpAuthUrl();
```

- *Type:* java.lang.String

Your identity provider's authentication endpoint.

Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idp_auth_url EmrStudio#idp_auth_url}

---

##### `idpRelayStateParameterName`<sup>Optional</sup> <a name="idpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName"></a>

```java
public java.lang.String getIdpRelayStateParameterName();
```

- *Type:* java.lang.String

The name of relay state parameter for external Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EmrStudioTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>>

A list of tags to associate with the Studio.

Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#tags EmrStudio#tags}

---

##### `trustedIdentityPropagationEnabled`<sup>Optional</sup> <a name="trustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTrustedIdentityPropagationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#trusted_identity_propagation_enabled EmrStudio#trusted_identity_propagation_enabled}

---

##### `userRole`<sup>Optional</sup> <a name="userRole" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole"></a>

```java
public java.lang.String getUserRole();
```

- *Type:* java.lang.String

The IAM user role that will be assumed by users and groups logged in to a Studio.

The permissions attached to this IAM role can be scoped down for each user or group using session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#user_role EmrStudio#user_role}

---

### EmrStudioTags <a name="EmrStudioTags" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudioTags;

EmrStudioTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#key EmrStudio#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/emr_studio#value EmrStudio#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EmrStudioTagsList <a name="EmrStudioTagsList" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudioTagsList;

new EmrStudioTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get"></a>

```java
public EmrStudioTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EmrStudioTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>>

---


### EmrStudioTagsOutputReference <a name="EmrStudioTagsOutputReference" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_studio.EmrStudioTagsOutputReference;

new EmrStudioTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrStudioTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>

---



