# `servicecatalogCloudformationProvisionedProduct` Submodule <a name="`servicecatalogCloudformationProvisionedProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProvisionedProduct <a name="ServicecatalogCloudformationProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProduct;

ServicecatalogCloudformationProvisionedProduct.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptLanguage(java.lang.String)
//  .notificationArns(java.util.List<java.lang.String>)
//  .pathId(java.lang.String)
//  .pathName(java.lang.String)
//  .productId(java.lang.String)
//  .productName(java.lang.String)
//  .provisionedProductName(java.lang.String)
//  .provisioningArtifactId(java.lang.String)
//  .provisioningArtifactName(java.lang.String)
//  .provisioningParameters(IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductProvisioningParameters>)
//  .provisioningPreferences(ServicecatalogCloudformationProvisionedProductProvisioningPreferences)
//  .tags(IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathId">pathId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathName">pathName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productName">productName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisionedProductName">provisionedProductName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactId">provisioningArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactName">provisioningArtifactName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningParameters">provisioningParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningPreferences">provisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.notificationArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}.

---

##### `pathId`<sup>Optional</sup> <a name="pathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}.

---

##### `pathName`<sup>Optional</sup> <a name="pathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}.

---

##### `productName`<sup>Optional</sup> <a name="productName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}.

---

##### `provisionedProductName`<sup>Optional</sup> <a name="provisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisionedProductName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}.

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="provisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioningParameters`<sup>Optional</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}.

---

##### `provisioningPreferences`<sup>Optional</sup> <a name="provisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningPreferences"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters">putProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences">putProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns">resetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId">resetPathId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName">resetPathName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName">resetProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName">resetProvisionedProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId">resetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName">resetProvisioningArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters">resetProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences">resetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProvisioningParameters` <a name="putProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters"></a>

