# `imagebuilderImageRecipe` Submodule <a name="`imagebuilderImageRecipe` Submodule" id="@cdktn/provider-awscc.imagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImageRecipe <a name="ImagebuilderImageRecipe" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parentImage(java.lang.String)
    .version(java.lang.String)
//  .additionalInstanceConfiguration(ImagebuilderImageRecipeAdditionalInstanceConfiguration)
//  .amiTags(java.util.Map<java.lang.String, java.lang.String>)
//  .amiWatermarks(java.util.List<java.lang.String>)
//  .blockDeviceMappings(IResolvable|java.util.List<ImagebuilderImageRecipeBlockDeviceMappings>)
//  .components(IResolvable|java.util.List<ImagebuilderImageRecipeComponents>)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .workingDirectory(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage">parentImage</a></code> | <code>java.lang.String</code> | The parent image of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The version of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.additionalInstanceConfiguration">additionalInstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | Specify additional settings and launch scripts for your build instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiTags">amiTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags to apply to the AMI created by this image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiWatermarks">amiWatermarks</a></code> | <code>java.util.List<java.lang.String></code> | The AMI watermark names to attach to the output AMI from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMappings">blockDeviceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>></code> | The block device mappings to apply when creating images from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.components">components</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>></code> | The components of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | The working directory to be used during build and test workflows. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage"></a>

- *Type:* java.lang.String

The parent image of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The version of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}

---

##### `additionalInstanceConfiguration`<sup>Optional</sup> <a name="additionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.additionalInstanceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

Specify additional settings and launch scripts for your build instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#additional_instance_configuration ImagebuilderImageRecipe#additional_instance_configuration}

---

##### `amiTags`<sup>Optional</sup> <a name="amiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags to apply to the AMI created by this image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_tags ImagebuilderImageRecipe#ami_tags}

---

##### `amiWatermarks`<sup>Optional</sup> <a name="amiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiWatermarks"></a>

- *Type:* java.util.List<java.lang.String>

The AMI watermark names to attach to the output AMI from this recipe.

AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_watermarks ImagebuilderImageRecipe#ami_watermarks}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>>

The block device mappings to apply when creating images from this recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#block_device_mappings ImagebuilderImageRecipe#block_device_mappings}

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.components"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>>

The components of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#components ImagebuilderImageRecipe#components}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory"></a>

