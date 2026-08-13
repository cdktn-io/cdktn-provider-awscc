# `servicecatalogCloudformationProvisionedProduct` Submodule <a name="`servicecatalogCloudformationProvisionedProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProvisionedProduct <a name="ServicecatalogCloudformationProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  accept_language: str = None,
  notification_arns: typing.List[str] = None,
  path_id: str = None,
  path_name: str = None,
  product_id: str = None,
  product_name: str = None,
  provisioned_product_name: str = None,
  provisioning_artifact_id: str = None,
  provisioning_artifact_name: str = None,
  provisioning_parameters: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductProvisioningParameters] = None,
  provisioning_preferences: ServicecatalogCloudformationProvisionedProductProvisioningPreferences = None,
  tags: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathId">path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathName">path_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productName">product_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisionedProductName">provisioned_product_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactName">provisioning_artifact_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningParameters">provisioning_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningPreferences">provisioning_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}.

---

##### `notification_arns`<sup>Optional</sup> <a name="notification_arns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.notificationArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}.

---

##### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}.

---

##### `path_name`<sup>Optional</sup> <a name="path_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.pathName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}.

---

##### `product_name`<sup>Optional</sup> <a name="product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.productName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}.

---

##### `provisioned_product_name`<sup>Optional</sup> <a name="provisioned_product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisionedProductName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}.

---

##### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioning_artifact_name`<sup>Optional</sup> <a name="provisioning_artifact_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningArtifactName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioning_parameters`<sup>Optional</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}.

---

##### `provisioning_preferences`<sup>Optional</sup> <a name="provisioning_preferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioningPreferences"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters">put_provisioning_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences">put_provisioning_preferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns">reset_notification_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId">reset_path_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName">reset_path_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId">reset_product_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName">reset_product_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName">reset_provisioned_product_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId">reset_provisioning_artifact_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName">reset_provisioning_artifact_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters">reset_provisioning_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences">reset_provisioning_preferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provisioning_parameters` <a name="put_provisioning_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters"></a>

```python
def put_provisioning_parameters(
  value: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductProvisioningParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]

---

##### `put_provisioning_preferences` <a name="put_provisioning_preferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences"></a>

```python
def put_provisioning_preferences(
  stack_set_accounts: typing.List[str] = None,
  stack_set_failure_tolerance_count: typing.Union[int, float] = None,
  stack_set_failure_tolerance_percentage: typing.Union[int, float] = None,
  stack_set_max_concurrency_count: typing.Union[int, float] = None,
  stack_set_max_concurrency_percentage: typing.Union[int, float] = None,
  stack_set_operation_type: str = None,
  stack_set_regions: typing.List[str] = None
) -> None
```

###### `stack_set_accounts`<sup>Optional</sup> <a name="stack_set_accounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.stackSetAccounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}.

---

###### `stack_set_failure_tolerance_count`<sup>Optional</sup> <a name="stack_set_failure_tolerance_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.stackSetFailureToleranceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}.

---

###### `stack_set_failure_tolerance_percentage`<sup>Optional</sup> <a name="stack_set_failure_tolerance_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.stackSetFailureTolerancePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}.

---

###### `stack_set_max_concurrency_count`<sup>Optional</sup> <a name="stack_set_max_concurrency_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.stackSetMaxConcurrencyCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}.

---

###### `stack_set_max_concurrency_percentage`<sup>Optional</sup> <a name="stack_set_max_concurrency_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.stackSetMaxConcurrencyPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}.

---

###### `stack_set_operation_type`<sup>Optional</sup> <a name="stack_set_operation_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.stackSetOperationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}.

---

###### `stack_set_regions`<sup>Optional</sup> <a name="stack_set_regions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.stackSetRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_notification_arns` <a name="reset_notification_arns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns"></a>

```python
def reset_notification_arns() -> None
```

##### `reset_path_id` <a name="reset_path_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId"></a>

```python
def reset_path_id() -> None
```

##### `reset_path_name` <a name="reset_path_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName"></a>

```python
def reset_path_name() -> None
```

##### `reset_product_id` <a name="reset_product_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId"></a>

