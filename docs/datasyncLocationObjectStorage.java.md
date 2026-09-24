# `datasyncLocationObjectStorage` Submodule <a name="`datasyncLocationObjectStorage` Submodule" id="@cdktn/provider-awscc.datasyncLocationObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationObjectStorage <a name="DatasyncLocationObjectStorage" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage awscc_datasync_location_object_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorage;

DatasyncLocationObjectStorage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessKey(java.lang.String)
//  .agentArns(java.util.List<java.lang.String>)
//  .bucketName(java.lang.String)
//  .cmkSecretConfig(DatasyncLocationObjectStorageCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationObjectStorageCustomSecretConfig)
//  .federatedIdentity(DatasyncLocationObjectStorageFederatedIdentity)
//  .secretKey(java.lang.String)
//  .serverCertificate(java.lang.String)
//  .serverHostname(java.lang.String)
//  .serverPort(java.lang.Number)
//  .serverProtocol(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationObjectStorageTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | Optional. The access key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the bucket on the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.federatedIdentity">federatedIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a></code> | Specifies the identity federation configuration that DataSync uses to access your object storage location using an OpenID Connect (OIDC) token. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | Optional. The secret key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverCertificate">serverCertificate</a></code> | <code>java.lang.String</code> | X.509 PEM content containing a certificate authority or chain to trust. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | The name of the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | The port that your self-managed server accepts inbound network traffic on. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | The protocol that the object storage server uses to communicate. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the self-managed object storage server that is used to read data from. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

Optional. The access key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}

---

##### `agentArns`<sup>Optional</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.agentArns"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

The name of the bucket on the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.cmkSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#cmk_secret_config DatasyncLocationObjectStorage#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.customSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#custom_secret_config DatasyncLocationObjectStorage#custom_secret_config}

---

##### `federatedIdentity`<sup>Optional</sup> <a name="federatedIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.federatedIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a>

Specifies the identity federation configuration that DataSync uses to access your object storage location using an OpenID Connect (OIDC) token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#federated_identity DatasyncLocationObjectStorage#federated_identity}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

Optional. The secret key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}

---

##### `serverCertificate`<sup>Optional</sup> <a name="serverCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverCertificate"></a>

- *Type:* java.lang.String

X.509 PEM content containing a certificate authority or chain to trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}

---

##### `serverHostname`<sup>Optional</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverHostname"></a>

- *Type:* java.lang.String

The name of the self-managed object storage server.

This value is the IP address or Domain Name Service (DNS) name of the object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}

---

##### `serverPort`<sup>Optional</sup> <a name="serverPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverPort"></a>

- *Type:* java.lang.Number

The port that your self-managed server accepts inbound network traffic on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}

---

##### `serverProtocol`<sup>Optional</sup> <a name="serverProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverProtocol"></a>

- *Type:* java.lang.String

The protocol that the object storage server uses to communicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

The subdirectory in the self-managed object storage server that is used to read data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig">putCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig">putCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putFederatedIdentity">putFederatedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns">resetAgentArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig">resetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig">resetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetFederatedIdentity">resetFederatedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate">resetServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname">resetServerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort">resetServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol">resetServerProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmkSecretConfig` <a name="putCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig"></a>