- *Type:* java.lang.String

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration">putAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents">putComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration">resetAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags">resetAmiTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks">resetAmiWatermarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents">resetComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalInstanceConfiguration` <a name="putAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration"></a>

```java
public void putAdditionalInstanceConfiguration(ImagebuilderImageRecipeAdditionalInstanceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings"></a>

```java
public void putBlockDeviceMappings(IResolvable|java.util.List<ImagebuilderImageRecipeBlockDeviceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>>

---

##### `putComponents` <a name="putComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents"></a>

```java
public void putComponents(IResolvable|java.util.List<ImagebuilderImageRecipeComponents> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>>

---

##### `resetAdditionalInstanceConfiguration` <a name="resetAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration"></a>

```java
public void resetAdditionalInstanceConfiguration()
```

##### `resetAmiTags` <a name="resetAmiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags"></a>

```java
public void resetAmiTags()
```

##### `resetAmiWatermarks` <a name="resetAmiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks"></a>

```java
public void resetAmiWatermarks()
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings"></a>

```java
public void resetBlockDeviceMappings()
```

##### `resetComponents` <a name="resetComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents"></a>

```java
public void resetComponents()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags"></a>

```java
public void resetTags()
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory"></a>

```java
public void resetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipe;

ImagebuilderImageRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ImagebuilderImageRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ImagebuilderImageRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ImagebuilderImageRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderImageRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration">additionalInstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion">latestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput">additionalInstanceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput">amiTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput">amiWatermarksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput">componentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput">parentImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags">amiTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks">amiWatermarks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage">parentImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalInstanceConfiguration`<sup>Required</sup> <a name="additionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration"></a>

```java
public ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference getAdditionalInstanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingsList getBlockDeviceMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components"></a>

```java
public ImagebuilderImageRecipeComponentsList getComponents();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion"></a>

```java
public ImagebuilderImageRecipeLatestVersionOutputReference getLatestVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a>

---

##### `additionalInstanceConfigurationInput`<sup>Optional</sup> <a name="additionalInstanceConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput"></a>

```java
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfiguration getAdditionalInstanceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---

##### `amiTagsInput`<sup>Optional</sup> <a name="amiTagsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAmiTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `amiWatermarksInput`<sup>Optional</sup> <a name="amiWatermarksInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput"></a>

```java
public java.util.List<java.lang.String> getAmiWatermarksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeBlockDeviceMappings> getBlockDeviceMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>>

---

##### `componentsInput`<sup>Optional</sup> <a name="componentsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeComponents> getComponentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentImageInput`<sup>Optional</sup> <a name="parentImageInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput"></a>

```java
public java.lang.String getParentImageInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput"></a>

```java
public java.lang.String getWorkingDirectoryInput();
```

- *Type:* java.lang.String

---

##### `amiTags`<sup>Required</sup> <a name="amiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAmiTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `amiWatermarks`<sup>Required</sup> <a name="amiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks"></a>

```java
public java.util.List<java.lang.String> getAmiWatermarks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage"></a>

```java
public java.lang.String getParentImage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfiguration <a name="ImagebuilderImageRecipeAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration;

ImagebuilderImageRecipeAdditionalInstanceConfiguration.builder()
//  .systemsManagerAgent(ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent)
//  .userDataOverride(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent">systemsManagerAgent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | Contains settings for the SSM agent on your build instance. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride">userDataOverride</a></code> | <code>java.lang.String</code> | Use this property to provide commands or a command script to run when you launch your build instance. |

---

##### `systemsManagerAgent`<sup>Optional</sup> <a name="systemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent"></a>

```java
public ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent getSystemsManagerAgent();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

Contains settings for the SSM agent on your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `userDataOverride`<sup>Optional</sup> <a name="userDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride"></a>

```java
public java.lang.String getUserDataOverride();
```

- *Type:* java.lang.String

Use this property to provide commands or a command script to run when you launch your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#user_data_override ImagebuilderImageRecipe#user_data_override}

---

### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent;

ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.builder()
//  .uninstallAfterBuild(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild">uninstallAfterBuild</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. |

---

##### `uninstallAfterBuild`<sup>Optional</sup> <a name="uninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild"></a>

```java
public java.lang.Boolean|IResolvable getUninstallAfterBuild();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI.

If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}

---

### ImagebuilderImageRecipeBlockDeviceMappings <a name="ImagebuilderImageRecipeBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappings;

ImagebuilderImageRecipeBlockDeviceMappings.builder()
//  .deviceName(java.lang.String)
//  .ebs(ImagebuilderImageRecipeBlockDeviceMappingsEbs)
//  .noDevice(java.lang.String)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | The device to which these mappings apply. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | Use to manage Amazon EBS-specific configuration for this mapping. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | Use to remove a mapping from the parent image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Use to manage instance ephemeral devices. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

The device to which these mappings apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingsEbs getEbs();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

Use to manage Amazon EBS-specific configuration for this mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ebs ImagebuilderImageRecipe#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

Use to remove a mapping from the parent image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Use to manage instance ephemeral devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}

---

### ImagebuilderImageRecipeBlockDeviceMappingsEbs <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs;

ImagebuilderImageRecipeBlockDeviceMappingsEbs.builder()
//  .deleteOnTermination(java.lang.Boolean|IResolvable)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .snapshotId(java.lang.String)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use to configure delete on termination of the associated device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use to configure device encryption. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>java.lang.Number</code> | Use to configure device IOPS. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Use to configure the KMS key to use when encrypting the device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot that defines the device contents. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | For GP3 volumes only - The throughput in MiB/s that the volume supports. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Use to override the device's volume size. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Use to override the device's volume type. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use to configure delete on termination of the associated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use to configure device encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Use to configure device IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Use to configure the KMS key to use when encrypting the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

The snapshot that defines the device contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

For GP3 volumes only - The throughput in MiB/s that the volume supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Use to override the device's volume size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Use to override the device's volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}

---

### ImagebuilderImageRecipeComponents <a name="ImagebuilderImageRecipeComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeComponents;

ImagebuilderImageRecipeComponents.builder()
//  .componentArn(java.lang.String)
//  .parameters(IResolvable|java.util.List<ImagebuilderImageRecipeComponentsParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn">componentArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>></code> | A group of parameter settings that are used to configure the component for a specific recipe. |

---

##### `componentArn`<sup>Optional</sup> <a name="componentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn"></a>

```java
public java.lang.String getComponentArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeComponentsParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>>

A group of parameter settings that are used to configure the component for a specific recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parameters ImagebuilderImageRecipe#parameters}

---

### ImagebuilderImageRecipeComponentsParameters <a name="ImagebuilderImageRecipeComponentsParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentsParameters;

ImagebuilderImageRecipeComponentsParameters.builder()
//  .name(java.lang.String)
//  .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name">name</a></code> | <code>java.lang.String</code> | The name of the component parameter to set. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Sets the value for the named component parameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the component parameter to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

Sets the value for the named component parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}

---

### ImagebuilderImageRecipeConfig <a name="ImagebuilderImageRecipeConfig" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeConfig;

ImagebuilderImageRecipeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parentImage(java.lang.String)
    .version(java.lang.String)
//  .additionalInstanceConfiguration(ImagebuilderImageRecipeAdditionalInstanceConfiguration)
//  .amiTags(java.util.Map<java.lang.String, java.lang.String>)
//  .amiWatermarks(java.util.List<java.lang.String>)
//  .blockDeviceMappings(IResolvable|java.util.List<ImagebuilderImageRecipeBlockDeviceMappings>)
//  .components(IResolvable|java.util.List<ImagebuilderImageRecipeComponents>)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .workingDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage">parentImage</a></code> | <code>java.lang.String</code> | The parent image of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version">version</a></code> | <code>java.lang.String</code> | The version of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration">additionalInstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | Specify additional settings and launch scripts for your build instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags">amiTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags to apply to the AMI created by this image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks">amiWatermarks</a></code> | <code>java.util.List<java.lang.String></code> | The AMI watermark names to attach to the output AMI from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>></code> | The block device mappings to apply when creating images from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components">components</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>></code> | The components of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | The working directory to be used during build and test workflows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage"></a>

```java
public java.lang.String getParentImage();
```

- *Type:* java.lang.String

The parent image of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}