```python
def reset_product_id() -> None
```

##### `reset_product_name` <a name="reset_product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName"></a>

```python
def reset_product_name() -> None
```

##### `reset_provisioned_product_name` <a name="reset_provisioned_product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName"></a>

```python
def reset_provisioned_product_name() -> None
```

##### `reset_provisioning_artifact_id` <a name="reset_provisioning_artifact_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId"></a>

```python
def reset_provisioning_artifact_id() -> None
```

##### `reset_provisioning_artifact_name` <a name="reset_provisioning_artifact_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName"></a>

```python
def reset_provisioning_artifact_name() -> None
```

##### `reset_provisioning_parameters` <a name="reset_provisioning_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters"></a>

```python
def reset_provisioning_parameters() -> None
```

##### `reset_provisioning_preferences` <a name="reset_provisioning_preferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences"></a>

```python
def reset_provisioning_preferences() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogCloudformationProvisionedProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogCloudformationProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn">cloudformation_stack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs">outputs</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId">provisioned_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters">provisioning_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences">provisioning_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId">record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput">notification_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput">path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput">path_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput">product_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput">provisioned_product_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput">provisioning_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput">provisioning_artifact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput">provisioning_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput">provisioning_preferences_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId">path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName">path_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName">provisioned_product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName">provisioning_artifact_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloudformation_stack_arn`<sup>Required</sup> <a name="cloudformation_stack_arn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn"></a>

```python
cloudformation_stack_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs"></a>

```python
outputs: StringMap
```

- *Type:* cdktn.StringMap

---

##### `provisioned_product_id`<sup>Required</sup> <a name="provisioned_product_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId"></a>

```python
provisioned_product_id: str
```

- *Type:* str

---

##### `provisioning_parameters`<sup>Required</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters"></a>

```python
provisioning_parameters: ServicecatalogCloudformationProvisionedProductProvisioningParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a>

---

##### `provisioning_preferences`<sup>Required</sup> <a name="provisioning_preferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences"></a>

```python
provisioning_preferences: ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a>

---

##### `record_id`<sup>Required</sup> <a name="record_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId"></a>

```python
record_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags"></a>

```python
tags: ServicecatalogCloudformationProvisionedProductTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `notification_arns_input`<sup>Optional</sup> <a name="notification_arns_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput"></a>

```python
notification_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_id_input`<sup>Optional</sup> <a name="path_id_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput"></a>

```python
path_id_input: str
```

- *Type:* str

---

##### `path_name_input`<sup>Optional</sup> <a name="path_name_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput"></a>

```python
path_name_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `product_name_input`<sup>Optional</sup> <a name="product_name_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput"></a>

```python
product_name_input: str
```

- *Type:* str

---

##### `provisioned_product_name_input`<sup>Optional</sup> <a name="provisioned_product_name_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput"></a>

```python
provisioned_product_name_input: str
```

- *Type:* str

---

##### `provisioning_artifact_id_input`<sup>Optional</sup> <a name="provisioning_artifact_id_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput"></a>

```python
provisioning_artifact_id_input: str
```

- *Type:* str

---

##### `provisioning_artifact_name_input`<sup>Optional</sup> <a name="provisioning_artifact_name_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput"></a>

```python
provisioning_artifact_name_input: str
```

- *Type:* str

---

##### `provisioning_parameters_input`<sup>Optional</sup> <a name="provisioning_parameters_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput"></a>

```python
provisioning_parameters_input: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductProvisioningParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]

---

##### `provisioning_preferences_input`<sup>Optional</sup> <a name="provisioning_preferences_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput"></a>

```python
provisioning_preferences_input: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningPreferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `notification_arns`<sup>Required</sup> <a name="notification_arns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns"></a>

```python
notification_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_id`<sup>Required</sup> <a name="path_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

---

##### `path_name`<sup>Required</sup> <a name="path_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName"></a>

