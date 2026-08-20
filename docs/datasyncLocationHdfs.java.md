# `datasyncLocationHdfs` Submodule <a name="`datasyncLocationHdfs` Submodule" id="@cdktn/provider-awscc.datasyncLocationHdfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationHdfs <a name="DatasyncLocationHdfs" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs awscc_datasync_location_hdfs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfs;

DatasyncLocationHdfs.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentArns(java.util.List<java.lang.String>)
    .authenticationType(java.lang.String)
    .nameNodes(IResolvable|java.util.List<DatasyncLocationHdfsNameNodes>)
//  .blockSize(java.lang.Number)
//  .cmkSecretConfig(DatasyncLocationHdfsCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationHdfsCustomSecretConfig)
//  .kerberosKeytab(java.lang.String)
//  .kerberosKrb5Conf(java.lang.String)
//  .kerberosPrincipal(java.lang.String)
//  .kmsKeyProviderUri(java.lang.String)
//  .qopConfiguration(DatasyncLocationHdfsQopConfiguration)
//  .replicationFactor(java.lang.Number)
//  .simpleUser(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationHdfsTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | ARN(s) of the agent(s) to use for an HDFS location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | The authentication mode used to determine identity of user. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.nameNodes">nameNodes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>></code> | An array of Name Node(s) of the HDFS location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.blockSize">blockSize</a></code> | <code>java.lang.Number</code> | Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKeytab">kerberosKeytab</a></code> | <code>java.lang.String</code> | The Base64 string representation of the Keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>java.lang.String</code> | The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosPrincipal">kerberosPrincipal</a></code> | <code>java.lang.String</code> | The unique identity, or principal, to which Kerberos can assign tickets. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kmsKeyProviderUri">kmsKeyProviderUri</a></code> | <code>java.lang.String</code> | The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.qopConfiguration">qopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | Configuration information for RPC Protection and Data Transfer Protection. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Number of copies of each block that exists inside the HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.simpleUser">simpleUser</a></code> | <code>java.lang.String</code> | The user name that has read and write permissions on the specified HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.agentArns"></a>

- *Type:* java.util.List<java.lang.String>

ARN(s) of the agent(s) to use for an HDFS location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

The authentication mode used to determine identity of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}

---

##### `nameNodes`<sup>Required</sup> <a name="nameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.nameNodes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>>

An array of Name Node(s) of the HDFS location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#name_nodes DatasyncLocationHdfs#name_nodes}

---

##### `blockSize`<sup>Optional</sup> <a name="blockSize" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.blockSize"></a>

- *Type:* java.lang.Number

Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.cmkSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#cmk_secret_config DatasyncLocationHdfs#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.customSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#custom_secret_config DatasyncLocationHdfs#custom_secret_config}

---

##### `kerberosKeytab`<sup>Optional</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKeytab"></a>

- *Type:* java.lang.String

The Base64 string representation of the Keytab file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}

---

##### `kerberosKrb5Conf`<sup>Optional</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKrb5Conf"></a>

- *Type:* java.lang.String

The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_krb_5_conf DatasyncLocationHdfs#kerberos_krb_5_conf}

---

##### `kerberosPrincipal`<sup>Optional</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosPrincipal"></a>

- *Type:* java.lang.String

The unique identity, or principal, to which Kerberos can assign tickets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}

---

##### `kmsKeyProviderUri`<sup>Optional</sup> <a name="kmsKeyProviderUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kmsKeyProviderUri"></a>

- *Type:* java.lang.String

The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}

---

##### `qopConfiguration`<sup>Optional</sup> <a name="qopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.qopConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

Configuration information for RPC Protection and Data Transfer Protection.

These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

Number of copies of each block that exists inside the HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}

---

##### `simpleUser`<sup>Optional</sup> <a name="simpleUser" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.simpleUser"></a>

- *Type:* java.lang.String

The user name that has read and write permissions on the specified HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCmkSecretConfig">putCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCustomSecretConfig">putCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNodes">putNameNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration">putQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize">resetBlockSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCmkSecretConfig">resetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCustomSecretConfig">resetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab">resetKerberosKeytab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf">resetKerberosKrb5Conf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal">resetKerberosPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri">resetKmsKeyProviderUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration">resetQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser">resetSimpleUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmkSecretConfig` <a name="putCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCmkSecretConfig"></a>

