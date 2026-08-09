# `sagemakerProject` Submodule <a name="`sagemakerProject` Submodule" id="@cdktn/provider-awscc.sagemakerProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProject <a name="SagemakerProject" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project awscc_sagemaker_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProject;

SagemakerProject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectName(java.lang.String)
//  .projectDescription(java.lang.String)
//  .serviceCatalogProvisionedProductDetails(SagemakerProjectServiceCatalogProvisionedProductDetails)
//  .serviceCatalogProvisioningDetails(SagemakerProjectServiceCatalogProvisioningDetails)
//  .tags(IResolvable|java.util.List<SagemakerProjectTags>)
//  .templateProviderDetails(IResolvable|java.util.List<SagemakerProjectTemplateProviderDetails>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectName">projectName</a></code> | <code>java.lang.String</code> | The name of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectDescription">projectDescription</a></code> | <code>java.lang.String</code> | The description of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisionedProductDetails">serviceCatalogProvisionedProductDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | Provisioned ServiceCatalog  Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisioningDetails">serviceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | Input ServiceCatalog Provisioning Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.templateProviderDetails">templateProviderDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>></code> | An array of template providers associated with the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectName"></a>

- *Type:* java.lang.String

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}

---

##### `projectDescription`<sup>Optional</sup> <a name="projectDescription" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.projectDescription"></a>

- *Type:* java.lang.String

The description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}

---

##### `serviceCatalogProvisionedProductDetails`<sup>Optional</sup> <a name="serviceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisionedProductDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

Provisioned ServiceCatalog  Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioned_product_details SagemakerProject#service_catalog_provisioned_product_details}

---

##### `serviceCatalogProvisioningDetails`<sup>Optional</sup> <a name="serviceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.serviceCatalogProvisioningDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

Input ServiceCatalog Provisioning Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#tags SagemakerProject#tags}

---

##### `templateProviderDetails`<sup>Optional</sup> <a name="templateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.templateProviderDetails"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>>

An array of template providers associated with the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_provider_details SagemakerProject#template_provider_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails">putServiceCatalogProvisionedProductDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails">putServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails">putTemplateProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetProjectDescription">resetProjectDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisionedProductDetails">resetServiceCatalogProvisionedProductDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisioningDetails">resetServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTemplateProviderDetails">resetTemplateProviderDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceCatalogProvisionedProductDetails` <a name="putServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails"></a>