```python
path_name: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `provisioned_product_name`<sup>Required</sup> <a name="provisioned_product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName"></a>

```python
provisioned_product_name: str
```

- *Type:* str

---

##### `provisioning_artifact_id`<sup>Required</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

---

##### `provisioning_artifact_name`<sup>Required</sup> <a name="provisioning_artifact_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName"></a>

```python
provisioning_artifact_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProvisionedProductConfig <a name="ServicecatalogCloudformationProvisionedProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  accept_language: str = None,
  notification_arns: typing.List[str] = None,
  path_id: str = None,
  path_name: str = None,
  product_id: str = None,
  product_name: str = None,
  provisioned_product_name: str = None,
  provisioning_artifact_id: str = None,
  provisioning_artifact_name: str = None,
  provisioning_parameters: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductProvisioningParameters] = None,
  provisioning_preferences: ServicecatalogCloudformationProvisionedProductProvisioningPreferences = None,
  tags: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId">path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName">path_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName">product_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName">provisioned_product_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName">provisioning_artifact_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters">provisioning_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences">provisioning_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}.

---

##### `notification_arns`<sup>Optional</sup> <a name="notification_arns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns"></a>

```python
notification_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}.

---

##### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}.

---

##### `path_name`<sup>Optional</sup> <a name="path_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName"></a>

```python
path_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}.

---

##### `product_name`<sup>Optional</sup> <a name="product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName"></a>

```python
product_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}.

---

##### `provisioned_product_name`<sup>Optional</sup> <a name="provisioned_product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName"></a>

```python
provisioned_product_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}.

---

##### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioning_artifact_name`<sup>Optional</sup> <a name="provisioning_artifact_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName"></a>

```python
provisioning_artifact_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioning_parameters`<sup>Optional</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters"></a>

```python
provisioning_parameters: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductProvisioningParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}.

---

##### `provisioning_preferences`<sup>Optional</sup> <a name="provisioning_preferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences"></a>

```python
provisioning_preferences: ServicecatalogCloudformationProvisionedProductProvisioningPreferences
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningParameters <a name="ServicecatalogCloudformationProvisionedProductProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningPreferences <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences(
  stack_set_accounts: typing.List[str] = None,
  stack_set_failure_tolerance_count: typing.Union[int, float] = None,
  stack_set_failure_tolerance_percentage: typing.Union[int, float] = None,
  stack_set_max_concurrency_count: typing.Union[int, float] = None,
  stack_set_max_concurrency_percentage: typing.Union[int, float] = None,
  stack_set_operation_type: str = None,
  stack_set_regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts">stack_set_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount">stack_set_failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage">stack_set_failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount">stack_set_max_concurrency_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage">stack_set_max_concurrency_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType">stack_set_operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions">stack_set_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}. |

---

##### `stack_set_accounts`<sup>Optional</sup> <a name="stack_set_accounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts"></a>

```python
stack_set_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}.

---

##### `stack_set_failure_tolerance_count`<sup>Optional</sup> <a name="stack_set_failure_tolerance_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount"></a>

```python
stack_set_failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}.

---

##### `stack_set_failure_tolerance_percentage`<sup>Optional</sup> <a name="stack_set_failure_tolerance_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage"></a>

```python
stack_set_failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}.

---

##### `stack_set_max_concurrency_count`<sup>Optional</sup> <a name="stack_set_max_concurrency_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount"></a>

```python
stack_set_max_concurrency_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}.

---

##### `stack_set_max_concurrency_percentage`<sup>Optional</sup> <a name="stack_set_max_concurrency_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage"></a>

```python
stack_set_max_concurrency_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}.

---

##### `stack_set_operation_type`<sup>Optional</sup> <a name="stack_set_operation_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType"></a>

```python
stack_set_operation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}.

---

##### `stack_set_regions`<sup>Optional</sup> <a name="stack_set_regions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions"></a>

```python
stack_set_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}.

---

### ServicecatalogCloudformationProvisionedProductTags <a name="ServicecatalogCloudformationProvisionedProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProvisionedProductProvisioningParametersList <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductProvisioningParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>]

---


### ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>

---


### ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts">reset_stack_set_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount">reset_stack_set_failure_tolerance_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage">reset_stack_set_failure_tolerance_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount">reset_stack_set_max_concurrency_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage">reset_stack_set_max_concurrency_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType">reset_stack_set_operation_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions">reset_stack_set_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_stack_set_accounts` <a name="reset_stack_set_accounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts"></a>

