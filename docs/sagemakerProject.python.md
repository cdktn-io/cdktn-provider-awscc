# `sagemakerProject` Submodule <a name="`sagemakerProject` Submodule" id="@cdktn/provider-awscc.sagemakerProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProject <a name="SagemakerProject" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project awscc_sagemaker_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProject(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project_name: str,
  project_description: str = None,
  service_catalog_provisioned_product_details: SagemakerProjectServiceCatalogProvisionedProductDetails = None,
  service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetails = None,
  tags: IResolvable | typing.List[SagemakerProjectTags] = None,
  template_provider_details: IResolvable | typing.List[SagemakerProjectTemplateProviderDetails] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | The name of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectDescription">project_description</a></code> | <code>str</code> | The description of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisionedProductDetails">service_catalog_provisioned_product_details</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | Provisioned ServiceCatalog  Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisioningDetails">service_catalog_provisioning_details</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | Input ServiceCatalog Provisioning Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.templateProviderDetails">template_provider_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]</code> | An array of template providers associated with the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectName"></a>

- *Type:* str

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}

---

##### `project_description`<sup>Optional</sup> <a name="project_description" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectDescription"></a>

- *Type:* str

The description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}

---

##### `service_catalog_provisioned_product_details`<sup>Optional</sup> <a name="service_catalog_provisioned_product_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisionedProductDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

Provisioned ServiceCatalog  Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioned_product_details SagemakerProject#service_catalog_provisioned_product_details}

---

##### `service_catalog_provisioning_details`<sup>Optional</sup> <a name="service_catalog_provisioning_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisioningDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

Input ServiceCatalog Provisioning Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#tags SagemakerProject#tags}

---

##### `template_provider_details`<sup>Optional</sup> <a name="template_provider_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.templateProviderDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]

An array of template providers associated with the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_provider_details SagemakerProject#template_provider_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails">put_service_catalog_provisioned_product_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails">put_service_catalog_provisioning_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails">put_template_provider_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetProjectDescription">reset_project_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisionedProductDetails">reset_service_catalog_provisioned_product_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisioningDetails">reset_service_catalog_provisioning_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTemplateProviderDetails">reset_template_provider_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_service_catalog_provisioned_product_details` <a name="put_service_catalog_provisioned_product_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails"></a>

```python
def put_service_catalog_provisioned_product_details(
  provisioned_product_id: str = None,
  provisioned_product_status_message: str = None
) -> None
```

###### `provisioned_product_id`<sup>Optional</sup> <a name="provisioned_product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails.parameter.provisionedProductId"></a>

- *Type:* str

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioned_product_id SagemakerProject#provisioned_product_id}

---

###### `provisioned_product_status_message`<sup>Optional</sup> <a name="provisioned_product_status_message" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails.parameter.provisionedProductStatusMessage"></a>

- *Type:* str

Provisioned Product Status Message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioned_product_status_message SagemakerProject#provisioned_product_status_message}

---

##### `put_service_catalog_provisioning_details` <a name="put_service_catalog_provisioning_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails"></a>

```python
def put_service_catalog_provisioning_details(
  path_id: str = None,
  product_id: str = None,
  provisioning_artifact_id: str = None,
  provisioning_parameters: IResolvable | typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters] = None
) -> None
```

###### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.pathId"></a>

- *Type:* str

The path identifier of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#path_id SagemakerProject#path_id}

---

###### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.productId"></a>

- *Type:* str

Service Catalog product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#product_id SagemakerProject#product_id}

---

###### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.provisioningArtifactId"></a>

- *Type:* str

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}

---

###### `provisioning_parameters`<sup>Optional</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.provisioningParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]

Parameters specified by the administrator that are required for provisioning the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioning_parameters SagemakerProject#provisioning_parameters}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerProjectTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]

---

##### `put_template_provider_details` <a name="put_template_provider_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails"></a>

