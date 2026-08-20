# `servicecatalogCloudformationProduct` Submodule <a name="`servicecatalogCloudformationProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProduct <a name="ServicecatalogCloudformationProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  owner: str,
  accept_language: str = None,
  description: str = None,
  distributor: str = None,
  product_type: str = None,
  provisioning_artifact_parameters: IResolvable | typing.List[ServicecatalogCloudformationProductProvisioningArtifactParameters] = None,
  replace_provisioning_artifacts: bool | IResolvable = None,
  source_connection: ServicecatalogCloudformationProductSourceConnection = None,
  support_description: str = None,
  support_email: str = None,
  support_url: str = None,
  tags: IResolvable | typing.List[ServicecatalogCloudformationProductTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.owner">owner</a></code> | <code>str</code> | The owner of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.distributor">distributor</a></code> | <code>str</code> | The distributor of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.productType">product_type</a></code> | <code>str</code> | The type of product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioningArtifactParameters">provisioning_artifact_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]</code> | The configuration of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.replaceProvisioningArtifacts">replace_provisioning_artifacts</a></code> | <code>bool \| cdktn.IResolvable</code> | This property is turned off by default. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | A top level ProductViewDetail response containing details about the product's connection. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportDescription">support_description</a></code> | <code>str</code> | The support information about the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportEmail">support_email</a></code> | <code>str</code> | The contact email for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportUrl">support_url</a></code> | <code>str</code> | The contact URL for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]</code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.name"></a>

- *Type:* str

The name of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.owner"></a>

- *Type:* str

The owner of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#owner ServicecatalogCloudformationProduct#owner}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#accept_language ServicecatalogCloudformationProduct#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.description"></a>

- *Type:* str

The description of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.distributor"></a>

- *Type:* str

The distributor of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#distributor ServicecatalogCloudformationProduct#distributor}

---

##### `product_type`<sup>Optional</sup> <a name="product_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.productType"></a>

- *Type:* str

The type of product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#product_type ServicecatalogCloudformationProduct#product_type}

---

##### `provisioning_artifact_parameters`<sup>Optional</sup> <a name="provisioning_artifact_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.provisioningArtifactParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]

The configuration of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters ServicecatalogCloudformationProduct#provisioning_artifact_parameters}

---

##### `replace_provisioning_artifacts`<sup>Optional</sup> <a name="replace_provisioning_artifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.replaceProvisioningArtifacts"></a>

- *Type:* bool | cdktn.IResolvable

This property is turned off by default.

If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts ServicecatalogCloudformationProduct#replace_provisioning_artifacts}

---

##### `source_connection`<sup>Optional</sup> <a name="source_connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.sourceConnection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

A top level ProductViewDetail response containing details about the product's connection.

AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#source_connection ServicecatalogCloudformationProduct#source_connection}

---

##### `support_description`<sup>Optional</sup> <a name="support_description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportDescription"></a>

- *Type:* str

The support information about the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_description ServicecatalogCloudformationProduct#support_description}

---

##### `support_email`<sup>Optional</sup> <a name="support_email" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportEmail"></a>

- *Type:* str

The contact email for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_email ServicecatalogCloudformationProduct#support_email}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.supportUrl"></a>

- *Type:* str

The contact URL for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_url ServicecatalogCloudformationProduct#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#tags ServicecatalogCloudformationProduct#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters">put_provisioning_artifact_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection">put_source_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor">reset_distributor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType">reset_product_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters">reset_provisioning_artifact_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts">reset_replace_provisioning_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection">reset_source_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription">reset_support_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail">reset_support_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl">reset_support_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provisioning_artifact_parameters` <a name="put_provisioning_artifact_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters"></a>

```python
def put_provisioning_artifact_parameters(
  value: IResolvable | typing.List[ServicecatalogCloudformationProductProvisioningArtifactParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]

---

##### `put_source_connection` <a name="put_source_connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection"></a>

```python
def put_source_connection(
  connection_parameters: ServicecatalogCloudformationProductSourceConnectionConnectionParameters = None,
  type: str = None
) -> None
```

###### `connection_parameters`<sup>Optional</sup> <a name="connection_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection.parameter.connectionParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

The connection details based on the connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_parameters ServicecatalogCloudformationProduct#connection_parameters}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection.parameter.type"></a>

- *Type:* str

The only supported SourceConnection type is Codestar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ServicecatalogCloudformationProductTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_distributor` <a name="reset_distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor"></a>