```java
public void putCmkSecretConfig(DatasyncLocationObjectStorageCmkSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---

##### `putCustomSecretConfig` <a name="putCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig"></a>

```java
public void putCustomSecretConfig(DatasyncLocationObjectStorageCustomSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---

##### `putFederatedIdentity` <a name="putFederatedIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putFederatedIdentity"></a>

```java
public void putFederatedIdentity(DatasyncLocationObjectStorageFederatedIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putFederatedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatasyncLocationObjectStorageTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>>

---

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAgentArns` <a name="resetAgentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns"></a>

```java
public void resetAgentArns()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetCmkSecretConfig` <a name="resetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig"></a>

```java
public void resetCmkSecretConfig()
```

##### `resetCustomSecretConfig` <a name="resetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig"></a>

```java
public void resetCustomSecretConfig()
```

##### `resetFederatedIdentity` <a name="resetFederatedIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetFederatedIdentity"></a>

```java
public void resetFederatedIdentity()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetServerCertificate` <a name="resetServerCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate"></a>

```java
public void resetServerCertificate()
```

##### `resetServerHostname` <a name="resetServerHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname"></a>

```java
public void resetServerHostname()
```

##### `resetServerPort` <a name="resetServerPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort"></a>

```java
public void resetServerPort()
```

##### `resetServerProtocol` <a name="resetServerProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol"></a>

```java
public void resetServerProtocol()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorage;

DatasyncLocationObjectStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorage;

DatasyncLocationObjectStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorage;

DatasyncLocationObjectStorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorage;

DatasyncLocationObjectStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncLocationObjectStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncLocationObjectStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncLocationObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.federatedIdentity">federatedIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference">DatasyncLocationObjectStorageFederatedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput">agentArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput">cmkSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput">customSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.federatedIdentityInput">federatedIdentityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput">serverCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput">serverHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput">serverPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput">serverProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate">serverCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig"></a>

```java
public DatasyncLocationObjectStorageCmkSecretConfigOutputReference getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig"></a>

```java
public DatasyncLocationObjectStorageCustomSecretConfigOutputReference getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a>

---

##### `federatedIdentity`<sup>Required</sup> <a name="federatedIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.federatedIdentity"></a>

```java
public DatasyncLocationObjectStorageFederatedIdentityOutputReference getFederatedIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference">DatasyncLocationObjectStorageFederatedIdentityOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig"></a>

```java
public DatasyncLocationObjectStorageManagedSecretConfigOutputReference getManagedSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags"></a>

```java
public DatasyncLocationObjectStorageTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a>

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput"></a>

```java
public java.util.List<java.lang.String> getAgentArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `cmkSecretConfigInput`<sup>Optional</sup> <a name="cmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationObjectStorageCmkSecretConfig getCmkSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---

##### `customSecretConfigInput`<sup>Optional</sup> <a name="customSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationObjectStorageCustomSecretConfig getCustomSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---

##### `federatedIdentityInput`<sup>Optional</sup> <a name="federatedIdentityInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.federatedIdentityInput"></a>

```java
public IResolvable|DatasyncLocationObjectStorageFederatedIdentity getFederatedIdentityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a>

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `serverCertificateInput`<sup>Optional</sup> <a name="serverCertificateInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput"></a>

```java
public java.lang.String getServerCertificateInput();
```

- *Type:* java.lang.String

---

##### `serverHostnameInput`<sup>Optional</sup> <a name="serverHostnameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput"></a>

```java
public java.lang.String getServerHostnameInput();
```

- *Type:* java.lang.String

---

##### `serverPortInput`<sup>Optional</sup> <a name="serverPortInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput"></a>

```java
public java.lang.Number getServerPortInput();
```

- *Type:* java.lang.Number

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput"></a>

```java
public java.lang.String getServerProtocolInput();
```

- *Type:* java.lang.String

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatasyncLocationObjectStorageTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>>

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `serverCertificate`<sup>Required</sup> <a name="serverCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate"></a>

```java
public java.lang.String getServerCertificate();
```

- *Type:* java.lang.String

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname"></a>

```java
public java.lang.String getServerHostname();
```

- *Type:* java.lang.String

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort"></a>

```java
public java.lang.Number getServerPort();
```

- *Type:* java.lang.Number

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationObjectStorageCmkSecretConfig <a name="DatasyncLocationObjectStorageCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageCmkSecretConfig;

DatasyncLocationObjectStorageCmkSecretConfig.builder()
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#kms_key_arn DatasyncLocationObjectStorage#kms_key_arn}

---

### DatasyncLocationObjectStorageConfig <a name="DatasyncLocationObjectStorageConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageConfig;

DatasyncLocationObjectStorageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessKey(java.lang.String)
//  .agentArns(java.util.List<java.lang.String>)
//  .bucketName(java.lang.String)
//  .cmkSecretConfig(DatasyncLocationObjectStorageCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationObjectStorageCustomSecretConfig)
//  .federatedIdentity(DatasyncLocationObjectStorageFederatedIdentity)
//  .secretKey(java.lang.String)
//  .serverCertificate(java.lang.String)
//  .serverHostname(java.lang.String)
//  .serverPort(java.lang.Number)
//  .serverProtocol(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationObjectStorageTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | Optional. The access key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the bucket on the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.federatedIdentity">federatedIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a></code> | Specifies the identity federation configuration that DataSync uses to access your object storage location using an OpenID Connect (OIDC) token. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | Optional. The secret key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate">serverCertificate</a></code> | <code>java.lang.String</code> | X.509 PEM content containing a certificate authority or chain to trust. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | The name of the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | The port that your self-managed server accepts inbound network traffic on. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | The protocol that the object storage server uses to communicate. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the self-managed object storage server that is used to read data from. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

Optional. The access key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}