```java
public void putProvisioningParameters(IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductProvisioningParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>>

---

##### `putProvisioningPreferences` <a name="putProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences"></a>

```java
public void putProvisioningPreferences(ServicecatalogCloudformationProvisionedProductProvisioningPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetNotificationArns` <a name="resetNotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns"></a>

```java
public void resetNotificationArns()
```

##### `resetPathId` <a name="resetPathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId"></a>

```java
public void resetPathId()
```

##### `resetPathName` <a name="resetPathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName"></a>

```java
public void resetPathName()
```

##### `resetProductId` <a name="resetProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId"></a>

```java
public void resetProductId()
```

##### `resetProductName` <a name="resetProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName"></a>

```java
public void resetProductName()
```

##### `resetProvisionedProductName` <a name="resetProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName"></a>

```java
public void resetProvisionedProductName()
```

##### `resetProvisioningArtifactId` <a name="resetProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId"></a>

```java
public void resetProvisioningArtifactId()
```

##### `resetProvisioningArtifactName` <a name="resetProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName"></a>

```java
public void resetProvisioningArtifactName()
```

##### `resetProvisioningParameters` <a name="resetProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters"></a>

```java
public void resetProvisioningParameters()
```

##### `resetProvisioningPreferences` <a name="resetProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences"></a>

```java
public void resetProvisioningPreferences()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProduct;

ServicecatalogCloudformationProvisionedProduct.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProduct;

ServicecatalogCloudformationProvisionedProduct.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProduct;

ServicecatalogCloudformationProvisionedProduct.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProduct;

ServicecatalogCloudformationProvisionedProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicecatalogCloudformationProvisionedProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicecatalogCloudformationProvisionedProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicecatalogCloudformationProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs">outputs</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId">provisionedProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters">provisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences">provisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId">recordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput">notificationArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput">pathIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput">pathNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput">productNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput">provisionedProductNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput">provisioningArtifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput">provisioningArtifactNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput">provisioningParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput">provisioningPreferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId">pathId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName">pathName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName">productName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName">provisionedProductName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName">provisioningArtifactName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudformationStackArn`<sup>Required</sup> <a name="cloudformationStackArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn"></a>

```java
public java.lang.String getCloudformationStackArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs"></a>

```java
public StringMap getOutputs();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `provisionedProductId`<sup>Required</sup> <a name="provisionedProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId"></a>

```java
public java.lang.String getProvisionedProductId();
```

- *Type:* java.lang.String

---

##### `provisioningParameters`<sup>Required</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters"></a>

```java
public ServicecatalogCloudformationProvisionedProductProvisioningParametersList getProvisioningParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a>

---

##### `provisioningPreferences`<sup>Required</sup> <a name="provisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences"></a>

```java
public ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference getProvisioningPreferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a>

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId"></a>

```java
public java.lang.String getRecordId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags"></a>

```java
public ServicecatalogCloudformationProvisionedProductTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `notificationArnsInput`<sup>Optional</sup> <a name="notificationArnsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathIdInput`<sup>Optional</sup> <a name="pathIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput"></a>

```java
public java.lang.String getPathIdInput();
```

- *Type:* java.lang.String

---

##### `pathNameInput`<sup>Optional</sup> <a name="pathNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput"></a>

```java
public java.lang.String getPathNameInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `productNameInput`<sup>Optional</sup> <a name="productNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput"></a>

```java
public java.lang.String getProductNameInput();
```

- *Type:* java.lang.String

---

##### `provisionedProductNameInput`<sup>Optional</sup> <a name="provisionedProductNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput"></a>

```java
public java.lang.String getProvisionedProductNameInput();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactIdInput`<sup>Optional</sup> <a name="provisioningArtifactIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput"></a>

```java
public java.lang.String getProvisioningArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactNameInput`<sup>Optional</sup> <a name="provisioningArtifactNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput"></a>

```java
public java.lang.String getProvisioningArtifactNameInput();
```

- *Type:* java.lang.String

---

##### `provisioningParametersInput`<sup>Optional</sup> <a name="provisioningParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductProvisioningParameters> getProvisioningParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>>

---

##### `provisioningPreferencesInput`<sup>Optional</sup> <a name="provisioningPreferencesInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput"></a>

```java
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningPreferences getProvisioningPreferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>>

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns"></a>

```java
public java.util.List<java.lang.String> getNotificationArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId"></a>

```java
public java.lang.String getPathId();
```

- *Type:* java.lang.String

---

##### `pathName`<sup>Required</sup> <a name="pathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName"></a>

```java
public java.lang.String getPathName();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName"></a>

```java
public java.lang.String getProductName();
```

- *Type:* java.lang.String

---

##### `provisionedProductName`<sup>Required</sup> <a name="provisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName"></a>

```java
public java.lang.String getProvisionedProductName();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId"></a>

```java
public java.lang.String getProvisioningArtifactId();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactName`<sup>Required</sup> <a name="provisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName"></a>

```java
public java.lang.String getProvisioningArtifactName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProvisionedProductConfig <a name="ServicecatalogCloudformationProvisionedProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductConfig;

ServicecatalogCloudformationProvisionedProductConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptLanguage(java.lang.String)
//  .notificationArns(java.util.List<java.lang.String>)
//  .pathId(java.lang.String)
//  .pathName(java.lang.String)
//  .productId(java.lang.String)
//  .productName(java.lang.String)
//  .provisionedProductName(java.lang.String)
//  .provisioningArtifactId(java.lang.String)
//  .provisioningArtifactName(java.lang.String)
//  .provisioningParameters(IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductProvisioningParameters>)
//  .provisioningPreferences(ServicecatalogCloudformationProvisionedProductProvisioningPreferences)
//  .tags(IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId">pathId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName">pathName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName">productName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName">provisionedProductName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName">provisioningArtifactName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters">provisioningParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences">provisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns"></a>

```java
public java.util.List<java.lang.String> getNotificationArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}.

---

##### `pathId`<sup>Optional</sup> <a name="pathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId"></a>

```java
public java.lang.String getPathId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}.

---

##### `pathName`<sup>Optional</sup> <a name="pathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName"></a>

```java
public java.lang.String getPathName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}.

---

##### `productName`<sup>Optional</sup> <a name="productName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName"></a>

```java
public java.lang.String getProductName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}.

---

##### `provisionedProductName`<sup>Optional</sup> <a name="provisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName"></a>

