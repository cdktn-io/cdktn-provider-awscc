# `datasyncLocationSmb` Submodule <a name="`datasyncLocationSmb` Submodule" id="@cdktn/provider-awscc.datasyncLocationSmb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationSmb <a name="DatasyncLocationSmb" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb awscc_datasync_location_smb}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmb;

DatasyncLocationSmb.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentArns(java.util.List<java.lang.String>)
//  .authenticationType(java.lang.String)
//  .cmkSecretConfig(DatasyncLocationSmbCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationSmbCustomSecretConfig)
//  .dnsIpAddresses(java.util.List<java.lang.String>)
//  .domain(java.lang.String)
//  .kerberosKeytab(java.lang.String)
//  .kerberosKrb5Conf(java.lang.String)
//  .kerberosPrincipal(java.lang.String)
//  .mountOptions(DatasyncLocationSmbMountOptions)
//  .password(java.lang.String)
//  .serverHostname(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationSmbTags>)
//  .user(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | The authentication mode used to determine identity of user. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The name of the Windows domain that the SMB server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.kerberosKeytab">kerberosKeytab</a></code> | <code>java.lang.String</code> | The Base64 string representation of the Keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>java.lang.String</code> | The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.kerberosPrincipal">kerberosPrincipal</a></code> | <code>java.lang.String</code> | Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | The mount options used by DataSync to access the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password of the user who can mount the share and has the permissions to access files and folders in the SMB share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | The name of the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | The user who can mount the share, has the permissions to access files and folders in the SMB share. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.agentArns"></a>

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

The authentication mode used to determine identity of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#authentication_type DatasyncLocationSmb#authentication_type}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.cmkSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#cmk_secret_config DatasyncLocationSmb#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.customSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#custom_secret_config DatasyncLocationSmb#custom_secret_config}

---

##### `dnsIpAddresses`<sup>Optional</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.dnsIpAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to.

This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#dns_ip_addresses DatasyncLocationSmb#dns_ip_addresses}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The name of the Windows domain that the SMB server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}

---

##### `kerberosKeytab`<sup>Optional</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.kerberosKeytab"></a>

- *Type:* java.lang.String

The Base64 string representation of the Keytab file.

Specifies your Kerberos key table (keytab) file, which includes mappings between your service principal name (SPN) and encryption keys. To avoid task execution errors, make sure that the SPN in the keytab file matches exactly what you specify for KerberosPrincipal and in your krb5.conf file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#kerberos_keytab DatasyncLocationSmb#kerberos_keytab}

---

##### `kerberosKrb5Conf`<sup>Optional</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.kerberosKrb5Conf"></a>

- *Type:* java.lang.String

The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#kerberos_krb_5_conf DatasyncLocationSmb#kerberos_krb_5_conf}

---

##### `kerberosPrincipal`<sup>Optional</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.kerberosPrincipal"></a>

- *Type:* java.lang.String

Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server.

SPNs are case sensitive and must include a prepended cifs/. For example, an SPN might look like cifs/kerberosuser@EXAMPLE.COM. Your task execution will fail if the SPN that you provide for this parameter doesn't match exactly what's in your keytab or krb5.conf files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#kerberos_principal DatasyncLocationSmb#kerberos_principal}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

The mount options used by DataSync to access the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#mount_options DatasyncLocationSmb#mount_options}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}

---

##### `serverHostname`<sup>Optional</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.serverHostname"></a>

- *Type:* java.lang.String

The name of the SMB server.

This value is the IP address or Domain Name Service (DNS) name of the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.user"></a>

- *Type:* java.lang.String

The user who can mount the share, has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCmkSecretConfig">putCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCustomSecretConfig">putCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCmkSecretConfig">resetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCustomSecretConfig">resetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDnsIpAddresses">resetDnsIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKeytab">resetKerberosKeytab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKrb5Conf">resetKerberosKrb5Conf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosPrincipal">resetKerberosPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetServerHostname">resetServerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmkSecretConfig` <a name="putCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCmkSecretConfig"></a>