```java
public void putCmkSecretConfig(DatasyncLocationHdfsCmkSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

---

##### `putCustomSecretConfig` <a name="putCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCustomSecretConfig"></a>

```java
public void putCustomSecretConfig(DatasyncLocationHdfsCustomSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

---

##### `putNameNodes` <a name="putNameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNodes"></a>

```java
public void putNameNodes(IResolvable|java.util.List<DatasyncLocationHdfsNameNodes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNodes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>>

---

##### `putQopConfiguration` <a name="putQopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration"></a>

```java
public void putQopConfiguration(DatasyncLocationHdfsQopConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatasyncLocationHdfsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>>

---

##### `resetBlockSize` <a name="resetBlockSize" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize"></a>

```java
public void resetBlockSize()
```

##### `resetCmkSecretConfig` <a name="resetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCmkSecretConfig"></a>

```java
public void resetCmkSecretConfig()
```

##### `resetCustomSecretConfig` <a name="resetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCustomSecretConfig"></a>

```java
public void resetCustomSecretConfig()
```

##### `resetKerberosKeytab` <a name="resetKerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab"></a>

```java
public void resetKerberosKeytab()
```

##### `resetKerberosKrb5Conf` <a name="resetKerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf"></a>

```java
public void resetKerberosKrb5Conf()
```

##### `resetKerberosPrincipal` <a name="resetKerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal"></a>

```java
public void resetKerberosPrincipal()
```

##### `resetKmsKeyProviderUri` <a name="resetKmsKeyProviderUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri"></a>

```java
public void resetKmsKeyProviderUri()
```

##### `resetQopConfiguration` <a name="resetQopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration"></a>

```java
public void resetQopConfiguration()
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor"></a>

```java
public void resetReplicationFactor()
```

##### `resetSimpleUser` <a name="resetSimpleUser" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser"></a>

```java
public void resetSimpleUser()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationHdfs resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfs;

DatasyncLocationHdfs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfs;

DatasyncLocationHdfs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfs;

DatasyncLocationHdfs.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfs;

DatasyncLocationHdfs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncLocationHdfs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatasyncLocationHdfs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncLocationHdfs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncLocationHdfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationHdfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference">DatasyncLocationHdfsCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference">DatasyncLocationHdfsCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference">DatasyncLocationHdfsManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodes">nameNodes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList">DatasyncLocationHdfsNameNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration">qopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList">DatasyncLocationHdfsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput">agentArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput">blockSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfigInput">cmkSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfigInput">customSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput">kerberosKeytabInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput">kerberosKrb5ConfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput">kerberosPrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput">kmsKeyProviderUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodesInput">nameNodesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput">qopConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput">simpleUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize">blockSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab">kerberosKeytab</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri">kmsKeyProviderUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser">simpleUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfig"></a>

```java
public DatasyncLocationHdfsCmkSecretConfigOutputReference getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference">DatasyncLocationHdfsCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfig"></a>

```java
public DatasyncLocationHdfsCustomSecretConfigOutputReference getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference">DatasyncLocationHdfsCustomSecretConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.managedSecretConfig"></a>

```java
public DatasyncLocationHdfsManagedSecretConfigOutputReference getManagedSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference">DatasyncLocationHdfsManagedSecretConfigOutputReference</a>

---

##### `nameNodes`<sup>Required</sup> <a name="nameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodes"></a>

```java
public DatasyncLocationHdfsNameNodesList getNameNodes();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList">DatasyncLocationHdfsNameNodesList</a>

---

##### `qopConfiguration`<sup>Required</sup> <a name="qopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration"></a>

```java
public DatasyncLocationHdfsQopConfigurationOutputReference getQopConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags"></a>

```java
public DatasyncLocationHdfsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList">DatasyncLocationHdfsTagsList</a>

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput"></a>

```java
public java.util.List<java.lang.String> getAgentArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `blockSizeInput`<sup>Optional</sup> <a name="blockSizeInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput"></a>

```java
public java.lang.Number getBlockSizeInput();
```

- *Type:* java.lang.Number

---

##### `cmkSecretConfigInput`<sup>Optional</sup> <a name="cmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationHdfsCmkSecretConfig getCmkSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

---

##### `customSecretConfigInput`<sup>Optional</sup> <a name="customSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationHdfsCustomSecretConfig getCustomSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

---

##### `kerberosKeytabInput`<sup>Optional</sup> <a name="kerberosKeytabInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput"></a>

```java
public java.lang.String getKerberosKeytabInput();
```

- *Type:* java.lang.String

---

##### `kerberosKrb5ConfInput`<sup>Optional</sup> <a name="kerberosKrb5ConfInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput"></a>

```java
public java.lang.String getKerberosKrb5ConfInput();
```

- *Type:* java.lang.String

---

##### `kerberosPrincipalInput`<sup>Optional</sup> <a name="kerberosPrincipalInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput"></a>

```java
public java.lang.String getKerberosPrincipalInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyProviderUriInput`<sup>Optional</sup> <a name="kmsKeyProviderUriInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput"></a>

```java
public java.lang.String getKmsKeyProviderUriInput();
```

- *Type:* java.lang.String

---

##### `nameNodesInput`<sup>Optional</sup> <a name="nameNodesInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodesInput"></a>

```java
public IResolvable|java.util.List<DatasyncLocationHdfsNameNodes> getNameNodesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>>

---

##### `qopConfigurationInput`<sup>Optional</sup> <a name="qopConfigurationInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput"></a>

```java
public IResolvable|DatasyncLocationHdfsQopConfiguration getQopConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `simpleUserInput`<sup>Optional</sup> <a name="simpleUserInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput"></a>

```java
public java.lang.String getSimpleUserInput();
```

- *Type:* java.lang.String

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatasyncLocationHdfsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `blockSize`<sup>Required</sup> <a name="blockSize" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize"></a>

```java
public java.lang.Number getBlockSize();
```

- *Type:* java.lang.Number

---

##### `kerberosKeytab`<sup>Required</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab"></a>

```java
public java.lang.String getKerberosKeytab();
```

- *Type:* java.lang.String

---

##### `kerberosKrb5Conf`<sup>Required</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf"></a>

```java
public java.lang.String getKerberosKrb5Conf();
```

- *Type:* java.lang.String

---

##### `kerberosPrincipal`<sup>Required</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal"></a>

```java
public java.lang.String getKerberosPrincipal();
```

- *Type:* java.lang.String

---

##### `kmsKeyProviderUri`<sup>Required</sup> <a name="kmsKeyProviderUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri"></a>

```java
public java.lang.String getKmsKeyProviderUri();
```

- *Type:* java.lang.String

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `simpleUser`<sup>Required</sup> <a name="simpleUser" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser"></a>

```java
public java.lang.String getSimpleUser();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationHdfsCmkSecretConfig <a name="DatasyncLocationHdfsCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsCmkSecretConfig;

DatasyncLocationHdfsCmkSecretConfig.builder()
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kms_key_arn DatasyncLocationHdfs#kms_key_arn}

---

### DatasyncLocationHdfsConfig <a name="DatasyncLocationHdfsConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsConfig;

DatasyncLocationHdfsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentArns(java.util.List<java.lang.String>)
    .authenticationType(java.lang.String)
    .nameNodes(IResolvable|java.util.List<DatasyncLocationHdfsNameNodes>)
//  .blockSize(java.lang.Number)
//  .cmkSecretConfig(DatasyncLocationHdfsCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationHdfsCustomSecretConfig)
//  .kerberosKeytab(java.lang.String)
//  .kerberosKrb5Conf(java.lang.String)
//  .kerberosPrincipal(java.lang.String)
//  .kmsKeyProviderUri(java.lang.String)
//  .qopConfiguration(DatasyncLocationHdfsQopConfiguration)
//  .replicationFactor(java.lang.Number)
//  .simpleUser(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationHdfsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | ARN(s) of the agent(s) to use for an HDFS location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | The authentication mode used to determine identity of user. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNodes">nameNodes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>></code> | An array of Name Node(s) of the HDFS location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize">blockSize</a></code> | <code>java.lang.Number</code> | Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab">kerberosKeytab</a></code> | <code>java.lang.String</code> | The Base64 string representation of the Keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>java.lang.String</code> | The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>java.lang.String</code> | The unique identity, or principal, to which Kerberos can assign tickets. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri">kmsKeyProviderUri</a></code> | <code>java.lang.String</code> | The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration">qopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | Configuration information for RPC Protection and Data Transfer Protection. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Number of copies of each block that exists inside the HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser">simpleUser</a></code> | <code>java.lang.String</code> | The user name that has read and write permissions on the specified HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

ARN(s) of the agent(s) to use for an HDFS location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

The authentication mode used to determine identity of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}

---

##### `nameNodes`<sup>Required</sup> <a name="nameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNodes"></a>

```java
public IResolvable|java.util.List<DatasyncLocationHdfsNameNodes> getNameNodes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>>

An array of Name Node(s) of the HDFS location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#name_nodes DatasyncLocationHdfs#name_nodes}

---

##### `blockSize`<sup>Optional</sup> <a name="blockSize" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize"></a>

```java
public java.lang.Number getBlockSize();
```

- *Type:* java.lang.Number

Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.cmkSecretConfig"></a>

```java
public DatasyncLocationHdfsCmkSecretConfig getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#cmk_secret_config DatasyncLocationHdfs#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.customSecretConfig"></a>

```java
public DatasyncLocationHdfsCustomSecretConfig getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#custom_secret_config DatasyncLocationHdfs#custom_secret_config}

---

##### `kerberosKeytab`<sup>Optional</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab"></a>

```java
public java.lang.String getKerberosKeytab();
```

- *Type:* java.lang.String

The Base64 string representation of the Keytab file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}

---

##### `kerberosKrb5Conf`<sup>Optional</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf"></a>

```java
public java.lang.String getKerberosKrb5Conf();
```

- *Type:* java.lang.String

The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_krb_5_conf DatasyncLocationHdfs#kerberos_krb_5_conf}

---

##### `kerberosPrincipal`<sup>Optional</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal"></a>

```java
public java.lang.String getKerberosPrincipal();
```

- *Type:* java.lang.String

The unique identity, or principal, to which Kerberos can assign tickets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}

---

##### `kmsKeyProviderUri`<sup>Optional</sup> <a name="kmsKeyProviderUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri"></a>

```java
public java.lang.String getKmsKeyProviderUri();
```

- *Type:* java.lang.String

The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}

---

##### `qopConfiguration`<sup>Optional</sup> <a name="qopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration"></a>

```java
public DatasyncLocationHdfsQopConfiguration getQopConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

Configuration information for RPC Protection and Data Transfer Protection.

These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

Number of copies of each block that exists inside the HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}