```java
public java.lang.String getProvisionedProductName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}.

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId"></a>

```java
public java.lang.String getProvisioningArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="provisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName"></a>

```java
public java.lang.String getProvisioningArtifactName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioningParameters`<sup>Optional</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductProvisioningParameters> getProvisioningParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}.

---

##### `provisioningPreferences`<sup>Optional</sup> <a name="provisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences"></a>

```java
public ServicecatalogCloudformationProvisionedProductProvisioningPreferences getProvisioningPreferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningParameters <a name="ServicecatalogCloudformationProvisionedProductProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductProvisioningParameters;

ServicecatalogCloudformationProvisionedProductProvisioningParameters.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningPreferences <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductProvisioningPreferences;

ServicecatalogCloudformationProvisionedProductProvisioningPreferences.builder()
//  .stackSetAccounts(java.util.List<java.lang.String>)
//  .stackSetFailureToleranceCount(java.lang.Number)
//  .stackSetFailureTolerancePercentage(java.lang.Number)
//  .stackSetMaxConcurrencyCount(java.lang.Number)
//  .stackSetMaxConcurrencyPercentage(java.lang.Number)
//  .stackSetOperationType(java.lang.String)
//  .stackSetRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts">stackSetAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount">stackSetFailureToleranceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage">stackSetFailureTolerancePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount">stackSetMaxConcurrencyCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage">stackSetMaxConcurrencyPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType">stackSetOperationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions">stackSetRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}. |

---

##### `stackSetAccounts`<sup>Optional</sup> <a name="stackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts"></a>

```java
public java.util.List<java.lang.String> getStackSetAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}.

---

##### `stackSetFailureToleranceCount`<sup>Optional</sup> <a name="stackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount"></a>

```java
public java.lang.Number getStackSetFailureToleranceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}.

---

##### `stackSetFailureTolerancePercentage`<sup>Optional</sup> <a name="stackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage"></a>

```java
public java.lang.Number getStackSetFailureTolerancePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}.

---

##### `stackSetMaxConcurrencyCount`<sup>Optional</sup> <a name="stackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount"></a>

```java
public java.lang.Number getStackSetMaxConcurrencyCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}.

---

##### `stackSetMaxConcurrencyPercentage`<sup>Optional</sup> <a name="stackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage"></a>

```java
public java.lang.Number getStackSetMaxConcurrencyPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}.

---

##### `stackSetOperationType`<sup>Optional</sup> <a name="stackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType"></a>

```java
public java.lang.String getStackSetOperationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}.

---

##### `stackSetRegions`<sup>Optional</sup> <a name="stackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions"></a>

```java
public java.util.List<java.lang.String> getStackSetRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}.

---

### ServicecatalogCloudformationProvisionedProductTags <a name="ServicecatalogCloudformationProvisionedProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductTags;

ServicecatalogCloudformationProvisionedProductTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProvisionedProductProvisioningParametersList <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductProvisioningParametersList;

new ServicecatalogCloudformationProvisionedProductProvisioningParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get"></a>

```java
public ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductProvisioningParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>>

---


### ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference;

new ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>

---


### ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference;

new ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts">resetStackSetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount">resetStackSetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage">resetStackSetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount">resetStackSetMaxConcurrencyCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage">resetStackSetMaxConcurrencyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType">resetStackSetOperationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions">resetStackSetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStackSetAccounts` <a name="resetStackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts"></a>

```java
public void resetStackSetAccounts()
```

##### `resetStackSetFailureToleranceCount` <a name="resetStackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount"></a>

```java
public void resetStackSetFailureToleranceCount()
```

##### `resetStackSetFailureTolerancePercentage` <a name="resetStackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage"></a>

```java
public void resetStackSetFailureTolerancePercentage()
```

##### `resetStackSetMaxConcurrencyCount` <a name="resetStackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount"></a>

```java
public void resetStackSetMaxConcurrencyCount()
```

##### `resetStackSetMaxConcurrencyPercentage` <a name="resetStackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage"></a>

```java
public void resetStackSetMaxConcurrencyPercentage()
```

##### `resetStackSetOperationType` <a name="resetStackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType"></a>