```python
def reset_distributor() -> None
```

##### `reset_product_type` <a name="reset_product_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType"></a>

```python
def reset_product_type() -> None
```

##### `reset_provisioning_artifact_parameters` <a name="reset_provisioning_artifact_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters"></a>

```python
def reset_provisioning_artifact_parameters() -> None
```

##### `reset_replace_provisioning_artifacts` <a name="reset_replace_provisioning_artifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts"></a>

```python
def reset_replace_provisioning_artifacts() -> None
```

##### `reset_source_connection` <a name="reset_source_connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection"></a>

```python
def reset_source_connection() -> None
```

##### `reset_support_description` <a name="reset_support_description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription"></a>

```python
def reset_support_description() -> None
```

##### `reset_support_email` <a name="reset_support_email" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail"></a>

```python
def reset_support_email() -> None
```

##### `reset_support_url` <a name="reset_support_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl"></a>

```python
def reset_support_url() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogCloudformationProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogCloudformationProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId">cloudformation_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds">provisioning_artifact_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames">provisioning_artifact_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters">provisioning_artifact_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput">distributor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput">product_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput">provisioning_artifact_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput">replace_provisioning_artifacts_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput">source_connection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput">support_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput">support_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput">support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor">distributor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType">product_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts">replace_provisioning_artifacts</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription">support_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail">support_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloudformation_product_id`<sup>Required</sup> <a name="cloudformation_product_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId"></a>

```python
cloudformation_product_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `provisioning_artifact_ids`<sup>Required</sup> <a name="provisioning_artifact_ids" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds"></a>

```python
provisioning_artifact_ids: str
```

- *Type:* str

---

##### `provisioning_artifact_names`<sup>Required</sup> <a name="provisioning_artifact_names" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames"></a>

```python
provisioning_artifact_names: str
```

- *Type:* str

---

##### `provisioning_artifact_parameters`<sup>Required</sup> <a name="provisioning_artifact_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters"></a>

```python
provisioning_artifact_parameters: ServicecatalogCloudformationProductProvisioningArtifactParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a>

---

##### `source_connection`<sup>Required</sup> <a name="source_connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection"></a>

```python
source_connection: ServicecatalogCloudformationProductSourceConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags"></a>

```python
tags: ServicecatalogCloudformationProductTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distributor_input`<sup>Optional</sup> <a name="distributor_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput"></a>

```python
distributor_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `product_type_input`<sup>Optional</sup> <a name="product_type_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput"></a>

```python
product_type_input: str
```

- *Type:* str

---

##### `provisioning_artifact_parameters_input`<sup>Optional</sup> <a name="provisioning_artifact_parameters_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput"></a>

```python
provisioning_artifact_parameters_input: IResolvable | typing.List[ServicecatalogCloudformationProductProvisioningArtifactParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]

---

##### `replace_provisioning_artifacts_input`<sup>Optional</sup> <a name="replace_provisioning_artifacts_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput"></a>

```python
replace_provisioning_artifacts_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_connection_input`<sup>Optional</sup> <a name="source_connection_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput"></a>

```python
source_connection_input: IResolvable | ServicecatalogCloudformationProductSourceConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---

##### `support_description_input`<sup>Optional</sup> <a name="support_description_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput"></a>

```python
support_description_input: str
```

- *Type:* str

---

##### `support_email_input`<sup>Optional</sup> <a name="support_email_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput"></a>

```python
support_email_input: str
```

- *Type:* str

---

##### `support_url_input`<sup>Optional</sup> <a name="support_url_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput"></a>

```python
support_url_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ServicecatalogCloudformationProductTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distributor`<sup>Required</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor"></a>

```python
distributor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `product_type`<sup>Required</sup> <a name="product_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType"></a>

```python
product_type: str
```

- *Type:* str

---

##### `replace_provisioning_artifacts`<sup>Required</sup> <a name="replace_provisioning_artifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts"></a>

```python
replace_provisioning_artifacts: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `support_description`<sup>Required</sup> <a name="support_description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription"></a>

```python
support_description: str
```

- *Type:* str

---

##### `support_email`<sup>Required</sup> <a name="support_email" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail"></a>