```java
public void putServiceCatalogProvisionedProductDetails(SagemakerProjectServiceCatalogProvisionedProductDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---

##### `putServiceCatalogProvisioningDetails` <a name="putServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails"></a>

```java
public void putServiceCatalogProvisioningDetails(SagemakerProjectServiceCatalogProvisioningDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerProjectTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>>

---

##### `putTemplateProviderDetails` <a name="putTemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails"></a>

```java
public void putTemplateProviderDetails(IResolvable|java.util.List<SagemakerProjectTemplateProviderDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>>

---

##### `resetProjectDescription` <a name="resetProjectDescription" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetProjectDescription"></a>

```java
public void resetProjectDescription()
```

##### `resetServiceCatalogProvisionedProductDetails` <a name="resetServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisionedProductDetails"></a>

```java
public void resetServiceCatalogProvisionedProductDetails()
```

##### `resetServiceCatalogProvisioningDetails` <a name="resetServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisioningDetails"></a>

```java
public void resetServiceCatalogProvisioningDetails()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateProviderDetails` <a name="resetTemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTemplateProviderDetails"></a>

```java
public void resetTemplateProviderDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProject;

SagemakerProject.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProject;

SagemakerProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProject;

SagemakerProject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProject;

SagemakerProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectArn">projectArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectStatus">projectStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetails">serviceCatalogProvisionedProductDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails">serviceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList">SagemakerProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetails">templateProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList">SagemakerProjectTemplateProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescriptionInput">projectDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetailsInput">serviceCatalogProvisionedProductDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput">serviceCatalogProvisioningDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetailsInput">templateProviderDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescription">projectDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectArn"></a>

```java
public java.lang.String getProjectArn();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `projectStatus`<sup>Required</sup> <a name="projectStatus" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectStatus"></a>

```java
public java.lang.String getProjectStatus();
```

- *Type:* java.lang.String

---

##### `serviceCatalogProvisionedProductDetails`<sup>Required</sup> <a name="serviceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetails"></a>

```java
public SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference getServiceCatalogProvisionedProductDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a>

---

##### `serviceCatalogProvisioningDetails`<sup>Required</sup> <a name="serviceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails"></a>

```java
public SagemakerProjectServiceCatalogProvisioningDetailsOutputReference getServiceCatalogProvisioningDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tags"></a>

```java
public SagemakerProjectTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList">SagemakerProjectTagsList</a>

---

##### `templateProviderDetails`<sup>Required</sup> <a name="templateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetails"></a>

```java
public SagemakerProjectTemplateProviderDetailsList getTemplateProviderDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList">SagemakerProjectTemplateProviderDetailsList</a>

---

##### `projectDescriptionInput`<sup>Optional</sup> <a name="projectDescriptionInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescriptionInput"></a>

```java
public java.lang.String getProjectDescriptionInput();
```

- *Type:* java.lang.String

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `serviceCatalogProvisionedProductDetailsInput`<sup>Optional</sup> <a name="serviceCatalogProvisionedProductDetailsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetailsInput"></a>

```java
public IResolvable|SagemakerProjectServiceCatalogProvisionedProductDetails getServiceCatalogProvisionedProductDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---

##### `serviceCatalogProvisioningDetailsInput`<sup>Optional</sup> <a name="serviceCatalogProvisioningDetailsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput"></a>

```java
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetails getServiceCatalogProvisioningDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>>

---

##### `templateProviderDetailsInput`<sup>Optional</sup> <a name="templateProviderDetailsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetailsInput"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTemplateProviderDetails> getTemplateProviderDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>>

---

##### `projectDescription`<sup>Required</sup> <a name="projectDescription" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescription"></a>

```java
public java.lang.String getProjectDescription();
```

- *Type:* java.lang.String

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProjectConfig <a name="SagemakerProjectConfig" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectConfig;

SagemakerProjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectName(java.lang.String)
//  .projectDescription(java.lang.String)
//  .serviceCatalogProvisionedProductDetails(SagemakerProjectServiceCatalogProvisionedProductDetails)
//  .serviceCatalogProvisioningDetails(SagemakerProjectServiceCatalogProvisioningDetails)
//  .tags(IResolvable|java.util.List<SagemakerProjectTags>)
//  .templateProviderDetails(IResolvable|java.util.List<SagemakerProjectTemplateProviderDetails>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectName">projectName</a></code> | <code>java.lang.String</code> | The name of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectDescription">projectDescription</a></code> | <code>java.lang.String</code> | The description of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisionedProductDetails">serviceCatalogProvisionedProductDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | Provisioned ServiceCatalog  Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails">serviceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | Input ServiceCatalog Provisioning Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.templateProviderDetails">templateProviderDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>></code> | An array of template providers associated with the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}

---

##### `projectDescription`<sup>Optional</sup> <a name="projectDescription" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectDescription"></a>

```java
public java.lang.String getProjectDescription();
```

- *Type:* java.lang.String

The description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}

---

##### `serviceCatalogProvisionedProductDetails`<sup>Optional</sup> <a name="serviceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisionedProductDetails"></a>

```java
public SagemakerProjectServiceCatalogProvisionedProductDetails getServiceCatalogProvisionedProductDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

Provisioned ServiceCatalog  Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioned_product_details SagemakerProject#service_catalog_provisioned_product_details}

---

##### `serviceCatalogProvisioningDetails`<sup>Optional</sup> <a name="serviceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails"></a>

```java
public SagemakerProjectServiceCatalogProvisioningDetails getServiceCatalogProvisioningDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

Input ServiceCatalog Provisioning Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#tags SagemakerProject#tags}

---

##### `templateProviderDetails`<sup>Optional</sup> <a name="templateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.templateProviderDetails"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTemplateProviderDetails> getTemplateProviderDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>>

An array of template providers associated with the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_provider_details SagemakerProject#template_provider_details}

---

### SagemakerProjectServiceCatalogProvisionedProductDetails <a name="SagemakerProjectServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectServiceCatalogProvisionedProductDetails;

SagemakerProjectServiceCatalogProvisionedProductDetails.builder()
//  .provisionedProductId(java.lang.String)
//  .provisionedProductStatusMessage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductId">provisionedProductId</a></code> | <code>java.lang.String</code> | The identifier of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductStatusMessage">provisionedProductStatusMessage</a></code> | <code>java.lang.String</code> | Provisioned Product Status Message. |

---

##### `provisionedProductId`<sup>Optional</sup> <a name="provisionedProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductId"></a>

```java
public java.lang.String getProvisionedProductId();
```

- *Type:* java.lang.String

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioned_product_id SagemakerProject#provisioned_product_id}

---

##### `provisionedProductStatusMessage`<sup>Optional</sup> <a name="provisionedProductStatusMessage" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductStatusMessage"></a>

```java
public java.lang.String getProvisionedProductStatusMessage();
```

- *Type:* java.lang.String

Provisioned Product Status Message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioned_product_status_message SagemakerProject#provisioned_product_status_message}

---

### SagemakerProjectServiceCatalogProvisioningDetails <a name="SagemakerProjectServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectServiceCatalogProvisioningDetails;

SagemakerProjectServiceCatalogProvisioningDetails.builder()
//  .pathId(java.lang.String)
//  .productId(java.lang.String)
//  .provisioningArtifactId(java.lang.String)
//  .provisioningParameters(IResolvable|java.util.List<SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId">pathId</a></code> | <code>java.lang.String</code> | The path identifier of the product. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId">productId</a></code> | <code>java.lang.String</code> | Service Catalog product identifier. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>java.lang.String</code> | The identifier of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameters">provisioningParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>></code> | Parameters specified by the administrator that are required for provisioning the product. |

---

##### `pathId`<sup>Optional</sup> <a name="pathId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId"></a>

```java
public java.lang.String getPathId();
```

- *Type:* java.lang.String

The path identifier of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#path_id SagemakerProject#path_id}

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Service Catalog product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#product_id SagemakerProject#product_id}

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId"></a>

```java
public java.lang.String getProvisioningArtifactId();
```

- *Type:* java.lang.String

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}

---

##### `provisioningParameters`<sup>Optional</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameters"></a>

```java
public IResolvable|java.util.List<SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters> getProvisioningParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>>

Parameters specified by the administrator that are required for provisioning the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#provisioning_parameters SagemakerProject#provisioning_parameters}

---

### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters;

SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.key">key</a></code> | <code>java.lang.String</code> | The parameter key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.value">value</a></code> | <code>java.lang.String</code> | The parameter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The parameter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

### SagemakerProjectTags <a name="SagemakerProjectTags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTags;

SagemakerProjectTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

### SagemakerProjectTemplateProviderDetails <a name="SagemakerProjectTemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetails;

SagemakerProjectTemplateProviderDetails.builder()
//  .cfnTemplateProviderDetail(SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.property.cfnTemplateProviderDetail">cfnTemplateProviderDetail</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | CloudFormation template provider details for a SageMaker project. |

---

##### `cfnTemplateProviderDetail`<sup>Optional</sup> <a name="cfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.property.cfnTemplateProviderDetail"></a>

```java
public SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail getCfnTemplateProviderDetail();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

CloudFormation template provider details for a SageMaker project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#cfn_template_provider_detail SagemakerProject#cfn_template_provider_detail}

---

### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail;

SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.builder()
//  .parameters(IResolvable|java.util.List<SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters>)
//  .roleArn(java.lang.String)
//  .templateName(java.lang.String)
//  .templateUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>></code> | A list of parameters used in the CloudFormation template. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role used by the template provider. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateName">templateName</a></code> | <code>java.lang.String</code> | The name of the template used for the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | The URL of the CloudFormation template. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.parameters"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>>

A list of parameters used in the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#parameters SagemakerProject#parameters}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role used by the template provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#role_arn SagemakerProject#role_arn}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

The name of the template used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_name SagemakerProject#template_name}

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

The URL of the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#template_url SagemakerProject#template_url}

---

### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters;

SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.key">key</a></code> | <code>java.lang.String</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.value">value</a></code> | <code>java.lang.String</code> | The value of the parameter. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference;

new SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductId">resetProvisionedProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductStatusMessage">resetProvisionedProductStatusMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProvisionedProductId` <a name="resetProvisionedProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductId"></a>

```java
public void resetProvisionedProductId()
```

##### `resetProvisionedProductStatusMessage` <a name="resetProvisionedProductStatusMessage" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductStatusMessage"></a>

```java
public void resetProvisionedProductStatusMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductIdInput">provisionedProductIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessageInput">provisionedProductStatusMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId">provisionedProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage">provisionedProductStatusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `provisionedProductIdInput`<sup>Optional</sup> <a name="provisionedProductIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductIdInput"></a>

```java
public java.lang.String getProvisionedProductIdInput();
```

- *Type:* java.lang.String

---

##### `provisionedProductStatusMessageInput`<sup>Optional</sup> <a name="provisionedProductStatusMessageInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessageInput"></a>

```java
public java.lang.String getProvisionedProductStatusMessageInput();
```

- *Type:* java.lang.String

---

##### `provisionedProductId`<sup>Required</sup> <a name="provisionedProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId"></a>

```java
public java.lang.String getProvisionedProductId();
```

- *Type:* java.lang.String

---

##### `provisionedProductStatusMessage`<sup>Required</sup> <a name="provisionedProductStatusMessage" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage"></a>

```java
public java.lang.String getProvisionedProductStatusMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerProjectServiceCatalogProvisionedProductDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference;

new SagemakerProjectServiceCatalogProvisioningDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters">putProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId">resetPathId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId">resetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameters">resetProvisioningParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvisioningParameters` <a name="putProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters"></a>

```java
public void putProvisioningParameters(IResolvable|java.util.List<SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>>

---

##### `resetPathId` <a name="resetPathId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId"></a>

```java
public void resetPathId()
```

##### `resetProductId` <a name="resetProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProductId"></a>

```java
public void resetProductId()
```

##### `resetProvisioningArtifactId` <a name="resetProvisioningArtifactId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId"></a>

```java
public void resetProvisioningArtifactId()
```

##### `resetProvisioningParameters` <a name="resetProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameters"></a>

```java
public void resetProvisioningParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters">provisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput">pathIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput">provisioningArtifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParametersInput">provisioningParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId">pathId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `provisioningParameters`<sup>Required</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters"></a>

```java
public SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList getProvisioningParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a>

---

##### `pathIdInput`<sup>Optional</sup> <a name="pathIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput"></a>

```java
public java.lang.String getPathIdInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactIdInput`<sup>Optional</sup> <a name="provisioningArtifactIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput"></a>

```java
public java.lang.String getProvisioningArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `provisioningParametersInput`<sup>Optional</sup> <a name="provisioningParametersInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParametersInput"></a>

```java
public IResolvable|java.util.List<SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters> getProvisioningParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>>

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId"></a>

```java
public java.lang.String getPathId();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId"></a>

```java
public java.lang.String getProvisioningArtifactId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList;

new SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get"></a>

```java
public SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>>

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference;

new SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>

---


### SagemakerProjectTagsList <a name="SagemakerProjectTagsList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTagsList;

new SagemakerProjectTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get"></a>

```java
public SagemakerProjectTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>>

---


### SagemakerProjectTagsOutputReference <a name="SagemakerProjectTagsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTagsOutputReference;

new SagemakerProjectTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerProjectTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateName"></a>

```java
public void resetTemplateName()
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateUrl"></a>

```java
public void resetTemplateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrlInput">templateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters"></a>

```java
public SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrlInput"></a>

```java
public java.lang.String getTemplateUrlInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get"></a>

```java
public SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>>

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>

---


### SagemakerProjectTemplateProviderDetailsList <a name="SagemakerProjectTemplateProviderDetailsList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetailsList;

new SagemakerProjectTemplateProviderDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get"></a>

```java
public SagemakerProjectTemplateProviderDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerProjectTemplateProviderDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>>

---


### SagemakerProjectTemplateProviderDetailsOutputReference <a name="SagemakerProjectTemplateProviderDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_project.SagemakerProjectTemplateProviderDetailsOutputReference;

new SagemakerProjectTemplateProviderDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail">putCfnTemplateProviderDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resetCfnTemplateProviderDetail">resetCfnTemplateProviderDetail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCfnTemplateProviderDetail` <a name="putCfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail"></a>

```java
public void putCfnTemplateProviderDetail(SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---

##### `resetCfnTemplateProviderDetail` <a name="resetCfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resetCfnTemplateProviderDetail"></a>

```java
public void resetCfnTemplateProviderDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail">cfnTemplateProviderDetail</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetailInput">cfnTemplateProviderDetailInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cfnTemplateProviderDetail`<sup>Required</sup> <a name="cfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail"></a>

```java
public SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference getCfnTemplateProviderDetail();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a>

---

##### `cfnTemplateProviderDetailInput`<sup>Optional</sup> <a name="cfnTemplateProviderDetailInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetailInput"></a>

```java
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail getCfnTemplateProviderDetailInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerProjectTemplateProviderDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>

---