```python
def put_template_provider_details(
  value: IResolvable | typing.List[SagemakerProjectTemplateProviderDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]

---

##### `reset_project_description` <a name="reset_project_description" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetProjectDescription"></a>

```python
def reset_project_description() -> None
```

##### `reset_service_catalog_provisioned_product_details` <a name="reset_service_catalog_provisioned_product_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisionedProductDetails"></a>

```python
def reset_service_catalog_provisioned_product_details() -> None
```

##### `reset_service_catalog_provisioning_details` <a name="reset_service_catalog_provisioning_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisioningDetails"></a>

```python
def reset_service_catalog_provisioning_details() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_provider_details` <a name="reset_template_provider_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTemplateProviderDetails"></a>

```python
def reset_template_provider_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectArn">project_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectStatus">project_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetails">service_catalog_provisioned_product_details</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails">service_catalog_provisioning_details</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList">SagemakerProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetails">template_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList">SagemakerProjectTemplateProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescriptionInput">project_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetailsInput">service_catalog_provisioned_product_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput">service_catalog_provisioning_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetailsInput">template_provider_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescription">project_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectArn"></a>

```python
project_arn: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_status`<sup>Required</sup> <a name="project_status" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectStatus"></a>

```python
project_status: str
```

- *Type:* str

---

##### `service_catalog_provisioned_product_details`<sup>Required</sup> <a name="service_catalog_provisioned_product_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetails"></a>

```python
service_catalog_provisioned_product_details: SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a>

---

##### `service_catalog_provisioning_details`<sup>Required</sup> <a name="service_catalog_provisioning_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails"></a>

```python
service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tags"></a>

```python
tags: SagemakerProjectTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList">SagemakerProjectTagsList</a>

---

##### `template_provider_details`<sup>Required</sup> <a name="template_provider_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetails"></a>

```python
template_provider_details: SagemakerProjectTemplateProviderDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList">SagemakerProjectTemplateProviderDetailsList</a>

---

##### `project_description_input`<sup>Optional</sup> <a name="project_description_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescriptionInput"></a>

```python
project_description_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `service_catalog_provisioned_product_details_input`<sup>Optional</sup> <a name="service_catalog_provisioned_product_details_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetailsInput"></a>

```python
service_catalog_provisioned_product_details_input: IResolvable | SagemakerProjectServiceCatalogProvisionedProductDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---

##### `service_catalog_provisioning_details_input`<sup>Optional</sup> <a name="service_catalog_provisioning_details_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput"></a>

```python
service_catalog_provisioning_details_input: IResolvable | SagemakerProjectServiceCatalogProvisioningDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]

---

##### `template_provider_details_input`<sup>Optional</sup> <a name="template_provider_details_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetailsInput"></a>

```python
template_provider_details_input: IResolvable | typing.List[SagemakerProjectTemplateProviderDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]

---

##### `project_description`<sup>Required</sup> <a name="project_description" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescription"></a>

```python
project_description: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProjectConfig <a name="SagemakerProjectConfig" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project_name: str,
  project_description: str = None,
  service_catalog_provisioned_product_details: SagemakerProjectServiceCatalogProvisionedProductDetails = None,
  service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetails = None,
  tags: IResolvable | typing.List[SagemakerProjectTags] = None,
  template_provider_details: IResolvable | typing.List[SagemakerProjectTemplateProviderDetails] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectName">project_name</a></code> | <code>str</code> | The name of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectDescription">project_description</a></code> | <code>str</code> | The description of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisionedProductDetails">service_catalog_provisioned_product_details</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | Provisioned ServiceCatalog  Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails">service_catalog_provisioning_details</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | Input ServiceCatalog Provisioning Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.templateProviderDetails">template_provider_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]</code> | An array of template providers associated with the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}

---

##### `project_description`<sup>Optional</sup> <a name="project_description" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectDescription"></a>

```python
project_description: str
```

- *Type:* str

The description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}

---

##### `service_catalog_provisioned_product_details`<sup>Optional</sup> <a name="service_catalog_provisioned_product_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisionedProductDetails"></a>

```python
service_catalog_provisioned_product_details: SagemakerProjectServiceCatalogProvisionedProductDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

Provisioned ServiceCatalog  Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioned_product_details SagemakerProject#service_catalog_provisioned_product_details}

---

##### `service_catalog_provisioning_details`<sup>Optional</sup> <a name="service_catalog_provisioning_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails"></a>

```python
service_catalog_provisioning_details: SagemakerProjectServiceCatalogProvisioningDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

Input ServiceCatalog Provisioning Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#tags SagemakerProject#tags}

---

##### `template_provider_details`<sup>Optional</sup> <a name="template_provider_details" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.templateProviderDetails"></a>

```python
template_provider_details: IResolvable | typing.List[SagemakerProjectTemplateProviderDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]

An array of template providers associated with the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_provider_details SagemakerProject#template_provider_details}

---

