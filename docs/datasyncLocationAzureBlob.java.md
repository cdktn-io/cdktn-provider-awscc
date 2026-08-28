# `datasyncLocationAzureBlob` Submodule <a name="`datasyncLocationAzureBlob` Submodule" id="@cdktn/provider-awscc.datasyncLocationAzureBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationAzureBlob <a name="DatasyncLocationAzureBlob" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob awscc_datasync_location_azure_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .agentArns(java.util.List<java.lang.String>)
//  .azureAccessTier(java.lang.String)
//  .azureBlobAuthenticationType(java.lang.String)
//  .azureBlobContainerUrl(java.lang.String)
//  .azureBlobSasConfiguration(DatasyncLocationAzureBlobAzureBlobSasConfiguration)
//  .azureBlobType(java.lang.String)
//  .cmkSecretConfig(DatasyncLocationAzureBlobCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationAzureBlobCustomSecretConfig)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationAzureBlobTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureAccessTier">azureAccessTier</a></code> | <code>java.lang.String</code> | Specifies an access tier for the objects you're transferring into your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobAuthenticationType">azureBlobAuthenticationType</a></code> | <code>java.lang.String</code> | The specific authentication type that you want DataSync to use to access your Azure Blob Container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobContainerUrl">azureBlobContainerUrl</a></code> | <code>java.lang.String</code> | The URL of the Azure Blob container that was described. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobSasConfiguration">azureBlobSasConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a></code> | Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobType">azureBlobType</a></code> | <code>java.lang.String</code> | Specifies a blob type for the objects you're transferring into your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentArns`<sup>Optional</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.agentArns"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}

---

##### `azureAccessTier`<sup>Optional</sup> <a name="azureAccessTier" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureAccessTier"></a>

- *Type:* java.lang.String

Specifies an access tier for the objects you're transferring into your Azure Blob Storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_access_tier DatasyncLocationAzureBlob#azure_access_tier}

---

##### `azureBlobAuthenticationType`<sup>Optional</sup> <a name="azureBlobAuthenticationType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobAuthenticationType"></a>

- *Type:* java.lang.String

The specific authentication type that you want DataSync to use to access your Azure Blob Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_authentication_type DatasyncLocationAzureBlob#azure_blob_authentication_type}

---

##### `azureBlobContainerUrl`<sup>Optional</sup> <a name="azureBlobContainerUrl" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobContainerUrl"></a>

- *Type:* java.lang.String

The URL of the Azure Blob container that was described.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_container_url DatasyncLocationAzureBlob#azure_blob_container_url}

---

##### `azureBlobSasConfiguration`<sup>Optional</sup> <a name="azureBlobSasConfiguration" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobSasConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_sas_configuration DatasyncLocationAzureBlob#azure_blob_sas_configuration}

---

##### `azureBlobType`<sup>Optional</sup> <a name="azureBlobType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.azureBlobType"></a>

- *Type:* java.lang.String

Specifies a blob type for the objects you're transferring into your Azure Blob Storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_type DatasyncLocationAzureBlob#azure_blob_type}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.cmkSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#cmk_secret_config DatasyncLocationAzureBlob#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.customSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#custom_secret_config DatasyncLocationAzureBlob#custom_secret_config}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putAzureBlobSasConfiguration">putAzureBlobSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putCmkSecretConfig">putCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putCustomSecretConfig">putCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAgentArns">resetAgentArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureAccessTier">resetAzureAccessTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobAuthenticationType">resetAzureBlobAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobContainerUrl">resetAzureBlobContainerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobSasConfiguration">resetAzureBlobSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobType">resetAzureBlobType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetCmkSecretConfig">resetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetCustomSecretConfig">resetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureBlobSasConfiguration` <a name="putAzureBlobSasConfiguration" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putAzureBlobSasConfiguration"></a>