---

##### `additionalInstanceConfiguration`<sup>Optional</sup> <a name="additionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration"></a>

```java
public ImagebuilderImageRecipeAdditionalInstanceConfiguration getAdditionalInstanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

Specify additional settings and launch scripts for your build instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#additional_instance_configuration ImagebuilderImageRecipe#additional_instance_configuration}

---

##### `amiTags`<sup>Optional</sup> <a name="amiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAmiTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags to apply to the AMI created by this image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_tags ImagebuilderImageRecipe#ami_tags}

---

##### `amiWatermarks`<sup>Optional</sup> <a name="amiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks"></a>

```java
public java.util.List<java.lang.String> getAmiWatermarks();
```

- *Type:* java.util.List<java.lang.String>

The AMI watermark names to attach to the output AMI from this recipe.

AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_watermarks ImagebuilderImageRecipe#ami_watermarks}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeBlockDeviceMappings> getBlockDeviceMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>>

The block device mappings to apply when creating images from this recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#block_device_mappings ImagebuilderImageRecipe#block_device_mappings}

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeComponents> getComponents();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>>

The components of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#components ImagebuilderImageRecipe#components}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}

---

### ImagebuilderImageRecipeLatestVersion <a name="ImagebuilderImageRecipeLatestVersion" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeLatestVersion;

ImagebuilderImageRecipeLatestVersion.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference;

new ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent">putSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent">resetSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride">resetUserDataOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSystemsManagerAgent` <a name="putSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent"></a>

```java
public void putSystemsManagerAgent(ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---

##### `resetSystemsManagerAgent` <a name="resetSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent"></a>

```java
public void resetSystemsManagerAgent()
```

##### `resetUserDataOverride` <a name="resetUserDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride"></a>

```java
public void resetUserDataOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent">systemsManagerAgent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput">systemsManagerAgentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput">userDataOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride">userDataOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `systemsManagerAgent`<sup>Required</sup> <a name="systemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent"></a>