### SagemakerProjectServiceCatalogProvisionedProductDetails <a name="SagemakerProjectServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails(
  provisioned_product_id: str = None,
  provisioned_product_status_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductId">provisioned_product_id</a></code> | <code>str</code> | The identifier of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductStatusMessage">provisioned_product_status_message</a></code> | <code>str</code> | Provisioned Product Status Message. |

---

##### `provisioned_product_id`<sup>Optional</sup> <a name="provisioned_product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductId"></a>

```python
provisioned_product_id: str
```

- *Type:* str

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioned_product_id SagemakerProject#provisioned_product_id}

---

##### `provisioned_product_status_message`<sup>Optional</sup> <a name="provisioned_product_status_message" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductStatusMessage"></a>

```python
provisioned_product_status_message: str
```

- *Type:* str

Provisioned Product Status Message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioned_product_status_message SagemakerProject#provisioned_product_status_message}

---

### SagemakerProjectServiceCatalogProvisioningDetails <a name="SagemakerProjectServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails(
  path_id: str = None,
  product_id: str = None,
  provisioning_artifact_id: str = None,
  provisioning_parameters: IResolvable | typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId">path_id</a></code> | <code>str</code> | The path identifier of the product. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId">product_id</a></code> | <code>str</code> | Service Catalog product identifier. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | The identifier of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameters">provisioning_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]</code> | Parameters specified by the administrator that are required for provisioning the product. |

---

##### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

The path identifier of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#path_id SagemakerProject#path_id}

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Service Catalog product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#product_id SagemakerProject#product_id}

---

##### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}

---

##### `provisioning_parameters`<sup>Optional</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameters"></a>

```python
provisioning_parameters: IResolvable | typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]

Parameters specified by the administrator that are required for provisioning the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioning_parameters SagemakerProject#provisioning_parameters}

---

### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.key">key</a></code> | <code>str</code> | The parameter key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.value">value</a></code> | <code>str</code> | The parameter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The parameter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

### SagemakerProjectTags <a name="SagemakerProjectTags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

### SagemakerProjectTemplateProviderDetails <a name="SagemakerProjectTemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetails(
  cfn_template_provider_detail: SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.property.cfnTemplateProviderDetail">cfn_template_provider_detail</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | CloudFormation template provider details for a SageMaker project. |

---

##### `cfn_template_provider_detail`<sup>Optional</sup> <a name="cfn_template_provider_detail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.property.cfnTemplateProviderDetail"></a>

```python
cfn_template_provider_detail: SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

CloudFormation template provider details for a SageMaker project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#cfn_template_provider_detail SagemakerProject#cfn_template_provider_detail}

---

### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail(
  parameters: IResolvable | typing.List[SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters] = None,
  role_arn: str = None,
  template_name: str = None,
  template_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]</code> | A list of parameters used in the CloudFormation template. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role used by the template provider. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateName">template_name</a></code> | <code>str</code> | The name of the template used for the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateUrl">template_url</a></code> | <code>str</code> | The URL of the CloudFormation template. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.parameters"></a>

```python
parameters: IResolvable | typing.List[SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]

A list of parameters used in the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#parameters SagemakerProject#parameters}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role used by the template provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#role_arn SagemakerProject#role_arn}

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

The name of the template used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_name SagemakerProject#template_name}

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

The URL of the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_url SagemakerProject#template_url}

---

### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductId">reset_provisioned_product_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductStatusMessage">reset_provisioned_product_status_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_provisioned_product_id` <a name="reset_provisioned_product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductId"></a>

```python
def reset_provisioned_product_id() -> None
```

##### `reset_provisioned_product_status_message` <a name="reset_provisioned_product_status_message" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductStatusMessage"></a>

```python
def reset_provisioned_product_status_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductIdInput">provisioned_product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessageInput">provisioned_product_status_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId">provisioned_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage">provisioned_product_status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioned_product_id_input`<sup>Optional</sup> <a name="provisioned_product_id_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductIdInput"></a>

```python
provisioned_product_id_input: str
```

- *Type:* str

---

##### `provisioned_product_status_message_input`<sup>Optional</sup> <a name="provisioned_product_status_message_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessageInput"></a>

```python
provisioned_product_status_message_input: str
```

- *Type:* str

---

##### `provisioned_product_id`<sup>Required</sup> <a name="provisioned_product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId"></a>