```java
public void putAzureBlobSasConfiguration(DatasyncLocationAzureBlobAzureBlobSasConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putAzureBlobSasConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

---

##### `putCmkSecretConfig` <a name="putCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putCmkSecretConfig"></a>

```java
public void putCmkSecretConfig(DatasyncLocationAzureBlobCmkSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a>

---

##### `putCustomSecretConfig` <a name="putCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putCustomSecretConfig"></a>

```java
public void putCustomSecretConfig(DatasyncLocationAzureBlobCustomSecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatasyncLocationAzureBlobTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>>

---

##### `resetAgentArns` <a name="resetAgentArns" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAgentArns"></a>

```java
public void resetAgentArns()
```

##### `resetAzureAccessTier` <a name="resetAzureAccessTier" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureAccessTier"></a>

```java
public void resetAzureAccessTier()
```

##### `resetAzureBlobAuthenticationType` <a name="resetAzureBlobAuthenticationType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobAuthenticationType"></a>

```java
public void resetAzureBlobAuthenticationType()
```

##### `resetAzureBlobContainerUrl` <a name="resetAzureBlobContainerUrl" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobContainerUrl"></a>

```java
public void resetAzureBlobContainerUrl()
```

##### `resetAzureBlobSasConfiguration` <a name="resetAzureBlobSasConfiguration" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobSasConfiguration"></a>

```java
public void resetAzureBlobSasConfiguration()
```

##### `resetAzureBlobType` <a name="resetAzureBlobType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAzureBlobType"></a>

```java
public void resetAzureBlobType()
```

##### `resetCmkSecretConfig` <a name="resetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetCmkSecretConfig"></a>

```java
public void resetCmkSecretConfig()
```

##### `resetCustomSecretConfig` <a name="resetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetCustomSecretConfig"></a>

```java
public void resetCustomSecretConfig()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncLocationAzureBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncLocationAzureBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncLocationAzureBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationAzureBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobSasConfiguration">azureBlobSasConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference">DatasyncLocationAzureBlobCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference">DatasyncLocationAzureBlobCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference">DatasyncLocationAzureBlobManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList">DatasyncLocationAzureBlobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArnsInput">agentArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureAccessTierInput">azureAccessTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobAuthenticationTypeInput">azureBlobAuthenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobContainerUrlInput">azureBlobContainerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobSasConfigurationInput">azureBlobSasConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobTypeInput">azureBlobTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cmkSecretConfigInput">cmkSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.customSecretConfigInput">customSecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureAccessTier">azureAccessTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobAuthenticationType">azureBlobAuthenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobContainerUrl">azureBlobContainerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobType">azureBlobType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `azureBlobSasConfiguration`<sup>Required</sup> <a name="azureBlobSasConfiguration" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobSasConfiguration"></a>

```java
public DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference getAzureBlobSasConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a>

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cmkSecretConfig"></a>

```java
public DatasyncLocationAzureBlobCmkSecretConfigOutputReference getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference">DatasyncLocationAzureBlobCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.customSecretConfig"></a>

```java
public DatasyncLocationAzureBlobCustomSecretConfigOutputReference getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference">DatasyncLocationAzureBlobCustomSecretConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.managedSecretConfig"></a>

```java
public DatasyncLocationAzureBlobManagedSecretConfigOutputReference getManagedSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference">DatasyncLocationAzureBlobManagedSecretConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tags"></a>

```java
public DatasyncLocationAzureBlobTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList">DatasyncLocationAzureBlobTagsList</a>

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArnsInput"></a>

```java
public java.util.List<java.lang.String> getAgentArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azureAccessTierInput`<sup>Optional</sup> <a name="azureAccessTierInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureAccessTierInput"></a>

```java
public java.lang.String getAzureAccessTierInput();
```

- *Type:* java.lang.String

---

##### `azureBlobAuthenticationTypeInput`<sup>Optional</sup> <a name="azureBlobAuthenticationTypeInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobAuthenticationTypeInput"></a>

```java
public java.lang.String getAzureBlobAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `azureBlobContainerUrlInput`<sup>Optional</sup> <a name="azureBlobContainerUrlInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobContainerUrlInput"></a>

```java
public java.lang.String getAzureBlobContainerUrlInput();
```

- *Type:* java.lang.String

---

##### `azureBlobSasConfigurationInput`<sup>Optional</sup> <a name="azureBlobSasConfigurationInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobSasConfigurationInput"></a>

```java
public IResolvable|DatasyncLocationAzureBlobAzureBlobSasConfiguration getAzureBlobSasConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

---

##### `azureBlobTypeInput`<sup>Optional</sup> <a name="azureBlobTypeInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobTypeInput"></a>

```java
public java.lang.String getAzureBlobTypeInput();
```

- *Type:* java.lang.String

---

##### `cmkSecretConfigInput`<sup>Optional</sup> <a name="cmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cmkSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationAzureBlobCmkSecretConfig getCmkSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a>

---

##### `customSecretConfigInput`<sup>Optional</sup> <a name="customSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.customSecretConfigInput"></a>

```java
public IResolvable|DatasyncLocationAzureBlobCustomSecretConfig getCustomSecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a>

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatasyncLocationAzureBlobTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azureAccessTier`<sup>Required</sup> <a name="azureAccessTier" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureAccessTier"></a>

```java
public java.lang.String getAzureAccessTier();
```

- *Type:* java.lang.String

---

##### `azureBlobAuthenticationType`<sup>Required</sup> <a name="azureBlobAuthenticationType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobAuthenticationType"></a>

```java
public java.lang.String getAzureBlobAuthenticationType();
```

- *Type:* java.lang.String

---

##### `azureBlobContainerUrl`<sup>Required</sup> <a name="azureBlobContainerUrl" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobContainerUrl"></a>

```java
public java.lang.String getAzureBlobContainerUrl();
```

- *Type:* java.lang.String

---

##### `azureBlobType`<sup>Required</sup> <a name="azureBlobType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.azureBlobType"></a>

```java
public java.lang.String getAzureBlobType();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationAzureBlobAzureBlobSasConfiguration <a name="DatasyncLocationAzureBlobAzureBlobSasConfiguration" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobAzureBlobSasConfiguration;

DatasyncLocationAzureBlobAzureBlobSasConfiguration.builder()
//  .azureBlobSasToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration.property.azureBlobSasToken">azureBlobSasToken</a></code> | <code>java.lang.String</code> | Specifies the shared access signature (SAS) token, which indicates the permissions DataSync needs to access your Azure Blob Storage container. |

---

##### `azureBlobSasToken`<sup>Optional</sup> <a name="azureBlobSasToken" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration.property.azureBlobSasToken"></a>

```java
public java.lang.String getAzureBlobSasToken();
```

- *Type:* java.lang.String

Specifies the shared access signature (SAS) token, which indicates the permissions DataSync needs to access your Azure Blob Storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_sas_token DatasyncLocationAzureBlob#azure_blob_sas_token}

---

### DatasyncLocationAzureBlobCmkSecretConfig <a name="DatasyncLocationAzureBlobCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobCmkSecretConfig;

DatasyncLocationAzureBlobCmkSecretConfig.builder()
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#kms_key_arn DatasyncLocationAzureBlob#kms_key_arn}

---

### DatasyncLocationAzureBlobConfig <a name="DatasyncLocationAzureBlobConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobConfig;

DatasyncLocationAzureBlobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .agentArns(java.util.List<java.lang.String>)
//  .azureAccessTier(java.lang.String)
//  .azureBlobAuthenticationType(java.lang.String)
//  .azureBlobContainerUrl(java.lang.String)
//  .azureBlobSasConfiguration(DatasyncLocationAzureBlobAzureBlobSasConfiguration)
//  .azureBlobType(java.lang.String)
//  .cmkSecretConfig(DatasyncLocationAzureBlobCmkSecretConfig)
//  .customSecretConfig(DatasyncLocationAzureBlobCustomSecretConfig)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationAzureBlobTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureAccessTier">azureAccessTier</a></code> | <code>java.lang.String</code> | Specifies an access tier for the objects you're transferring into your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobAuthenticationType">azureBlobAuthenticationType</a></code> | <code>java.lang.String</code> | The specific authentication type that you want DataSync to use to access your Azure Blob Container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobContainerUrl">azureBlobContainerUrl</a></code> | <code>java.lang.String</code> | The URL of the Azure Blob container that was described. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobSasConfiguration">azureBlobSasConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a></code> | Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobType">azureBlobType</a></code> | <code>java.lang.String</code> | Specifies a blob type for the objects you're transferring into your Azure Blob Storage container. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentArns`<sup>Optional</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}

---

##### `azureAccessTier`<sup>Optional</sup> <a name="azureAccessTier" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureAccessTier"></a>

```java
public java.lang.String getAzureAccessTier();
```

- *Type:* java.lang.String

Specifies an access tier for the objects you're transferring into your Azure Blob Storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_access_tier DatasyncLocationAzureBlob#azure_access_tier}

---

##### `azureBlobAuthenticationType`<sup>Optional</sup> <a name="azureBlobAuthenticationType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobAuthenticationType"></a>

```java
public java.lang.String getAzureBlobAuthenticationType();
```

- *Type:* java.lang.String

The specific authentication type that you want DataSync to use to access your Azure Blob Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_authentication_type DatasyncLocationAzureBlob#azure_blob_authentication_type}

---

##### `azureBlobContainerUrl`<sup>Optional</sup> <a name="azureBlobContainerUrl" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobContainerUrl"></a>

```java
public java.lang.String getAzureBlobContainerUrl();
```

- *Type:* java.lang.String

The URL of the Azure Blob container that was described.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_container_url DatasyncLocationAzureBlob#azure_blob_container_url}

---

##### `azureBlobSasConfiguration`<sup>Optional</sup> <a name="azureBlobSasConfiguration" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobSasConfiguration"></a>

```java
public DatasyncLocationAzureBlobAzureBlobSasConfiguration getAzureBlobSasConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_sas_configuration DatasyncLocationAzureBlob#azure_blob_sas_configuration}

---

##### `azureBlobType`<sup>Optional</sup> <a name="azureBlobType" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.azureBlobType"></a>

```java
public java.lang.String getAzureBlobType();
```

- *Type:* java.lang.String

Specifies a blob type for the objects you're transferring into your Azure Blob Storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#azure_blob_type DatasyncLocationAzureBlob#azure_blob_type}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.cmkSecretConfig"></a>

```java
public DatasyncLocationAzureBlobCmkSecretConfig getCmkSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#cmk_secret_config DatasyncLocationAzureBlob#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.customSecretConfig"></a>

```java
public DatasyncLocationAzureBlobCustomSecretConfig getCustomSecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#custom_secret_config DatasyncLocationAzureBlob#custom_secret_config}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatasyncLocationAzureBlobTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}

---

### DatasyncLocationAzureBlobCustomSecretConfig <a name="DatasyncLocationAzureBlobCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobCustomSecretConfig;

DatasyncLocationAzureBlobCustomSecretConfig.builder()
//  .secretAccessRoleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secretAccessRoleArn`<sup>Optional</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#secret_access_role_arn DatasyncLocationAzureBlob#secret_access_role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#secret_arn DatasyncLocationAzureBlob#secret_arn}

---

### DatasyncLocationAzureBlobManagedSecretConfig <a name="DatasyncLocationAzureBlobManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobManagedSecretConfig;

DatasyncLocationAzureBlobManagedSecretConfig.builder()
    .build();
```


### DatasyncLocationAzureBlobTags <a name="DatasyncLocationAzureBlobTags" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobTags;

DatasyncLocationAzureBlobTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#key DatasyncLocationAzureBlob#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_azure_blob#value DatasyncLocationAzureBlob#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference <a name="DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference;

new DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resetAzureBlobSasToken">resetAzureBlobSasToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureBlobSasToken` <a name="resetAzureBlobSasToken" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resetAzureBlobSasToken"></a>

```java
public void resetAzureBlobSasToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasTokenInput">azureBlobSasTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken">azureBlobSasToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureBlobSasTokenInput`<sup>Optional</sup> <a name="azureBlobSasTokenInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasTokenInput"></a>

```java
public java.lang.String getAzureBlobSasTokenInput();
```

- *Type:* java.lang.String

---

##### `azureBlobSasToken`<sup>Required</sup> <a name="azureBlobSasToken" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken"></a>

```java
public java.lang.String getAzureBlobSasToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationAzureBlobAzureBlobSasConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobAzureBlobSasConfiguration">DatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

---


### DatasyncLocationAzureBlobCmkSecretConfigOutputReference <a name="DatasyncLocationAzureBlobCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference;

new DatasyncLocationAzureBlobCmkSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationAzureBlobCmkSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCmkSecretConfig">DatasyncLocationAzureBlobCmkSecretConfig</a>

---


### DatasyncLocationAzureBlobCustomSecretConfigOutputReference <a name="DatasyncLocationAzureBlobCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference;

new DatasyncLocationAzureBlobCustomSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.resetSecretAccessRoleArn">resetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretAccessRoleArn` <a name="resetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```java
public void resetSecretAccessRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secretAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArnInput`<sup>Optional</sup> <a name="secretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```java
public java.lang.String getSecretAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```java
public java.lang.String getSecretAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationAzureBlobCustomSecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobCustomSecretConfig">DatasyncLocationAzureBlobCustomSecretConfig</a>

---


### DatasyncLocationAzureBlobManagedSecretConfigOutputReference <a name="DatasyncLocationAzureBlobManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference;

new DatasyncLocationAzureBlobManagedSecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfig">DatasyncLocationAzureBlobManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue"></a>

```java
public DatasyncLocationAzureBlobManagedSecretConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobManagedSecretConfig">DatasyncLocationAzureBlobManagedSecretConfig</a>

---


### DatasyncLocationAzureBlobTagsList <a name="DatasyncLocationAzureBlobTagsList" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobTagsList;

new DatasyncLocationAzureBlobTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.get"></a>

```java
public DatasyncLocationAzureBlobTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncLocationAzureBlobTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>>

---


### DatasyncLocationAzureBlobTagsOutputReference <a name="DatasyncLocationAzureBlobTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_azure_blob.DatasyncLocationAzureBlobTagsOutputReference;

new DatasyncLocationAzureBlobTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationAzureBlobTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationAzureBlob.DatasyncLocationAzureBlobTags">DatasyncLocationAzureBlobTags</a>

---