```java
public void resetStackSetOperationType()
```

##### `resetStackSetRegions` <a name="resetStackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions"></a>

```java
public void resetStackSetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput">stackSetAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput">stackSetFailureToleranceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput">stackSetFailureTolerancePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput">stackSetMaxConcurrencyCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput">stackSetMaxConcurrencyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput">stackSetOperationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput">stackSetRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts">stackSetAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount">stackSetFailureToleranceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage">stackSetFailureTolerancePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount">stackSetMaxConcurrencyCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage">stackSetMaxConcurrencyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType">stackSetOperationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions">stackSetRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stackSetAccountsInput`<sup>Optional</sup> <a name="stackSetAccountsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput"></a>

```java
public java.util.List<java.lang.String> getStackSetAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackSetFailureToleranceCountInput`<sup>Optional</sup> <a name="stackSetFailureToleranceCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput"></a>

```java
public java.lang.Number getStackSetFailureToleranceCountInput();
```

- *Type:* java.lang.Number

---

##### `stackSetFailureTolerancePercentageInput`<sup>Optional</sup> <a name="stackSetFailureTolerancePercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput"></a>

```java
public java.lang.Number getStackSetFailureTolerancePercentageInput();
```

- *Type:* java.lang.Number

---

##### `stackSetMaxConcurrencyCountInput`<sup>Optional</sup> <a name="stackSetMaxConcurrencyCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput"></a>

```java
public java.lang.Number getStackSetMaxConcurrencyCountInput();
```

- *Type:* java.lang.Number

---

##### `stackSetMaxConcurrencyPercentageInput`<sup>Optional</sup> <a name="stackSetMaxConcurrencyPercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput"></a>

```java
public java.lang.Number getStackSetMaxConcurrencyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `stackSetOperationTypeInput`<sup>Optional</sup> <a name="stackSetOperationTypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput"></a>

```java
public java.lang.String getStackSetOperationTypeInput();
```

- *Type:* java.lang.String

---

##### `stackSetRegionsInput`<sup>Optional</sup> <a name="stackSetRegionsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput"></a>

```java
public java.util.List<java.lang.String> getStackSetRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackSetAccounts`<sup>Required</sup> <a name="stackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts"></a>

```java
public java.util.List<java.lang.String> getStackSetAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackSetFailureToleranceCount`<sup>Required</sup> <a name="stackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount"></a>

```java
public java.lang.Number getStackSetFailureToleranceCount();
```

- *Type:* java.lang.Number

---

##### `stackSetFailureTolerancePercentage`<sup>Required</sup> <a name="stackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage"></a>

```java
public java.lang.Number getStackSetFailureTolerancePercentage();
```

- *Type:* java.lang.Number

---

##### `stackSetMaxConcurrencyCount`<sup>Required</sup> <a name="stackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount"></a>

```java
public java.lang.Number getStackSetMaxConcurrencyCount();
```

- *Type:* java.lang.Number

---

##### `stackSetMaxConcurrencyPercentage`<sup>Required</sup> <a name="stackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage"></a>

```java
public java.lang.Number getStackSetMaxConcurrencyPercentage();
```

- *Type:* java.lang.Number

---

##### `stackSetOperationType`<sup>Required</sup> <a name="stackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType"></a>

```java
public java.lang.String getStackSetOperationType();
```

- *Type:* java.lang.String

---

##### `stackSetRegions`<sup>Required</sup> <a name="stackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions"></a>

```java
public java.util.List<java.lang.String> getStackSetRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningPreferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---


### ServicecatalogCloudformationProvisionedProductTagsList <a name="ServicecatalogCloudformationProvisionedProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductTagsList;

new ServicecatalogCloudformationProvisionedProductTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get"></a>

```java
public ServicecatalogCloudformationProvisionedProductTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ServicecatalogCloudformationProvisionedProductTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>>

---


### ServicecatalogCloudformationProvisionedProductTagsOutputReference <a name="ServicecatalogCloudformationProvisionedProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_cloudformation_provisioned_product.ServicecatalogCloudformationProvisionedProductTagsOutputReference;

new ServicecatalogCloudformationProvisionedProductTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogCloudformationProvisionedProductTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>

---