---

##### `simpleUser`<sup>Optional</sup> <a name="simpleUser" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser"></a>

```java
public java.lang.String getSimpleUser();
```

- *Type:* java.lang.String

The user name that has read and write permissions on the specified HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatasyncLocationHdfsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}

---

### DatasyncLocationHdfsCustomSecretConfig <a name="DatasyncLocationHdfsCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsCustomSecretConfig;

DatasyncLocationHdfsCustomSecretConfig.builder()
//  .secretAccessRoleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secretAccessRoleArn`<sup>Optional</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#secret_access_role_arn DatasyncLocationHdfs#secret_access_role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#secret_arn DatasyncLocationHdfs#secret_arn}

---

### DatasyncLocationHdfsManagedSecretConfig <a name="DatasyncLocationHdfsManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsManagedSecretConfig;

DatasyncLocationHdfsManagedSecretConfig.builder()
    .build();
```


### DatasyncLocationHdfsNameNodes <a name="DatasyncLocationHdfsNameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsNameNodes;

DatasyncLocationHdfsNameNodes.builder()
    .hostname(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.port">port</a></code> | <code>java.lang.Number</code> | The port on which the Name Node is listening on for client requests. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port on which the Name Node is listening on for client requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#port DatasyncLocationHdfs#port}

---

### DatasyncLocationHdfsQopConfiguration <a name="DatasyncLocationHdfsQopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsQopConfiguration;

DatasyncLocationHdfsQopConfiguration.builder()
//  .dataTransferProtection(java.lang.String)
//  .rpcProtection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection">dataTransferProtection</a></code> | <code>java.lang.String</code> | Configuration for Data Transfer Protection. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection">rpcProtection</a></code> | <code>java.lang.String</code> | Configuration for RPC Protection. |

---

##### `dataTransferProtection`<sup>Optional</sup> <a name="dataTransferProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection"></a>

```java
public java.lang.String getDataTransferProtection();
```

- *Type:* java.lang.String

Configuration for Data Transfer Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}

---

##### `rpcProtection`<sup>Optional</sup> <a name="rpcProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection"></a>

```java
public java.lang.String getRpcProtection();
```

- *Type:* java.lang.String

Configuration for RPC Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}

---

### DatasyncLocationHdfsTags <a name="DatasyncLocationHdfsTags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsTags;

DatasyncLocationHdfsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#key DatasyncLocationHdfs#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#value DatasyncLocationHdfs#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationHdfsCmkSecretConfigOutputReference <a name="DatasyncLocationHdfsCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference;

new DatasyncLocationHdfsCmkSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationHdfsCmkSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

---


### DatasyncLocationHdfsCustomSecretConfigOutputReference <a name="DatasyncLocationHdfsCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference;

new DatasyncLocationHdfsCustomSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretAccessRoleArn">resetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretAccessRoleArn` <a name="resetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```java
public void resetSecretAccessRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secretAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArnInput`<sup>Optional</sup> <a name="secretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```java
public java.lang.String getSecretAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationHdfsCustomSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

