# `servicecatalogCloudformationProduct` Submodule <a name="`servicecatalogCloudformationProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProduct <a name="ServicecatalogCloudformationProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProduct;

ServicecatalogCloudformationProduct.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .owner(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
//  .distributor(java.lang.String)
//  .productType(java.lang.String)
//  .provisioningArtifactParameters(IResolvable|java.util.List<ServicecatalogCloudformationProductProvisioningArtifactParameters>)
//  .replaceProvisioningArtifacts(java.lang.Boolean|IResolvable)
//  .sourceConnection(ServicecatalogCloudformationProductSourceConnection)
//  .supportDescription(java.lang.String)
//  .supportEmail(java.lang.String)
//  .supportUrl(java.lang.String)
//  .tags(IResolvable|java.util.List<ServicecatalogCloudformationProductTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | The owner of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.distributor">distributor</a></code> | <code>java.lang.String</code> | The distributor of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.productType">productType</a></code> | <code>java.lang.String</code> | The type of product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioningArtifactParameters">provisioningArtifactParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>></code> | The configuration of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.replaceProvisioningArtifacts">replaceProvisioningArtifacts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This property is turned off by default. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | A top level ProductViewDetail response containing details about the product's connection. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportDescription">supportDescription</a></code> | <code>java.lang.String</code> | The support information about the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportEmail">supportEmail</a></code> | <code>java.lang.String</code> | The contact email for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The contact URL for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>></code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

The owner of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#owner ServicecatalogCloudformationProduct#owner}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#accept_language ServicecatalogCloudformationProduct#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.distributor"></a>

- *Type:* java.lang.String

The distributor of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#distributor ServicecatalogCloudformationProduct#distributor}

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.productType"></a>

- *Type:* java.lang.String

The type of product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#product_type ServicecatalogCloudformationProduct#product_type}

---

##### `provisioningArtifactParameters`<sup>Optional</sup> <a name="provisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioningArtifactParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>>

The configuration of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters ServicecatalogCloudformationProduct#provisioning_artifact_parameters}

---

##### `replaceProvisioningArtifacts`<sup>Optional</sup> <a name="replaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.replaceProvisioningArtifacts"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This property is turned off by default.

If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts ServicecatalogCloudformationProduct#replace_provisioning_artifacts}

---

##### `sourceConnection`<sup>Optional</sup> <a name="sourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.sourceConnection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

A top level ProductViewDetail response containing details about the product's connection.

AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#source_connection ServicecatalogCloudformationProduct#source_connection}

---

##### `supportDescription`<sup>Optional</sup> <a name="supportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportDescription"></a>

- *Type:* java.lang.String

The support information about the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#support_description ServicecatalogCloudformationProduct#support_description}

---

##### `supportEmail`<sup>Optional</sup> <a name="supportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportEmail"></a>

- *Type:* java.lang.String

The contact email for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#support_email ServicecatalogCloudformationProduct#support_email}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportUrl"></a>

- *Type:* java.lang.String

The contact URL for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#support_url ServicecatalogCloudformationProduct#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#tags ServicecatalogCloudformationProduct#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters">putProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection">putSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor">resetDistributor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType">resetProductType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters">resetProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts">resetReplaceProvisioningArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection">resetSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription">resetSupportDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail">resetSupportEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProvisioningArtifactParameters` <a name="putProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters"></a>

```java
public void putProvisioningArtifactParameters(IResolvable|java.util.List<ServicecatalogCloudformationProductProvisioningArtifactParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>>

---

##### `putSourceConnection` <a name="putSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection"></a>

```java
public void putSourceConnection(ServicecatalogCloudformationProductSourceConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ServicecatalogCloudformationProductTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDistributor` <a name="resetDistributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor"></a>

```java
public void resetDistributor()
```

##### `resetProductType` <a name="resetProductType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType"></a>

```java
public void resetProductType()
```

##### `resetProvisioningArtifactParameters` <a name="resetProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters"></a>

```java
public void resetProvisioningArtifactParameters()
```

##### `resetReplaceProvisioningArtifacts` <a name="resetReplaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts"></a>

```java
public void resetReplaceProvisioningArtifacts()
```

##### `resetSourceConnection` <a name="resetSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection"></a>

```java
public void resetSourceConnection()
```

##### `resetSupportDescription` <a name="resetSupportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription"></a>

```java
public void resetSupportDescription()
```

##### `resetSupportEmail` <a name="resetSupportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail"></a>

```java
public void resetSupportEmail()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProduct;

ServicecatalogCloudformationProduct.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProduct;

ServicecatalogCloudformationProduct.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProduct;

ServicecatalogCloudformationProduct.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProduct;

ServicecatalogCloudformationProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicecatalogCloudformationProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicecatalogCloudformationProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicecatalogCloudformationProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId">cloudformationProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName">productName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds">provisioningArtifactIds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames">provisioningArtifactNames</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters">provisioningArtifactParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput">distributorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput">productTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput">provisioningArtifactParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput">replaceProvisioningArtifactsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput">sourceConnectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput">supportDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput">supportEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor">distributor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType">productType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts">replaceProvisioningArtifacts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription">supportDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail">supportEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudformationProductId`<sup>Required</sup> <a name="cloudformationProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId"></a>

```java
public java.lang.String getCloudformationProductId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName"></a>

```java
public java.lang.String getProductName();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactIds`<sup>Required</sup> <a name="provisioningArtifactIds" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds"></a>

```java
public java.lang.String getProvisioningArtifactIds();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactNames`<sup>Required</sup> <a name="provisioningArtifactNames" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames"></a>

```java
public java.lang.String getProvisioningArtifactNames();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactParameters`<sup>Required</sup> <a name="provisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters"></a>

```java
public ServicecatalogCloudformationProductProvisioningArtifactParametersList getProvisioningArtifactParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a>

---

##### `sourceConnection`<sup>Required</sup> <a name="sourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection"></a>

```java
public ServicecatalogCloudformationProductSourceConnectionOutputReference getSourceConnection();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags"></a>

```java
public ServicecatalogCloudformationProductTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `distributorInput`<sup>Optional</sup> <a name="distributorInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput"></a>

```java
public java.lang.String getDistributorInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `productTypeInput`<sup>Optional</sup> <a name="productTypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput"></a>

```java
public java.lang.String getProductTypeInput();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactParametersInput`<sup>Optional</sup> <a name="provisioningArtifactParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProductProvisioningArtifactParameters> getProvisioningArtifactParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>>

---

##### `replaceProvisioningArtifactsInput`<sup>Optional</sup> <a name="replaceProvisioningArtifactsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceProvisioningArtifactsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceConnectionInput`<sup>Optional</sup> <a name="sourceConnectionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput"></a>

```java
public IResolvable|ServicecatalogCloudformationProductSourceConnection getSourceConnectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---

##### `supportDescriptionInput`<sup>Optional</sup> <a name="supportDescriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput"></a>

```java
public java.lang.String getSupportDescriptionInput();
```

- *Type:* java.lang.String

---

##### `supportEmailInput`<sup>Optional</sup> <a name="supportEmailInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput"></a>

```java
public java.lang.String getSupportEmailInput();
```

- *Type:* java.lang.String

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProductTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>>

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `distributor`<sup>Required</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor"></a>

```java
public java.lang.String getDistributor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType"></a>

```java
public java.lang.String getProductType();
```

- *Type:* java.lang.String

---

##### `replaceProvisioningArtifacts`<sup>Required</sup> <a name="replaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts"></a>

```java
public java.lang.Boolean|IResolvable getReplaceProvisioningArtifacts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportDescription`<sup>Required</sup> <a name="supportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription"></a>

```java
public java.lang.String getSupportDescription();
```

- *Type:* java.lang.String

---

##### `supportEmail`<sup>Required</sup> <a name="supportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail"></a>

```java
public java.lang.String getSupportEmail();
```

- *Type:* java.lang.String

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProductConfig <a name="ServicecatalogCloudformationProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductConfig;

ServicecatalogCloudformationProductConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .owner(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
//  .distributor(java.lang.String)
//  .productType(java.lang.String)
//  .provisioningArtifactParameters(IResolvable|java.util.List<ServicecatalogCloudformationProductProvisioningArtifactParameters>)
//  .replaceProvisioningArtifacts(java.lang.Boolean|IResolvable)
//  .sourceConnection(ServicecatalogCloudformationProductSourceConnection)
//  .supportDescription(java.lang.String)
//  .supportEmail(java.lang.String)
//  .supportUrl(java.lang.String)
//  .tags(IResolvable|java.util.List<ServicecatalogCloudformationProductTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | The owner of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor">distributor</a></code> | <code>java.lang.String</code> | The distributor of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType">productType</a></code> | <code>java.lang.String</code> | The type of product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters">provisioningArtifactParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>></code> | The configuration of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts">replaceProvisioningArtifacts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This property is turned off by default. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | A top level ProductViewDetail response containing details about the product's connection. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription">supportDescription</a></code> | <code>java.lang.String</code> | The support information about the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail">supportEmail</a></code> | <code>java.lang.String</code> | The contact email for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The contact URL for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>></code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

The owner of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#owner ServicecatalogCloudformationProduct#owner}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#accept_language ServicecatalogCloudformationProduct#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor"></a>

```java
public java.lang.String getDistributor();
```

- *Type:* java.lang.String

The distributor of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#distributor ServicecatalogCloudformationProduct#distributor}

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType"></a>

```java
public java.lang.String getProductType();
```

- *Type:* java.lang.String

The type of product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#product_type ServicecatalogCloudformationProduct#product_type}

---

##### `provisioningArtifactParameters`<sup>Optional</sup> <a name="provisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProductProvisioningArtifactParameters> getProvisioningArtifactParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>>

The configuration of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters ServicecatalogCloudformationProduct#provisioning_artifact_parameters}

---

##### `replaceProvisioningArtifacts`<sup>Optional</sup> <a name="replaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts"></a>

```java
public java.lang.Boolean|IResolvable getReplaceProvisioningArtifacts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This property is turned off by default.

If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts ServicecatalogCloudformationProduct#replace_provisioning_artifacts}

---

##### `sourceConnection`<sup>Optional</sup> <a name="sourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection"></a>

```java
public ServicecatalogCloudformationProductSourceConnection getSourceConnection();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

A top level ProductViewDetail response containing details about the product's connection.

AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#source_connection ServicecatalogCloudformationProduct#source_connection}

---

##### `supportDescription`<sup>Optional</sup> <a name="supportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription"></a>

```java
public java.lang.String getSupportDescription();
```

- *Type:* java.lang.String

The support information about the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#support_description ServicecatalogCloudformationProduct#support_description}

---

##### `supportEmail`<sup>Optional</sup> <a name="supportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail"></a>

```java
public java.lang.String getSupportEmail();
```

- *Type:* java.lang.String

The contact email for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#support_email ServicecatalogCloudformationProduct#support_email}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

The contact URL for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#support_url ServicecatalogCloudformationProduct#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProductTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#tags ServicecatalogCloudformationProduct#tags}

---

### ServicecatalogCloudformationProductProvisioningArtifactParameters <a name="ServicecatalogCloudformationProductProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductProvisioningArtifactParameters;

ServicecatalogCloudformationProductProvisioningArtifactParameters.builder()
//  .description(java.lang.String)
//  .disableTemplateValidation(java.lang.Boolean|IResolvable)
//  .info(ServicecatalogCloudformationProductProvisioningArtifactParametersInfo)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description">description</a></code> | <code>java.lang.String</code> | The description of the provisioning artifact, including how it differs from the previous provisioning artifact. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | Specify the template source with one of the following options, but not both. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name">name</a></code> | <code>java.lang.String</code> | The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type">type</a></code> | <code>java.lang.String</code> | The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the provisioning artifact, including how it differs from the previous provisioning artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `disableTemplateValidation`<sup>Optional</sup> <a name="disableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableTemplateValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#disable_template_validation ServicecatalogCloudformationProduct#disable_template_validation}

---

##### `info`<sup>Optional</sup> <a name="info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info"></a>

```java
public ServicecatalogCloudformationProductProvisioningArtifactParametersInfo getInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

Specify the template source with one of the following options, but not both.

Keys accepted: [ LoadTemplateFromURL, ImportFromPhysicalId ] The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:

"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."

ImportFromPhysicalId: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: ImportFromPhysicalId: "arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#info ServicecatalogCloudformationProduct#info}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfo <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo;

ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.builder()
//  .importFromPhysicalId(java.lang.String)
//  .loadTemplateFromUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId">importFromPhysicalId</a></code> | <code>java.lang.String</code> | The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl">loadTemplateFromUrl</a></code> | <code>java.lang.String</code> | The URL of the AWS CloudFormation template in Amazon S3 in JSON format. |

---

##### `importFromPhysicalId`<sup>Optional</sup> <a name="importFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId"></a>

```java
public java.lang.String getImportFromPhysicalId();
```

- *Type:* java.lang.String

The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#import_from_physical_id ServicecatalogCloudformationProduct#import_from_physical_id}

---

##### `loadTemplateFromUrl`<sup>Optional</sup> <a name="loadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl"></a>

```java
public java.lang.String getLoadTemplateFromUrl();
```

- *Type:* java.lang.String

The URL of the AWS CloudFormation template in Amazon S3 in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#load_template_from_url ServicecatalogCloudformationProduct#load_template_from_url}

---

### ServicecatalogCloudformationProductSourceConnection <a name="ServicecatalogCloudformationProductSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductSourceConnection;

ServicecatalogCloudformationProductSourceConnection.builder()
//  .connectionParameters(ServicecatalogCloudformationProductSourceConnectionConnectionParameters)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters">connectionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | The connection details based on the connection Type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type">type</a></code> | <code>java.lang.String</code> | The only supported SourceConnection type is Codestar. |

---

##### `connectionParameters`<sup>Optional</sup> <a name="connectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters"></a>

```java
public ServicecatalogCloudformationProductSourceConnectionConnectionParameters getConnectionParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

The connection details based on the connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#connection_parameters ServicecatalogCloudformationProduct#connection_parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The only supported SourceConnection type is Codestar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParameters <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductSourceConnectionConnectionParameters;

ServicecatalogCloudformationProductSourceConnectionConnectionParameters.builder()
//  .codeStar(ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar">codeStar</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}. |

---

##### `codeStar`<sup>Optional</sup> <a name="codeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar"></a>

```java
public ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar getCodeStar();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}.

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar;

ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.builder()
//  .artifactPath(java.lang.String)
//  .branch(java.lang.String)
//  .connectionArn(java.lang.String)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch">branch</a></code> | <code>java.lang.String</code> | The specific branch where the artifact resides. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository">repository</a></code> | <code>java.lang.String</code> | The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.". |

---

##### `artifactPath`<sup>Optional</sup> <a name="artifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#artifact_path ServicecatalogCloudformationProduct#artifact_path}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The specific branch where the artifact resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#branch ServicecatalogCloudformationProduct#branch}

---

##### `connectionArn`<sup>Optional</sup> <a name="connectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#connection_arn ServicecatalogCloudformationProduct#connection_arn}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#repository ServicecatalogCloudformationProduct#repository}

---

### ServicecatalogCloudformationProductTags <a name="ServicecatalogCloudformationProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductTags;

ServicecatalogCloudformationProductTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#key ServicecatalogCloudformationProduct#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_cloudformation_product#value ServicecatalogCloudformationProduct#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference;

new ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId">resetImportFromPhysicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl">resetLoadTemplateFromUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImportFromPhysicalId` <a name="resetImportFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId"></a>

```java
public void resetImportFromPhysicalId()
```

##### `resetLoadTemplateFromUrl` <a name="resetLoadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl"></a>

```java
public void resetLoadTemplateFromUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput">importFromPhysicalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput">loadTemplateFromUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId">importFromPhysicalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl">loadTemplateFromUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `importFromPhysicalIdInput`<sup>Optional</sup> <a name="importFromPhysicalIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput"></a>

```java
public java.lang.String getImportFromPhysicalIdInput();
```

- *Type:* java.lang.String

---

##### `loadTemplateFromUrlInput`<sup>Optional</sup> <a name="loadTemplateFromUrlInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput"></a>

```java
public java.lang.String getLoadTemplateFromUrlInput();
```

- *Type:* java.lang.String

---

##### `importFromPhysicalId`<sup>Required</sup> <a name="importFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId"></a>

```java
public java.lang.String getImportFromPhysicalId();
```

- *Type:* java.lang.String

---

##### `loadTemplateFromUrl`<sup>Required</sup> <a name="loadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl"></a>

```java
public java.lang.String getLoadTemplateFromUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProductProvisioningArtifactParametersInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersList <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductProvisioningArtifactParametersList;

new ServicecatalogCloudformationProductProvisioningArtifactParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get"></a>

```java
public ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProductProvisioningArtifactParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>>

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference;

new ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo">putInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation">resetDisableTemplateValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo">resetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfo` <a name="putInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo"></a>

```java
public void putInfo(ServicecatalogCloudformationProductProvisioningArtifactParametersInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableTemplateValidation` <a name="resetDisableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation"></a>

```java
public void resetDisableTemplateValidation()
```

##### `resetInfo` <a name="resetInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo"></a>

```java
public void resetInfo()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput">disableTemplateValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput">infoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info"></a>

```java
public ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference getInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableTemplateValidationInput`<sup>Optional</sup> <a name="disableTemplateValidationInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableTemplateValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `infoInput`<sup>Optional</sup> <a name="infoInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput"></a>

```java
public IResolvable|ServicecatalogCloudformationProductProvisioningArtifactParametersInfo getInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableTemplateValidation`<sup>Required</sup> <a name="disableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableTemplateValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProductProvisioningArtifactParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference;

new ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath">resetArtifactPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn">resetConnectionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactPath` <a name="resetArtifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath"></a>

```java
public void resetArtifactPath()
```

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetConnectionArn` <a name="resetConnectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn"></a>

```java
public void resetConnectionArn()
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput">artifactPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput">connectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput"></a>

```java
public java.lang.String getArtifactPathInput();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput"></a>

```java
public java.lang.String getConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference;

new ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar">putCodeStar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar">resetCodeStar</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeStar` <a name="putCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar"></a>

```java
public void putCodeStar(ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---

##### `resetCodeStar` <a name="resetCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar"></a>

```java
public void resetCodeStar()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar">codeStar</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput">codeStarInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeStar`<sup>Required</sup> <a name="codeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar"></a>

```java
public ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference getCodeStar();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a>

---

##### `codeStarInput`<sup>Optional</sup> <a name="codeStarInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput"></a>

```java
public IResolvable|ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar getCodeStarInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProductSourceConnectionConnectionParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---


### ServicecatalogCloudformationProductSourceConnectionOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductSourceConnectionOutputReference;

new ServicecatalogCloudformationProductSourceConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters">putConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters">resetConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectionParameters` <a name="putConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters"></a>

```java
public void putConnectionParameters(ServicecatalogCloudformationProductSourceConnectionConnectionParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---

##### `resetConnectionParameters` <a name="resetConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters"></a>

```java
public void resetConnectionParameters()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters">connectionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput">connectionParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionParameters`<sup>Required</sup> <a name="connectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters"></a>

```java
public ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference getConnectionParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a>

---

##### `connectionParametersInput`<sup>Optional</sup> <a name="connectionParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput"></a>

```java
public IResolvable|ServicecatalogCloudformationProductSourceConnectionConnectionParameters getConnectionParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProductSourceConnection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---


### ServicecatalogCloudformationProductTagsList <a name="ServicecatalogCloudformationProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductTagsList;

new ServicecatalogCloudformationProductTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get"></a>

```java
public ServicecatalogCloudformationProductTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProductTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>>

---


### ServicecatalogCloudformationProductTagsOutputReference <a name="ServicecatalogCloudformationProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_product.ServicecatalogCloudformationProductTagsOutputReference;

new ServicecatalogCloudformationProductTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProductTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>

---