---

##### `agentArns`<sup>Optional</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the bucket on the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig"></a>

```java
public DatasyncLocationObjectStorageCmkSecretConfig getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#cmk_secret_config DatasyncLocationObjectStorage#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig"></a>

```java
public DatasyncLocationObjectStorageCustomSecretConfig getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#custom_secret_config DatasyncLocationObjectStorage#custom_secret_config}

---

##### `federatedIdentity`<sup>Optional</sup> <a name="federatedIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.federatedIdentity"></a>

```java
public DatasyncLocationObjectStorageFederatedIdentity getFederatedIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a>

Specifies the identity federation configuration that DataSync uses to access your object storage location using an OpenID Connect (OIDC) token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#federated_identity DatasyncLocationObjectStorage#federated_identity}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

Optional. The secret key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}

---

##### `serverCertificate`<sup>Optional</sup> <a name="serverCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate"></a>

```java
public java.lang.String getServerCertificate();
```

- *Type:* java.lang.String

X.509 PEM content containing a certificate authority or chain to trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}

---

##### `serverHostname`<sup>Optional</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname"></a>

```java
public java.lang.String getServerHostname();
```

- *Type:* java.lang.String

The name of the self-managed object storage server.

This value is the IP address or Domain Name Service (DNS) name of the object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}

---

##### `serverPort`<sup>Optional</sup> <a name="serverPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort"></a>

```java
public java.lang.Number getServerPort();
```

- *Type:* java.lang.Number

The port that your self-managed server accepts inbound network traffic on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}

---

##### `serverProtocol`<sup>Optional</sup> <a name="serverProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

The protocol that the object storage server uses to communicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

The subdirectory in the self-managed object storage server that is used to read data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatasyncLocationObjectStorageTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}

---

### DatasyncLocationObjectStorageCustomSecretConfig <a name="DatasyncLocationObjectStorageCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageCustomSecretConfig;

DatasyncLocationObjectStorageCustomSecretConfig.builder()
//  .secretAccessRoleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secretAccessRoleArn`<sup>Optional</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#secret_access_role_arn DatasyncLocationObjectStorage#secret_access_role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#secret_arn DatasyncLocationObjectStorage#secret_arn}

---

### DatasyncLocationObjectStorageFederatedIdentity <a name="DatasyncLocationObjectStorageFederatedIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageFederatedIdentity;

DatasyncLocationObjectStorageFederatedIdentity.builder()
//  .awsIamRole(java.lang.String)
//  .externalIdentity(DatasyncLocationObjectStorageFederatedIdentityExternalIdentity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity.property.awsIamRole">awsIamRole</a></code> | <code>java.lang.String</code> | Specifies the ARN of the AWS Identity and Access Management (IAM) role that DataSync assumes to mint the OIDC token used to authenticate with the identity provider. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity.property.externalIdentity">externalIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity">DatasyncLocationObjectStorageFederatedIdentityExternalIdentity</a></code> | Specifies the external (non-AWS) identity provider that DataSync federates with to access your object storage location. |

---

##### `awsIamRole`<sup>Optional</sup> <a name="awsIamRole" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity.property.awsIamRole"></a>

```java
public java.lang.String getAwsIamRole();
```

- *Type:* java.lang.String

Specifies the ARN of the AWS Identity and Access Management (IAM) role that DataSync assumes to mint the OIDC token used to authenticate with the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#aws_iam_role DatasyncLocationObjectStorage#aws_iam_role}

---

##### `externalIdentity`<sup>Optional</sup> <a name="externalIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity.property.externalIdentity"></a>