---


### DatasyncLocationHdfsManagedSecretConfigOutputReference <a name="DatasyncLocationHdfsManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference;

new DatasyncLocationHdfsManagedSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig">DatasyncLocationHdfsManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.internalValue"></a>

```java
public DatasyncLocationHdfsManagedSecretConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig">DatasyncLocationHdfsManagedSecretConfig</a>

---


### DatasyncLocationHdfsNameNodesList <a name="DatasyncLocationHdfsNameNodesList" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsNameNodesList;

new DatasyncLocationHdfsNameNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.get"></a>

```java
public DatasyncLocationHdfsNameNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncLocationHdfsNameNodes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>>

---


### DatasyncLocationHdfsNameNodesOutputReference <a name="DatasyncLocationHdfsNameNodesOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsNameNodesOutputReference;

new DatasyncLocationHdfsNameNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationHdfsNameNodes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>

---


### DatasyncLocationHdfsQopConfigurationOutputReference <a name="DatasyncLocationHdfsQopConfigurationOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsQopConfigurationOutputReference;

new DatasyncLocationHdfsQopConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection">resetDataTransferProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection">resetRpcProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataTransferProtection` <a name="resetDataTransferProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection"></a>

```java
public void resetDataTransferProtection()
```

##### `resetRpcProtection` <a name="resetRpcProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection"></a>

```java
public void resetRpcProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput">dataTransferProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput">rpcProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection">dataTransferProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection">rpcProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTransferProtectionInput`<sup>Optional</sup> <a name="dataTransferProtectionInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput"></a>

```java
public java.lang.String getDataTransferProtectionInput();
```

- *Type:* java.lang.String

---

##### `rpcProtectionInput`<sup>Optional</sup> <a name="rpcProtectionInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput"></a>

```java
public java.lang.String getRpcProtectionInput();
```

- *Type:* java.lang.String

---

##### `dataTransferProtection`<sup>Required</sup> <a name="dataTransferProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection"></a>

```java
public java.lang.String getDataTransferProtection();
```

- *Type:* java.lang.String

---

##### `rpcProtection`<sup>Required</sup> <a name="rpcProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection"></a>

```java
public java.lang.String getRpcProtection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationHdfsQopConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---


### DatasyncLocationHdfsTagsList <a name="DatasyncLocationHdfsTagsList" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsTagsList;

new DatasyncLocationHdfsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.get"></a>

```java
public DatasyncLocationHdfsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncLocationHdfsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>>

---


### DatasyncLocationHdfsTagsOutputReference <a name="DatasyncLocationHdfsTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_hdfs.DatasyncLocationHdfsTagsOutputReference;

new DatasyncLocationHdfsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationHdfsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>

---