```python
def reset_stack_set_accounts() -> None
```

##### `reset_stack_set_failure_tolerance_count` <a name="reset_stack_set_failure_tolerance_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount"></a>

```python
def reset_stack_set_failure_tolerance_count() -> None
```

##### `reset_stack_set_failure_tolerance_percentage` <a name="reset_stack_set_failure_tolerance_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage"></a>

```python
def reset_stack_set_failure_tolerance_percentage() -> None
```

##### `reset_stack_set_max_concurrency_count` <a name="reset_stack_set_max_concurrency_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount"></a>

```python
def reset_stack_set_max_concurrency_count() -> None
```

##### `reset_stack_set_max_concurrency_percentage` <a name="reset_stack_set_max_concurrency_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage"></a>

```python
def reset_stack_set_max_concurrency_percentage() -> None
```

##### `reset_stack_set_operation_type` <a name="reset_stack_set_operation_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType"></a>

```python
def reset_stack_set_operation_type() -> None
```

##### `reset_stack_set_regions` <a name="reset_stack_set_regions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions"></a>

```python
def reset_stack_set_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput">stack_set_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput">stack_set_failure_tolerance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput">stack_set_failure_tolerance_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput">stack_set_max_concurrency_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput">stack_set_max_concurrency_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput">stack_set_operation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput">stack_set_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts">stack_set_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount">stack_set_failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage">stack_set_failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount">stack_set_max_concurrency_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage">stack_set_max_concurrency_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType">stack_set_operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions">stack_set_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_set_accounts_input`<sup>Optional</sup> <a name="stack_set_accounts_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput"></a>

```python
stack_set_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stack_set_failure_tolerance_count_input`<sup>Optional</sup> <a name="stack_set_failure_tolerance_count_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput"></a>

```python
stack_set_failure_tolerance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_failure_tolerance_percentage_input`<sup>Optional</sup> <a name="stack_set_failure_tolerance_percentage_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput"></a>

```python
stack_set_failure_tolerance_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_max_concurrency_count_input`<sup>Optional</sup> <a name="stack_set_max_concurrency_count_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput"></a>

```python
stack_set_max_concurrency_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_max_concurrency_percentage_input`<sup>Optional</sup> <a name="stack_set_max_concurrency_percentage_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput"></a>

```python
stack_set_max_concurrency_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_operation_type_input`<sup>Optional</sup> <a name="stack_set_operation_type_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput"></a>

```python
stack_set_operation_type_input: str
```

- *Type:* str

---

##### `stack_set_regions_input`<sup>Optional</sup> <a name="stack_set_regions_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput"></a>

```python
stack_set_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stack_set_accounts`<sup>Required</sup> <a name="stack_set_accounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts"></a>

```python
stack_set_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stack_set_failure_tolerance_count`<sup>Required</sup> <a name="stack_set_failure_tolerance_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount"></a>

```python
stack_set_failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_failure_tolerance_percentage`<sup>Required</sup> <a name="stack_set_failure_tolerance_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage"></a>

```python
stack_set_failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_max_concurrency_count`<sup>Required</sup> <a name="stack_set_max_concurrency_count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount"></a>

```python
stack_set_max_concurrency_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_max_concurrency_percentage`<sup>Required</sup> <a name="stack_set_max_concurrency_percentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage"></a>

```python
stack_set_max_concurrency_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_operation_type`<sup>Required</sup> <a name="stack_set_operation_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType"></a>

```python
stack_set_operation_type: str
```

- *Type:* str

---

##### `stack_set_regions`<sup>Required</sup> <a name="stack_set_regions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions"></a>

```python
stack_set_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningPreferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---


### ServicecatalogCloudformationProvisionedProductTagsList <a name="ServicecatalogCloudformationProvisionedProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicecatalogCloudformationProvisionedProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicecatalogCloudformationProvisionedProductTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>]

---


### ServicecatalogCloudformationProvisionedProductTagsOutputReference <a name="ServicecatalogCloudformationProvisionedProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_provisioned_product

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProvisionedProductTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>

---