```java
public DatasyncLocationObjectStorageFederatedIdentityExternalIdentity getExternalIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity">DatasyncLocationObjectStorageFederatedIdentityExternalIdentity</a>

Specifies the external (non-AWS) identity provider that DataSync federates with to access your object storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#external_identity DatasyncLocationObjectStorage#external_identity}

---

### DatasyncLocationObjectStorageFederatedIdentityExternalIdentity <a name="DatasyncLocationObjectStorageFederatedIdentityExternalIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity;

DatasyncLocationObjectStorageFederatedIdentityExternalIdentity.builder()
//  .googleOidc(DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity.property.googleOidc">googleOidc</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc</a></code> | Specifies the Google Cloud workload identity federation configuration that DataSync uses to obtain an access token for your Google Cloud Storage bucket. |

---

##### `googleOidc`<sup>Optional</sup> <a name="googleOidc" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity.property.googleOidc"></a>

```java
public DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc getGoogleOidc();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc</a>

Specifies the Google Cloud workload identity federation configuration that DataSync uses to obtain an access token for your Google Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#google_oidc DatasyncLocationObjectStorage#google_oidc}

---

### DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc <a name="DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc;

DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.builder()
//  .identityPoolName(java.lang.String)
//  .identityProviderName(java.lang.String)
//  .projectName(java.lang.String)
//  .projectNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | The name of the Google Cloud workload identity pool that DataSync federates with. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | The name of the OIDC identity provider configured in the Google Cloud workload identity pool. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.projectName">projectName</a></code> | <code>java.lang.String</code> | The human-readable Google Cloud project name. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | The numeric Google Cloud project ID, as a string. |

---

##### `identityPoolName`<sup>Optional</sup> <a name="identityPoolName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

The name of the Google Cloud workload identity pool that DataSync federates with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#identity_pool_name DatasyncLocationObjectStorage#identity_pool_name}

---

##### `identityProviderName`<sup>Optional</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

The name of the OIDC identity provider configured in the Google Cloud workload identity pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#identity_provider_name DatasyncLocationObjectStorage#identity_provider_name}

---

##### `projectName`<sup>Optional</sup> <a name="projectName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

The human-readable Google Cloud project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#project_name DatasyncLocationObjectStorage#project_name}

---

##### `projectNumber`<sup>Optional</sup> <a name="projectNumber" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

The numeric Google Cloud project ID, as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#project_number DatasyncLocationObjectStorage#project_number}

---

### DatasyncLocationObjectStorageManagedSecretConfig <a name="DatasyncLocationObjectStorageManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageManagedSecretConfig;

DatasyncLocationObjectStorageManagedSecretConfig.builder()
    .build();
```


### DatasyncLocationObjectStorageTags <a name="DatasyncLocationObjectStorageTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageTags;

DatasyncLocationObjectStorageTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#key DatasyncLocationObjectStorage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/datasync_location_object_storage#value DatasyncLocationObjectStorage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationObjectStorageCmkSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference;

new DatasyncLocationObjectStorageCmkSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationObjectStorageCmkSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---


### DatasyncLocationObjectStorageCustomSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference;

new DatasyncLocationObjectStorageCustomSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn">resetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretAccessRoleArn` <a name="resetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```java
public void resetSecretAccessRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secretAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArnInput`<sup>Optional</sup> <a name="secretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```java
public java.lang.String getSecretAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationObjectStorageCustomSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---


### DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference <a name="DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference;

new DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetIdentityPoolName">resetIdentityPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetIdentityProviderName">resetIdentityProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetProjectName">resetProjectName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetProjectNumber">resetProjectNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityPoolName` <a name="resetIdentityPoolName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetIdentityPoolName"></a>

```java
public void resetIdentityPoolName()
```

##### `resetIdentityProviderName` <a name="resetIdentityProviderName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetIdentityProviderName"></a>

```java
public void resetIdentityProviderName()
```

##### `resetProjectName` <a name="resetProjectName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetProjectName"></a>

```java
public void resetProjectName()
```

##### `resetProjectNumber` <a name="resetProjectNumber" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.resetProjectNumber"></a>

```java
public void resetProjectNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityPoolNameInput">identityPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityProviderNameInput">identityProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectNumberInput">projectNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityPoolNameInput`<sup>Optional</sup> <a name="identityPoolNameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityPoolNameInput"></a>

```java
public java.lang.String getIdentityPoolNameInput();
```

- *Type:* java.lang.String

---

##### `identityProviderNameInput`<sup>Optional</sup> <a name="identityProviderNameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityProviderNameInput"></a>

```java
public java.lang.String getIdentityProviderNameInput();
```

- *Type:* java.lang.String

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `projectNumberInput`<sup>Optional</sup> <a name="projectNumberInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectNumberInput"></a>