```python
support_email: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProductConfig <a name="ServicecatalogCloudformationProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  owner: str,
  accept_language: str = None,
  description: str = None,
  distributor: str = None,
  product_type: str = None,
  provisioning_artifact_parameters: IResolvable | typing.List[ServicecatalogCloudformationProductProvisioningArtifactParameters] = None,
  replace_provisioning_artifacts: bool | IResolvable = None,
  source_connection: ServicecatalogCloudformationProductSourceConnection = None,
  support_description: str = None,
  support_email: str = None,
  support_url: str = None,
  tags: IResolvable | typing.List[ServicecatalogCloudformationProductTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name">name</a></code> | <code>str</code> | The name of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner">owner</a></code> | <code>str</code> | The owner of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description">description</a></code> | <code>str</code> | The description of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor">distributor</a></code> | <code>str</code> | The distributor of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType">product_type</a></code> | <code>str</code> | The type of product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters">provisioning_artifact_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]</code> | The configuration of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts">replace_provisioning_artifacts</a></code> | <code>bool \| cdktn.IResolvable</code> | This property is turned off by default. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | A top level ProductViewDetail response containing details about the product's connection. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription">support_description</a></code> | <code>str</code> | The support information about the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail">support_email</a></code> | <code>str</code> | The contact email for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl">support_url</a></code> | <code>str</code> | The contact URL for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

The owner of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#owner ServicecatalogCloudformationProduct#owner}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#accept_language ServicecatalogCloudformationProduct#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor"></a>

```python
distributor: str
```

- *Type:* str

The distributor of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#distributor ServicecatalogCloudformationProduct#distributor}

---

##### `product_type`<sup>Optional</sup> <a name="product_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType"></a>

```python
product_type: str
```

- *Type:* str

The type of product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#product_type ServicecatalogCloudformationProduct#product_type}

---

##### `provisioning_artifact_parameters`<sup>Optional</sup> <a name="provisioning_artifact_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters"></a>

```python
provisioning_artifact_parameters: IResolvable | typing.List[ServicecatalogCloudformationProductProvisioningArtifactParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]

The configuration of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters ServicecatalogCloudformationProduct#provisioning_artifact_parameters}

---

##### `replace_provisioning_artifacts`<sup>Optional</sup> <a name="replace_provisioning_artifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts"></a>

```python
replace_provisioning_artifacts: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This property is turned off by default.

If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts ServicecatalogCloudformationProduct#replace_provisioning_artifacts}

---

##### `source_connection`<sup>Optional</sup> <a name="source_connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection"></a>

```python
source_connection: ServicecatalogCloudformationProductSourceConnection
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

A top level ProductViewDetail response containing details about the product's connection.

AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#source_connection ServicecatalogCloudformationProduct#source_connection}

---

##### `support_description`<sup>Optional</sup> <a name="support_description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription"></a>

```python
support_description: str
```

- *Type:* str

The support information about the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_description ServicecatalogCloudformationProduct#support_description}

---

##### `support_email`<sup>Optional</sup> <a name="support_email" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail"></a>

```python
support_email: str
```

- *Type:* str

The contact email for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_email ServicecatalogCloudformationProduct#support_email}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

The contact URL for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_url ServicecatalogCloudformationProduct#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ServicecatalogCloudformationProductTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#tags ServicecatalogCloudformationProduct#tags}

---

### ServicecatalogCloudformationProductProvisioningArtifactParameters <a name="ServicecatalogCloudformationProductProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters(
  description: str = None,
  disable_template_validation: bool | IResolvable = None,
  info: ServicecatalogCloudformationProductProvisioningArtifactParametersInfo = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description">description</a></code> | <code>str</code> | The description of the provisioning artifact, including how it differs from the previous provisioning artifact. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation">disable_template_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | Specify the template source with one of the following options, but not both. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name">name</a></code> | <code>str</code> | The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type">type</a></code> | <code>str</code> | The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the provisioning artifact, including how it differs from the previous provisioning artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `disable_template_validation`<sup>Optional</sup> <a name="disable_template_validation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation"></a>

```python
disable_template_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#disable_template_validation ServicecatalogCloudformationProduct#disable_template_validation}

---

##### `info`<sup>Optional</sup> <a name="info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info"></a>

```python
info: ServicecatalogCloudformationProductProvisioningArtifactParametersInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

Specify the template source with one of the following options, but not both.

Keys accepted: [ LoadTemplateFromURL, ImportFromPhysicalId ] The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:

"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."

ImportFromPhysicalId: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: ImportFromPhysicalId: "arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#info ServicecatalogCloudformationProduct#info}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type"></a>

```python
type: str
```

- *Type:* str

The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfo <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo(
  import_from_physical_id: str = None,
  load_template_from_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId">import_from_physical_id</a></code> | <code>str</code> | The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl">load_template_from_url</a></code> | <code>str</code> | The URL of the AWS CloudFormation template in Amazon S3 in JSON format. |

---

##### `import_from_physical_id`<sup>Optional</sup> <a name="import_from_physical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId"></a>

```python
import_from_physical_id: str
```

- *Type:* str

The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#import_from_physical_id ServicecatalogCloudformationProduct#import_from_physical_id}

---

##### `load_template_from_url`<sup>Optional</sup> <a name="load_template_from_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl"></a>

```python
load_template_from_url: str
```

- *Type:* str

The URL of the AWS CloudFormation template in Amazon S3 in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#load_template_from_url ServicecatalogCloudformationProduct#load_template_from_url}

---

### ServicecatalogCloudformationProductSourceConnection <a name="ServicecatalogCloudformationProductSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection(
  connection_parameters: ServicecatalogCloudformationProductSourceConnectionConnectionParameters = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters">connection_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | The connection details based on the connection Type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type">type</a></code> | <code>str</code> | The only supported SourceConnection type is Codestar. |

---

##### `connection_parameters`<sup>Optional</sup> <a name="connection_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters"></a>

```python
connection_parameters: ServicecatalogCloudformationProductSourceConnectionConnectionParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

The connection details based on the connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_parameters ServicecatalogCloudformationProduct#connection_parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type"></a>

```python
type: str
```

- *Type:* str

The only supported SourceConnection type is Codestar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParameters <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters(
  code_star: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar">code_star</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}. |

---

##### `code_star`<sup>Optional</sup> <a name="code_star" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar"></a>

```python
code_star: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}.

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar(
  artifact_path: str = None,
  branch: str = None,
  connection_arn: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath">artifact_path</a></code> | <code>str</code> | The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch">branch</a></code> | <code>str</code> | The specific branch where the artifact resides. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn">connection_arn</a></code> | <code>str</code> | The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository">repository</a></code> | <code>str</code> | The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.". |

---

##### `artifact_path`<sup>Optional</sup> <a name="artifact_path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath"></a>

```python
artifact_path: str
```

- *Type:* str

The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#artifact_path ServicecatalogCloudformationProduct#artifact_path}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch"></a>

```python
branch: str
```

- *Type:* str

The specific branch where the artifact resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#branch ServicecatalogCloudformationProduct#branch}

---

##### `connection_arn`<sup>Optional</sup> <a name="connection_arn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_arn ServicecatalogCloudformationProduct#connection_arn}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository"></a>

```python
repository: str
```

- *Type:* str

The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#repository ServicecatalogCloudformationProduct#repository}

---

### ServicecatalogCloudformationProductTags <a name="ServicecatalogCloudformationProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#key ServicecatalogCloudformationProduct#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#value ServicecatalogCloudformationProduct#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId">reset_import_from_physical_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl">reset_load_template_from_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_import_from_physical_id` <a name="reset_import_from_physical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId"></a>

```python
def reset_import_from_physical_id() -> None
```

##### `reset_load_template_from_url` <a name="reset_load_template_from_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl"></a>

```python
def reset_load_template_from_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput">import_from_physical_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput">load_template_from_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId">import_from_physical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl">load_template_from_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_from_physical_id_input`<sup>Optional</sup> <a name="import_from_physical_id_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput"></a>

```python
import_from_physical_id_input: str
```

- *Type:* str

---

##### `load_template_from_url_input`<sup>Optional</sup> <a name="load_template_from_url_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput"></a>

```python
load_template_from_url_input: str
```

- *Type:* str

---

##### `import_from_physical_id`<sup>Required</sup> <a name="import_from_physical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId"></a>

```python
import_from_physical_id: str
```

- *Type:* str

---

##### `load_template_from_url`<sup>Required</sup> <a name="load_template_from_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl"></a>

```python
load_template_from_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParametersInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersList <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicecatalogCloudformationProductProvisioningArtifactParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>]

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo">put_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation">reset_disable_template_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo">reset_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_info` <a name="put_info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo"></a>

```python
def put_info(
  import_from_physical_id: str = None,
  load_template_from_url: str = None
) -> None
```

###### `import_from_physical_id`<sup>Optional</sup> <a name="import_from_physical_id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo.parameter.importFromPhysicalId"></a>

- *Type:* str

The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#import_from_physical_id ServicecatalogCloudformationProduct#import_from_physical_id}

---

###### `load_template_from_url`<sup>Optional</sup> <a name="load_template_from_url" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo.parameter.loadTemplateFromUrl"></a>

- *Type:* str

The URL of the AWS CloudFormation template in Amazon S3 in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#load_template_from_url ServicecatalogCloudformationProduct#load_template_from_url}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_template_validation` <a name="reset_disable_template_validation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation"></a>

```python
def reset_disable_template_validation() -> None
```

##### `reset_info` <a name="reset_info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo"></a>

```python
def reset_info() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput">disable_template_validation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput">info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">disable_template_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info"></a>

```python
info: ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_template_validation_input`<sup>Optional</sup> <a name="disable_template_validation_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput"></a>

```python
disable_template_validation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `info_input`<sup>Optional</sup> <a name="info_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput"></a>

```python
info_input: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParametersInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_template_validation`<sup>Required</sup> <a name="disable_template_validation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```python
disable_template_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath">reset_artifact_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn">reset_connection_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_artifact_path` <a name="reset_artifact_path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath"></a>

```python
def reset_artifact_path() -> None
```

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_connection_arn` <a name="reset_connection_arn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn"></a>

```python
def reset_connection_arn() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput">artifact_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput">connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath">artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_path_input`<sup>Optional</sup> <a name="artifact_path_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput"></a>

```python
artifact_path_input: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `connection_arn_input`<sup>Optional</sup> <a name="connection_arn_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput"></a>

```python
connection_arn_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `artifact_path`<sup>Required</sup> <a name="artifact_path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath"></a>

```python
artifact_path: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar">put_code_star</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar">reset_code_star</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_star` <a name="put_code_star" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar"></a>

```python
def put_code_star(
  artifact_path: str = None,
  branch: str = None,
  connection_arn: str = None,
  repository: str = None
) -> None
```

###### `artifact_path`<sup>Optional</sup> <a name="artifact_path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar.parameter.artifactPath"></a>

- *Type:* str

The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#artifact_path ServicecatalogCloudformationProduct#artifact_path}

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar.parameter.branch"></a>

- *Type:* str

The specific branch where the artifact resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#branch ServicecatalogCloudformationProduct#branch}

---

###### `connection_arn`<sup>Optional</sup> <a name="connection_arn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar.parameter.connectionArn"></a>

- *Type:* str

The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_arn ServicecatalogCloudformationProduct#connection_arn}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar.parameter.repository"></a>

- *Type:* str

The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#repository ServicecatalogCloudformationProduct#repository}

---

##### `reset_code_star` <a name="reset_code_star" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar"></a>

```python
def reset_code_star() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar">code_star</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput">code_star_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_star`<sup>Required</sup> <a name="code_star" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar"></a>

```python
code_star: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a>

---

##### `code_star_input`<sup>Optional</sup> <a name="code_star_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput"></a>

```python
code_star_input: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---


### ServicecatalogCloudformationProductSourceConnectionOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters">put_connection_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters">reset_connection_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connection_parameters` <a name="put_connection_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters"></a>

```python
def put_connection_parameters(
  code_star: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar = None
) -> None
```

###### `code_star`<sup>Optional</sup> <a name="code_star" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters.parameter.codeStar"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}.

---

##### `reset_connection_parameters` <a name="reset_connection_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters"></a>

```python
def reset_connection_parameters() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters">connection_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput">connection_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_parameters`<sup>Required</sup> <a name="connection_parameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters"></a>

```python
connection_parameters: ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a>

---

##### `connection_parameters_input`<sup>Optional</sup> <a name="connection_parameters_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput"></a>

```python
connection_parameters_input: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProductSourceConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---


### ServicecatalogCloudformationProductTagsList <a name="ServicecatalogCloudformationProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicecatalogCloudformationProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicecatalogCloudformationProductTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>]

---


### ServicecatalogCloudformationProductTagsOutputReference <a name="ServicecatalogCloudformationProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_cloudformation_product

servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogCloudformationProductTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>

---



