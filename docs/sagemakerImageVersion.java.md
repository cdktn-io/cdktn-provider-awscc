# `sagemakerImageVersion` Submodule <a name="`sagemakerImageVersion` Submodule" id="@cdktn/provider-awscc.sagemakerImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerImageVersion <a name="SagemakerImageVersion" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version awscc_sagemaker_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_image_version.SagemakerImageVersion;

SagemakerImageVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseImage(java.lang.String)
    .imageName(java.lang.String)
//  .alias(java.lang.String)
//  .aliases(java.util.List<java.lang.String>)
//  .horovod(java.lang.Boolean|IResolvable)
//  .jobType(java.lang.String)
//  .mlFramework(java.lang.String)
//  .processor(java.lang.String)
//  .programmingLang(java.lang.String)
//  .releaseNotes(java.lang.String)
//  .vendorGuidance(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.baseImage">baseImage</a></code> | <code>java.lang.String</code> | The registry path of the container image on which this image version is based. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | The name of the image this version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | The alias of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | List of aliases for the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.horovod">horovod</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates Horovod compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.jobType">jobType</a></code> | <code>java.lang.String</code> | Indicates SageMaker job type compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.mlFramework">mlFramework</a></code> | <code>java.lang.String</code> | The machine learning framework vended in the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.processor">processor</a></code> | <code>java.lang.String</code> | Indicates CPU or GPU compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.programmingLang">programmingLang</a></code> | <code>java.lang.String</code> | The supported programming language and its version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.releaseNotes">releaseNotes</a></code> | <code>java.lang.String</code> | The maintainer description of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.vendorGuidance">vendorGuidance</a></code> | <code>java.lang.String</code> | The availability of the image version specified by the maintainer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseImage`<sup>Required</sup> <a name="baseImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.baseImage"></a>

- *Type:* java.lang.String

The registry path of the container image on which this image version is based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

The name of the image this version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

The alias of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#alias SagemakerImageVersion#alias}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.aliases"></a>

- *Type:* java.util.List<java.lang.String>

List of aliases for the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}

---

##### `horovod`<sup>Optional</sup> <a name="horovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.horovod"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates Horovod compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}

---

##### `jobType`<sup>Optional</sup> <a name="jobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.jobType"></a>

- *Type:* java.lang.String

Indicates SageMaker job type compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}

---

##### `mlFramework`<sup>Optional</sup> <a name="mlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.mlFramework"></a>

- *Type:* java.lang.String

The machine learning framework vended in the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}

---

##### `processor`<sup>Optional</sup> <a name="processor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.processor"></a>

- *Type:* java.lang.String

Indicates CPU or GPU compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}

---

##### `programmingLang`<sup>Optional</sup> <a name="programmingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.programmingLang"></a>

- *Type:* java.lang.String

The supported programming language and its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}

---

##### `releaseNotes`<sup>Optional</sup> <a name="releaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.releaseNotes"></a>

- *Type:* java.lang.String

The maintainer description of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}

---

##### `vendorGuidance`<sup>Optional</sup> <a name="vendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.vendorGuidance"></a>

- *Type:* java.lang.String

The availability of the image version specified by the maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetHorovod">resetHorovod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetJobType">resetJobType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework">resetMlFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProcessor">resetProcessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang">resetProgrammingLang</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes">resetReleaseNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance">resetVendorGuidance</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAliases` <a name="resetAliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAliases"></a>

```java
public void resetAliases()
```

##### `resetHorovod` <a name="resetHorovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetHorovod"></a>

```java
public void resetHorovod()
```

##### `resetJobType` <a name="resetJobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetJobType"></a>

```java
public void resetJobType()
```

##### `resetMlFramework` <a name="resetMlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework"></a>

```java
public void resetMlFramework()
```

##### `resetProcessor` <a name="resetProcessor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProcessor"></a>

```java
public void resetProcessor()
```

##### `resetProgrammingLang` <a name="resetProgrammingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang"></a>

```java
public void resetProgrammingLang()
```

##### `resetReleaseNotes` <a name="resetReleaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes"></a>

```java
public void resetReleaseNotes()
```

##### `resetVendorGuidance` <a name="resetVendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance"></a>

```java
public void resetVendorGuidance()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_image_version.SagemakerImageVersion;

SagemakerImageVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_image_version.SagemakerImageVersion;

SagemakerImageVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_image_version.SagemakerImageVersion;

SagemakerImageVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_image_version.SagemakerImageVersion;

SagemakerImageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerImageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageVersionArn">imageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput">aliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput">baseImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput">horovodInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput">jobTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput">mlFrameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processorInput">processorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput">programmingLangInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput">releaseNotesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput">vendorGuidanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImage">baseImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovod">horovod</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobType">jobType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework">mlFramework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processor">processor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang">programmingLang</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes">releaseNotes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance">vendorGuidance</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

---

##### `imageVersionArn`<sup>Required</sup> <a name="imageVersionArn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageVersionArn"></a>

```java
public java.lang.String getImageVersionArn();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput"></a>

```java
public java.util.List<java.lang.String> getAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `baseImageInput`<sup>Optional</sup> <a name="baseImageInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput"></a>

```java
public java.lang.String getBaseImageInput();
```

- *Type:* java.lang.String

---

##### `horovodInput`<sup>Optional</sup> <a name="horovodInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput"></a>

```java
public java.lang.Boolean|IResolvable getHorovodInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput"></a>