```python
provisioned_product_id: str
```

- *Type:* str

---

##### `provisioned_product_status_message`<sup>Required</sup> <a name="provisioned_product_status_message" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage"></a>

```python
provisioned_product_status_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProjectServiceCatalogProvisionedProductDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters">put_provisioning_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId">reset_path_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProductId">reset_product_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId">reset_provisioning_artifact_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameters">reset_provisioning_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provisioning_parameters` <a name="put_provisioning_parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters"></a>

```python
def put_provisioning_parameters(
  value: IResolvable | typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]

---

##### `reset_path_id` <a name="reset_path_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId"></a>

```python
def reset_path_id() -> None
```

##### `reset_product_id` <a name="reset_product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProductId"></a>

```python
def reset_product_id() -> None
```

##### `reset_provisioning_artifact_id` <a name="reset_provisioning_artifact_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId"></a>

```python
def reset_provisioning_artifact_id() -> None
```

##### `reset_provisioning_parameters` <a name="reset_provisioning_parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameters"></a>

```python
def reset_provisioning_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters">provisioning_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput">path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput">provisioning_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParametersInput">provisioning_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId">path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioning_parameters`<sup>Required</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters"></a>

```python
provisioning_parameters: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a>

---

##### `path_id_input`<sup>Optional</sup> <a name="path_id_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput"></a>

```python
path_id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `provisioning_artifact_id_input`<sup>Optional</sup> <a name="provisioning_artifact_id_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput"></a>

```python
provisioning_artifact_id_input: str
```

- *Type:* str

---

##### `provisioning_parameters_input`<sup>Optional</sup> <a name="provisioning_parameters_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParametersInput"></a>

```python
provisioning_parameters_input: IResolvable | typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]

---

##### `path_id`<sup>Required</sup> <a name="path_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `provisioning_artifact_id`<sup>Required</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProjectServiceCatalogProvisioningDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>]

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>

---


### SagemakerProjectTagsList <a name="SagemakerProjectTagsList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>]

---


### SagemakerProjectTagsOutputReference <a name="SagemakerProjectTagsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProjectTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateName">reset_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateUrl">reset_template_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_template_name` <a name="reset_template_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateName"></a>

```python
def reset_template_name() -> None
```

##### `reset_template_url` <a name="reset_template_url" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateUrl"></a>

```python
def reset_template_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrlInput">template_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters"></a>

```python
parameters: SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `template_url_input`<sup>Optional</sup> <a name="template_url_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrlInput"></a>

```python
template_url_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>

---


### SagemakerProjectTemplateProviderDetailsList <a name="SagemakerProjectTemplateProviderDetailsList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProjectTemplateProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerProjectTemplateProviderDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>]

---


### SagemakerProjectTemplateProviderDetailsOutputReference <a name="SagemakerProjectTemplateProviderDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_project

sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail">put_cfn_template_provider_detail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resetCfnTemplateProviderDetail">reset_cfn_template_provider_detail</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cfn_template_provider_detail` <a name="put_cfn_template_provider_detail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail"></a>

```python
def put_cfn_template_provider_detail(
  parameters: IResolvable | typing.List[SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters] = None,
  role_arn: str = None,
  template_name: str = None,
  template_url: str = None
) -> None
```

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>]

A list of parameters used in the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#parameters SagemakerProject#parameters}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role used by the template provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#role_arn SagemakerProject#role_arn}

---

###### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail.parameter.templateName"></a>

- *Type:* str

The name of the template used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_name SagemakerProject#template_name}

---

###### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail.parameter.templateUrl"></a>

- *Type:* str

The URL of the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_url SagemakerProject#template_url}

---

##### `reset_cfn_template_provider_detail` <a name="reset_cfn_template_provider_detail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resetCfnTemplateProviderDetail"></a>

```python
def reset_cfn_template_provider_detail() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail">cfn_template_provider_detail</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetailInput">cfn_template_provider_detail_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cfn_template_provider_detail`<sup>Required</sup> <a name="cfn_template_provider_detail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail"></a>

```python
cfn_template_provider_detail: SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a>

---

##### `cfn_template_provider_detail_input`<sup>Optional</sup> <a name="cfn_template_provider_detail_input" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetailInput"></a>

```python
cfn_template_provider_detail_input: IResolvable | SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProjectTemplateProviderDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>

---