```java
public ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference getSystemsManagerAgent();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a>

---

##### `systemsManagerAgentInput`<sup>Optional</sup> <a name="systemsManagerAgentInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput"></a>

```java
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent getSystemsManagerAgentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---

##### `userDataOverrideInput`<sup>Optional</sup> <a name="userDataOverrideInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput"></a>

```java
public java.lang.String getUserDataOverrideInput();
```

- *Type:* java.lang.String

---

##### `userDataOverride`<sup>Required</sup> <a name="userDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride"></a>

```java
public java.lang.String getUserDataOverride();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---


### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference;

new ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild">resetUninstallAfterBuild</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUninstallAfterBuild` <a name="resetUninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild"></a>

```java
public void resetUninstallAfterBuild()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput">uninstallAfterBuildInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild">uninstallAfterBuild</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uninstallAfterBuildInput`<sup>Optional</sup> <a name="uninstallAfterBuildInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput"></a>

```java
public java.lang.Boolean|IResolvable getUninstallAfterBuildInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `uninstallAfterBuild`<sup>Required</sup> <a name="uninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild"></a>

```java
public java.lang.Boolean|IResolvable getUninstallAfterBuild();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference;

new ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappingsEbs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsList <a name="ImagebuilderImageRecipeBlockDeviceMappingsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingsList;

new ImagebuilderImageRecipeBlockDeviceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeBlockDeviceMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>>

---


### ImagebuilderImageRecipeBlockDeviceMappingsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference;

new ImagebuilderImageRecipeBlockDeviceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs"></a>

```java
public void putEbs(ImagebuilderImageRecipeBlockDeviceMappingsEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetEbs` <a name="resetEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs"></a>

```java
public ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```java
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappingsEbs getEbsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```java
public java.lang.String getNoDeviceInput();
```

- *Type:* java.lang.String

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderImageRecipeBlockDeviceMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>

---


### ImagebuilderImageRecipeComponentsList <a name="ImagebuilderImageRecipeComponentsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentsList;

new ImagebuilderImageRecipeComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get"></a>

```java
public ImagebuilderImageRecipeComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeComponents> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>>

---


### ImagebuilderImageRecipeComponentsOutputReference <a name="ImagebuilderImageRecipeComponentsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentsOutputReference;

new ImagebuilderImageRecipeComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn">resetComponentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<ImagebuilderImageRecipeComponentsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>>

---

##### `resetComponentArn` <a name="resetComponentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn"></a>

```java
public void resetComponentArn()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput">componentArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn">componentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters"></a>

```java
public ImagebuilderImageRecipeComponentsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a>

---

##### `componentArnInput`<sup>Optional</sup> <a name="componentArnInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput"></a>

```java
public java.lang.String getComponentArnInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeComponentsParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>>

---

##### `componentArn`<sup>Required</sup> <a name="componentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn"></a>

```java
public java.lang.String getComponentArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderImageRecipeComponents getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>

---


### ImagebuilderImageRecipeComponentsParametersList <a name="ImagebuilderImageRecipeComponentsParametersList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentsParametersList;

new ImagebuilderImageRecipeComponentsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get"></a>

```java
public ImagebuilderImageRecipeComponentsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ImagebuilderImageRecipeComponentsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>>

---


### ImagebuilderImageRecipeComponentsParametersOutputReference <a name="ImagebuilderImageRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeComponentsParametersOutputReference;

new ImagebuilderImageRecipeComponentsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ImagebuilderImageRecipeComponentsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>

---


### ImagebuilderImageRecipeLatestVersionOutputReference <a name="ImagebuilderImageRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.imagebuilder_image_recipe.ImagebuilderImageRecipeLatestVersionOutputReference;

new ImagebuilderImageRecipeLatestVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major">major</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor">minor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch">patch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major"></a>

```java
public java.lang.String getMajor();
```

- *Type:* java.lang.String

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor"></a>

```java
public java.lang.String getMinor();
```

- *Type:* java.lang.String

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch"></a>

```java
public java.lang.String getPatch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue"></a>

```java
public ImagebuilderImageRecipeLatestVersion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a>

---