```java
public java.lang.String getJobTypeInput();
```

- *Type:* java.lang.String

---

##### `mlFrameworkInput`<sup>Optional</sup> <a name="mlFrameworkInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput"></a>

```java
public java.lang.String getMlFrameworkInput();
```

- *Type:* java.lang.String

---

##### `processorInput`<sup>Optional</sup> <a name="processorInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processorInput"></a>

```java
public java.lang.String getProcessorInput();
```

- *Type:* java.lang.String

---

##### `programmingLangInput`<sup>Optional</sup> <a name="programmingLangInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput"></a>

```java
public java.lang.String getProgrammingLangInput();
```

- *Type:* java.lang.String

---

##### `releaseNotesInput`<sup>Optional</sup> <a name="releaseNotesInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput"></a>

```java
public java.lang.String getReleaseNotesInput();
```

- *Type:* java.lang.String

---

##### `vendorGuidanceInput`<sup>Optional</sup> <a name="vendorGuidanceInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput"></a>

```java
public java.lang.String getVendorGuidanceInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseImage`<sup>Required</sup> <a name="baseImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImage"></a>

```java
public java.lang.String getBaseImage();
```

- *Type:* java.lang.String

---

##### `horovod`<sup>Required</sup> <a name="horovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovod"></a>

```java
public java.lang.Boolean|IResolvable getHorovod();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobType"></a>

```java
public java.lang.String getJobType();
```

- *Type:* java.lang.String

---

##### `mlFramework`<sup>Required</sup> <a name="mlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework"></a>

```java
public java.lang.String getMlFramework();
```

- *Type:* java.lang.String

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processor"></a>

```java
public java.lang.String getProcessor();
```

- *Type:* java.lang.String

---

##### `programmingLang`<sup>Required</sup> <a name="programmingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang"></a>

```java
public java.lang.String getProgrammingLang();
```

- *Type:* java.lang.String

---

##### `releaseNotes`<sup>Required</sup> <a name="releaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes"></a>

```java
public java.lang.String getReleaseNotes();
```

- *Type:* java.lang.String

---

##### `vendorGuidance`<sup>Required</sup> <a name="vendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance"></a>

```java
public java.lang.String getVendorGuidance();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerImageVersionConfig <a name="SagemakerImageVersionConfig" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_image_version.SagemakerImageVersionConfig;

SagemakerImageVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseImage(java.lang.String)
    .imageName(java.lang.String)
//  .alias(java.lang.String)
//  .aliases(java.util.List<java.lang.String>)
//  .horovod(java.lang.Boolean|IResolvable)
//  .jobType(java.lang.String)
//  .mlFramework(java.lang.String)
//  .processor(java.lang.String)
//  .programmingLang(java.lang.String)
//  .releaseNotes(java.lang.String)
//  .vendorGuidance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage">baseImage</a></code> | <code>java.lang.String</code> | The registry path of the container image on which this image version is based. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The name of the image this version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | The alias of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | List of aliases for the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod">horovod</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates Horovod compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType">jobType</a></code> | <code>java.lang.String</code> | Indicates SageMaker job type compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework">mlFramework</a></code> | <code>java.lang.String</code> | The machine learning framework vended in the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor">processor</a></code> | <code>java.lang.String</code> | Indicates CPU or GPU compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang">programmingLang</a></code> | <code>java.lang.String</code> | The supported programming language and its version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes">releaseNotes</a></code> | <code>java.lang.String</code> | The maintainer description of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance">vendorGuidance</a></code> | <code>java.lang.String</code> | The availability of the image version specified by the maintainer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseImage`<sup>Required</sup> <a name="baseImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage"></a>

```java
public java.lang.String getBaseImage();
```

- *Type:* java.lang.String

The registry path of the container image on which this image version is based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The name of the image this version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

The alias of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#alias SagemakerImageVersion#alias}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

List of aliases for the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}

---

##### `horovod`<sup>Optional</sup> <a name="horovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod"></a>

```java
public java.lang.Boolean|IResolvable getHorovod();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates Horovod compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}

---

##### `jobType`<sup>Optional</sup> <a name="jobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType"></a>

```java
public java.lang.String getJobType();
```

- *Type:* java.lang.String

Indicates SageMaker job type compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}

---

##### `mlFramework`<sup>Optional</sup> <a name="mlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework"></a>

```java
public java.lang.String getMlFramework();
```

- *Type:* java.lang.String

The machine learning framework vended in the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}

---

##### `processor`<sup>Optional</sup> <a name="processor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor"></a>

```java
public java.lang.String getProcessor();
```

- *Type:* java.lang.String

Indicates CPU or GPU compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}

---

##### `programmingLang`<sup>Optional</sup> <a name="programmingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang"></a>

```java
public java.lang.String getProgrammingLang();
```

- *Type:* java.lang.String

The supported programming language and its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}

---

##### `releaseNotes`<sup>Optional</sup> <a name="releaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes"></a>

```java
public java.lang.String getReleaseNotes();
```

- *Type:* java.lang.String

The maintainer description of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}

---

##### `vendorGuidance`<sup>Optional</sup> <a name="vendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance"></a>

```java
public java.lang.String getVendorGuidance();
```

- *Type:* java.lang.String

The availability of the image version specified by the maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}

---