```java
public void putCmkSecretConfig(DatasyncLocationSmbCmkSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

---

##### `putCustomSecretConfig` <a name="putCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCustomSecretConfig"></a>

```java
public void putCustomSecretConfig(DatasyncLocationSmbCustomSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions"></a>

```java
public void putMountOptions(DatasyncLocationSmbMountOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatasyncLocationSmbTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetCmkSecretConfig` <a name="resetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCmkSecretConfig"></a>

```java
public void resetCmkSecretConfig()
```

##### `resetCustomSecretConfig` <a name="resetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCustomSecretConfig"></a>

```java
public void resetCustomSecretConfig()
```

##### `resetDnsIpAddresses` <a name="resetDnsIpAddresses" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDnsIpAddresses"></a>

```java
public void resetDnsIpAddresses()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetKerberosKeytab` <a name="resetKerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKeytab"></a>

```java
public void resetKerberosKeytab()
```

##### `resetKerberosKrb5Conf` <a name="resetKerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKrb5Conf"></a>

```java
public void resetKerberosKrb5Conf()
```

##### `resetKerberosPrincipal` <a name="resetKerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosPrincipal"></a>

```java
public void resetKerberosPrincipal()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetServerHostname` <a name="resetServerHostname" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetServerHostname"></a>

```java
public void resetServerHostname()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetTags"></a>

```java
public void resetTags()
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetUser"></a>

```java
public void resetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationSmb resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmb;

DatasyncLocationSmb.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmb;

DatasyncLocationSmb.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmb;

DatasyncLocationSmb.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmb;

DatasyncLocationSmb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncLocationSmb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatasyncLocationSmb resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncLocationSmb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncLocationSmb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationSmb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference">DatasyncLocationSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference">DatasyncLocationSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference">DatasyncLocationSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList">DatasyncLocationSmbTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput">agentArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfigInput">cmkSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfigInput">customSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddressesInput">dnsIpAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytabInput">kerberosKeytabInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5ConfInput">kerberosKrb5ConfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipalInput">kerberosPrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput">mountOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput">serverHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytab">kerberosKeytab</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfig"></a>

```java
public DatasyncLocationSmbCmkSecretConfigOutputReference getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference">DatasyncLocationSmbCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfig"></a>

```java
public DatasyncLocationSmbCustomSecretConfigOutputReference getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference">DatasyncLocationSmbCustomSecretConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.managedSecretConfig"></a>

```java
public DatasyncLocationSmbManagedSecretConfigOutputReference getManagedSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference">DatasyncLocationSmbManagedSecretConfigOutputReference</a>

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions"></a>

```java
public DatasyncLocationSmbMountOptionsOutputReference getMountOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tags"></a>

```java
public DatasyncLocationSmbTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList">DatasyncLocationSmbTagsList</a>

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput"></a>

```java
public java.util.List<java.lang.String> getAgentArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `cmkSecretConfigInput`<sup>Optional</sup> <a name="cmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationSmbCmkSecretConfig getCmkSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

---

##### `customSecretConfigInput`<sup>Optional</sup> <a name="customSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationSmbCustomSecretConfig getCustomSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

---

##### `dnsIpAddressesInput`<sup>Optional</sup> <a name="dnsIpAddressesInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `kerberosKeytabInput`<sup>Optional</sup> <a name="kerberosKeytabInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytabInput"></a>

```java
public java.lang.String getKerberosKeytabInput();
```

- *Type:* java.lang.String

---

##### `kerberosKrb5ConfInput`<sup>Optional</sup> <a name="kerberosKrb5ConfInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5ConfInput"></a>

```java
public java.lang.String getKerberosKrb5ConfInput();
```

- *Type:* java.lang.String

---

##### `kerberosPrincipalInput`<sup>Optional</sup> <a name="kerberosPrincipalInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipalInput"></a>

```java
public java.lang.String getKerberosPrincipalInput();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput"></a>

```java
public IResolvable|DatasyncLocationSmbMountOptions getMountOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverHostnameInput`<sup>Optional</sup> <a name="serverHostnameInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput"></a>

```java
public java.lang.String getServerHostnameInput();
```

- *Type:* java.lang.String

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatasyncLocationSmbTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `kerberosKeytab`<sup>Required</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytab"></a>

```java
public java.lang.String getKerberosKeytab();
```

- *Type:* java.lang.String

---

##### `kerberosKrb5Conf`<sup>Required</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5Conf"></a>

```java
public java.lang.String getKerberosKrb5Conf();
```

- *Type:* java.lang.String

---

##### `kerberosPrincipal`<sup>Required</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipal"></a>

```java
public java.lang.String getKerberosPrincipal();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname"></a>

```java
public java.lang.String getServerHostname();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationSmbCmkSecretConfig <a name="DatasyncLocationSmbCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbCmkSecretConfig;

DatasyncLocationSmbCmkSecretConfig.builder()
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#kms_key_arn DatasyncLocationSmb#kms_key_arn}

---

### DatasyncLocationSmbConfig <a name="DatasyncLocationSmbConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbConfig;

DatasyncLocationSmbConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentArns(java.util.List<java.lang.String>)
//  .authenticationType(java.lang.String)
//  .cmkSecretConfig(DatasyncLocationSmbCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationSmbCustomSecretConfig)
//  .dnsIpAddresses(java.util.List<java.lang.String>)
//  .domain(java.lang.String)
//  .kerberosKeytab(java.lang.String)
//  .kerberosKrb5Conf(java.lang.String)
//  .kerberosPrincipal(java.lang.String)
//  .mountOptions(DatasyncLocationSmbMountOptions)
//  .password(java.lang.String)
//  .serverHostname(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationSmbTags>)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | The authentication mode used to determine identity of user. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The name of the Windows domain that the SMB server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKeytab">kerberosKeytab</a></code> | <code>java.lang.String</code> | The Base64 string representation of the Keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>java.lang.String</code> | The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>java.lang.String</code> | Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | The mount options used by DataSync to access the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password of the user who can mount the share and has the permissions to access files and folders in the SMB share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | The name of the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user">user</a></code> | <code>java.lang.String</code> | The user who can mount the share, has the permissions to access files and folders in the SMB share. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

The authentication mode used to determine identity of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#authentication_type DatasyncLocationSmb#authentication_type}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.cmkSecretConfig"></a>

```java
public DatasyncLocationSmbCmkSecretConfig getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#cmk_secret_config DatasyncLocationSmb#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.customSecretConfig"></a>

```java
public DatasyncLocationSmbCustomSecretConfig getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#custom_secret_config DatasyncLocationSmb#custom_secret_config}

---

##### `dnsIpAddresses`<sup>Optional</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to.

This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#dns_ip_addresses DatasyncLocationSmb#dns_ip_addresses}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The name of the Windows domain that the SMB server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}

---

##### `kerberosKeytab`<sup>Optional</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKeytab"></a>

```java
public java.lang.String getKerberosKeytab();
```

- *Type:* java.lang.String

The Base64 string representation of the Keytab file.

Specifies your Kerberos key table (keytab) file, which includes mappings between your service principal name (SPN) and encryption keys. To avoid task execution errors, make sure that the SPN in the keytab file matches exactly what you specify for KerberosPrincipal and in your krb5.conf file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#kerberos_keytab DatasyncLocationSmb#kerberos_keytab}

---

##### `kerberosKrb5Conf`<sup>Optional</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKrb5Conf"></a>

```java
public java.lang.String getKerberosKrb5Conf();
```

- *Type:* java.lang.String

The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#kerberos_krb_5_conf DatasyncLocationSmb#kerberos_krb_5_conf}

---

##### `kerberosPrincipal`<sup>Optional</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosPrincipal"></a>

```java
public java.lang.String getKerberosPrincipal();
```

- *Type:* java.lang.String

Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server.

SPNs are case sensitive and must include a prepended cifs/. For example, an SPN might look like cifs/kerberosuser@EXAMPLE.COM. Your task execution will fail if the SPN that you provide for this parameter doesn't match exactly what's in your keytab or krb5.conf files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#kerberos_principal DatasyncLocationSmb#kerberos_principal}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions"></a>

```java
public DatasyncLocationSmbMountOptions getMountOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

The mount options used by DataSync to access the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#mount_options DatasyncLocationSmb#mount_options}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}

---

##### `serverHostname`<sup>Optional</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname"></a>

```java
public java.lang.String getServerHostname();
```

- *Type:* java.lang.String

The name of the SMB server.

This value is the IP address or Domain Name Service (DNS) name of the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatasyncLocationSmbTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

The user who can mount the share, has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}

---

### DatasyncLocationSmbCustomSecretConfig <a name="DatasyncLocationSmbCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbCustomSecretConfig;

DatasyncLocationSmbCustomSecretConfig.builder()
//  .secretAccessRoleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secretAccessRoleArn`<sup>Optional</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#secret_access_role_arn DatasyncLocationSmb#secret_access_role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#secret_arn DatasyncLocationSmb#secret_arn}

---

### DatasyncLocationSmbManagedSecretConfig <a name="DatasyncLocationSmbManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbManagedSecretConfig;

DatasyncLocationSmbManagedSecretConfig.builder()
    .build();
```


### DatasyncLocationSmbMountOptions <a name="DatasyncLocationSmbMountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbMountOptions;

DatasyncLocationSmbMountOptions.builder()
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version">version</a></code> | <code>java.lang.String</code> | The specific SMB version that you want DataSync to use to mount your SMB share. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The specific SMB version that you want DataSync to use to mount your SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}

---

### DatasyncLocationSmbTags <a name="DatasyncLocationSmbTags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbTags;

DatasyncLocationSmbTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#key DatasyncLocationSmb#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_smb#value DatasyncLocationSmb#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationSmbCmkSecretConfigOutputReference <a name="DatasyncLocationSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbCmkSecretConfigOutputReference;

new DatasyncLocationSmbCmkSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationSmbCmkSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

---


### DatasyncLocationSmbCustomSecretConfigOutputReference <a name="DatasyncLocationSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbCustomSecretConfigOutputReference;

new DatasyncLocationSmbCustomSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn">resetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretAccessRoleArn` <a name="resetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```java
public void resetSecretAccessRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secretAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArnInput`<sup>Optional</sup> <a name="secretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```java
public java.lang.String getSecretAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationSmbCustomSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

---


### DatasyncLocationSmbManagedSecretConfigOutputReference <a name="DatasyncLocationSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbManagedSecretConfigOutputReference;

new DatasyncLocationSmbManagedSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig">DatasyncLocationSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```java
public DatasyncLocationSmbManagedSecretConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig">DatasyncLocationSmbManagedSecretConfig</a>

---


### DatasyncLocationSmbMountOptionsOutputReference <a name="DatasyncLocationSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbMountOptionsOutputReference;

new DatasyncLocationSmbMountOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationSmbMountOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---


### DatasyncLocationSmbTagsList <a name="DatasyncLocationSmbTagsList" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbTagsList;

new DatasyncLocationSmbTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.get"></a>

```java
public DatasyncLocationSmbTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncLocationSmbTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>>

---


### DatasyncLocationSmbTagsOutputReference <a name="DatasyncLocationSmbTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_smb.DatasyncLocationSmbTagsOutputReference;

new DatasyncLocationSmbTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationSmbTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>

---