```java
public java.lang.String getProjectNumberInput();
```

- *Type:* java.lang.String

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc</a>

---


### DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference <a name="DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference;

new DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.putGoogleOidc">putGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.resetGoogleOidc">resetGoogleOidc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoogleOidc` <a name="putGoogleOidc" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.putGoogleOidc"></a>

```java
public void putGoogleOidc(DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.putGoogleOidc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc</a>

---

##### `resetGoogleOidc` <a name="resetGoogleOidc" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.resetGoogleOidc"></a>

```java
public void resetGoogleOidc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.googleOidc">googleOidc</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.googleOidcInput">googleOidcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity">DatasyncLocationObjectStorageFederatedIdentityExternalIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `googleOidc`<sup>Required</sup> <a name="googleOidc" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.googleOidc"></a>

```java
public DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference getGoogleOidc();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidcOutputReference</a>

---

##### `googleOidcInput`<sup>Optional</sup> <a name="googleOidcInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.googleOidcInput"></a>

```java
public IResolvable|DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc getGoogleOidcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityGoogleOidc</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationObjectStorageFederatedIdentityExternalIdentity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity">DatasyncLocationObjectStorageFederatedIdentityExternalIdentity</a>

---


### DatasyncLocationObjectStorageFederatedIdentityOutputReference <a name="DatasyncLocationObjectStorageFederatedIdentityOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageFederatedIdentityOutputReference;

new DatasyncLocationObjectStorageFederatedIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.putExternalIdentity">putExternalIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.resetAwsIamRole">resetAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.resetExternalIdentity">resetExternalIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalIdentity` <a name="putExternalIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.putExternalIdentity"></a>

```java
public void putExternalIdentity(DatasyncLocationObjectStorageFederatedIdentityExternalIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.putExternalIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity">DatasyncLocationObjectStorageFederatedIdentityExternalIdentity</a>

---

##### `resetAwsIamRole` <a name="resetAwsIamRole" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.resetAwsIamRole"></a>

```java
public void resetAwsIamRole()
```

##### `resetExternalIdentity` <a name="resetExternalIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.resetExternalIdentity"></a>

```java
public void resetExternalIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.externalIdentity">externalIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.awsIamRoleInput">awsIamRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.externalIdentityInput">externalIdentityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity">DatasyncLocationObjectStorageFederatedIdentityExternalIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.awsIamRole">awsIamRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdentity`<sup>Required</sup> <a name="externalIdentity" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.externalIdentity"></a>

```java
public DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference getExternalIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference">DatasyncLocationObjectStorageFederatedIdentityExternalIdentityOutputReference</a>

---

##### `awsIamRoleInput`<sup>Optional</sup> <a name="awsIamRoleInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.awsIamRoleInput"></a>

```java
public java.lang.String getAwsIamRoleInput();
```

- *Type:* java.lang.String

---

##### `externalIdentityInput`<sup>Optional</sup> <a name="externalIdentityInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.externalIdentityInput"></a>

```java
public IResolvable|DatasyncLocationObjectStorageFederatedIdentityExternalIdentity getExternalIdentityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityExternalIdentity">DatasyncLocationObjectStorageFederatedIdentityExternalIdentity</a>

---

##### `awsIamRole`<sup>Required</sup> <a name="awsIamRole" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.awsIamRole"></a>

```java
public java.lang.String getAwsIamRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentityOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationObjectStorageFederatedIdentity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageFederatedIdentity">DatasyncLocationObjectStorageFederatedIdentity</a>

---


### DatasyncLocationObjectStorageManagedSecretConfigOutputReference <a name="DatasyncLocationObjectStorageManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference;

new DatasyncLocationObjectStorageManagedSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue"></a>

```java
public DatasyncLocationObjectStorageManagedSecretConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a>

---


### DatasyncLocationObjectStorageTagsList <a name="DatasyncLocationObjectStorageTagsList" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageTagsList;

new DatasyncLocationObjectStorageTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get"></a>

```java
public DatasyncLocationObjectStorageTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncLocationObjectStorageTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>>

---


### DatasyncLocationObjectStorageTagsOutputReference <a name="DatasyncLocationObjectStorageTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_object_storage.DatasyncLocationObjectStorageTagsOutputReference;

new DatasyncLocationObjectStorageTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationObjectStorageTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>

---



