# `ecrPublicRepository` Submodule <a name="`ecrPublicRepository` Submodule" id="@cdktn/provider-awscc.ecrPublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPublicRepository <a name="EcrPublicRepository" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository awscc_ecr_public_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepository;

EcrPublicRepository.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .repositoryCatalogData(EcrPublicRepositoryRepositoryCatalogData)
//  .repositoryName(java.lang.String)
//  .repositoryPolicyText(java.lang.String)
//  .tags(IResolvable|java.util.List<EcrPublicRepositoryTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryCatalogData">repositoryCatalogData</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | The details about the repository that are publicly visible in the Amazon ECR Public Gallery. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | The name to use for the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryPolicyText">repositoryPolicyText</a></code> | <code>java.lang.String</code> | The JSON repository policy text to apply to the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `repositoryCatalogData`<sup>Optional</sup> <a name="repositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryCatalogData"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

The details about the repository that are publicly visible in the Amazon ECR Public Gallery.

For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_catalog_data EcrPublicRepository#repository_catalog_data}

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryName"></a>

- *Type:* java.lang.String

The name to use for the public repository.

The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_name EcrPublicRepository#repository_name}

---

##### `repositoryPolicyText`<sup>Optional</sup> <a name="repositoryPolicyText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryPolicyText"></a>

- *Type:* java.lang.String

The JSON repository policy text to apply to the public repository.

For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_policy_text EcrPublicRepository#repository_policy_text}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#tags EcrPublicRepository#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData">putRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryCatalogData">resetRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryPolicyText">resetRepositoryPolicyText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRepositoryCatalogData` <a name="putRepositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData"></a>

```java
public void putRepositoryCatalogData(EcrPublicRepositoryRepositoryCatalogData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EcrPublicRepositoryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>>

---

##### `resetRepositoryCatalogData` <a name="resetRepositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryCatalogData"></a>

```java
public void resetRepositoryCatalogData()
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryName"></a>

```java
public void resetRepositoryName()
```

##### `resetRepositoryPolicyText` <a name="resetRepositoryPolicyText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryPolicyText"></a>

```java
public void resetRepositoryPolicyText()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcrPublicRepository resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepository;

EcrPublicRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepository;

EcrPublicRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepository;

EcrPublicRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepository;

EcrPublicRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcrPublicRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcrPublicRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcrPublicRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcrPublicRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcrPublicRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogData">repositoryCatalogData</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference">EcrPublicRepositoryRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList">EcrPublicRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogDataInput">repositoryCatalogDataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyTextInput">repositoryPolicyTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyText">repositoryPolicyText</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositoryCatalogData`<sup>Required</sup> <a name="repositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogData"></a>

```java
public EcrPublicRepositoryRepositoryCatalogDataOutputReference getRepositoryCatalogData();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference">EcrPublicRepositoryRepositoryCatalogDataOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tags"></a>

```java
public EcrPublicRepositoryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList">EcrPublicRepositoryTagsList</a>

---

##### `repositoryCatalogDataInput`<sup>Optional</sup> <a name="repositoryCatalogDataInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogDataInput"></a>

```java
public IResolvable|EcrPublicRepositoryRepositoryCatalogData getRepositoryCatalogDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `repositoryPolicyTextInput`<sup>Optional</sup> <a name="repositoryPolicyTextInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyTextInput"></a>

```java
public java.lang.String getRepositoryPolicyTextInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EcrPublicRepositoryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

##### `repositoryPolicyText`<sup>Required</sup> <a name="repositoryPolicyText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyText"></a>

```java
public java.lang.String getRepositoryPolicyText();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPublicRepositoryConfig <a name="EcrPublicRepositoryConfig" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepositoryConfig;

EcrPublicRepositoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .repositoryCatalogData(EcrPublicRepositoryRepositoryCatalogData)
//  .repositoryName(java.lang.String)
//  .repositoryPolicyText(java.lang.String)
//  .tags(IResolvable|java.util.List<EcrPublicRepositoryTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryCatalogData">repositoryCatalogData</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | The details about the repository that are publicly visible in the Amazon ECR Public Gallery. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | The name to use for the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryPolicyText">repositoryPolicyText</a></code> | <code>java.lang.String</code> | The JSON repository policy text to apply to the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `repositoryCatalogData`<sup>Optional</sup> <a name="repositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryCatalogData"></a>

```java
public EcrPublicRepositoryRepositoryCatalogData getRepositoryCatalogData();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

The details about the repository that are publicly visible in the Amazon ECR Public Gallery.

For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_catalog_data EcrPublicRepository#repository_catalog_data}

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

The name to use for the public repository.

The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_name EcrPublicRepository#repository_name}

---

##### `repositoryPolicyText`<sup>Optional</sup> <a name="repositoryPolicyText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryPolicyText"></a>

```java
public java.lang.String getRepositoryPolicyText();
```

- *Type:* java.lang.String

The JSON repository policy text to apply to the public repository.

For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_policy_text EcrPublicRepository#repository_policy_text}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EcrPublicRepositoryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#tags EcrPublicRepository#tags}

---

### EcrPublicRepositoryRepositoryCatalogData <a name="EcrPublicRepositoryRepositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepositoryRepositoryCatalogData;

EcrPublicRepositoryRepositoryCatalogData.builder()
//  .aboutText(java.lang.String)
//  .architectures(java.util.List<java.lang.String>)
//  .operatingSystems(java.util.List<java.lang.String>)
//  .repositoryDescription(java.lang.String)
//  .usageText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.aboutText">aboutText</a></code> | <code>java.lang.String</code> | Provide a detailed description of the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | Select the system architectures that the images in your repository are compatible with. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.operatingSystems">operatingSystems</a></code> | <code>java.util.List<java.lang.String></code> | Select the operating systems that the images in your repository are compatible with. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.repositoryDescription">repositoryDescription</a></code> | <code>java.lang.String</code> | The description of the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.usageText">usageText</a></code> | <code>java.lang.String</code> | Provide detailed information about how to use the images in the repository. |

---

##### `aboutText`<sup>Optional</sup> <a name="aboutText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.aboutText"></a>

```java
public java.lang.String getAboutText();
```

- *Type:* java.lang.String

Provide a detailed description of the repository.

Identify what is included in the repository, any licensing details, or other relevant information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#about_text EcrPublicRepository#about_text}

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

Select the system architectures that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#architectures EcrPublicRepository#architectures}

---

##### `operatingSystems`<sup>Optional</sup> <a name="operatingSystems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.operatingSystems"></a>

```java
public java.util.List<java.lang.String> getOperatingSystems();
```

- *Type:* java.util.List<java.lang.String>

Select the operating systems that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#operating_systems EcrPublicRepository#operating_systems}

---

##### `repositoryDescription`<sup>Optional</sup> <a name="repositoryDescription" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.repositoryDescription"></a>

```java
public java.lang.String getRepositoryDescription();
```

- *Type:* java.lang.String

The description of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_description EcrPublicRepository#repository_description}

---

##### `usageText`<sup>Optional</sup> <a name="usageText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.usageText"></a>

```java
public java.lang.String getUsageText();
```

- *Type:* java.lang.String

Provide detailed information about how to use the images in the repository.

This provides context, support information, and additional usage details for users of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#usage_text EcrPublicRepository#usage_text}

---

### EcrPublicRepositoryTags <a name="EcrPublicRepositoryTags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepositoryTags;

EcrPublicRepositoryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.key">key</a></code> | <code>java.lang.String</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.value">value</a></code> | <code>java.lang.String</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#key EcrPublicRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#value EcrPublicRepository#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrPublicRepositoryRepositoryCatalogDataOutputReference <a name="EcrPublicRepositoryRepositoryCatalogDataOutputReference" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepositoryRepositoryCatalogDataOutputReference;

new EcrPublicRepositoryRepositoryCatalogDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetAboutText">resetAboutText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetOperatingSystems">resetOperatingSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetRepositoryDescription">resetRepositoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetUsageText">resetUsageText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAboutText` <a name="resetAboutText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetAboutText"></a>

```java
public void resetAboutText()
```

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```java
public void resetArchitectures()
```

##### `resetOperatingSystems` <a name="resetOperatingSystems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```java
public void resetOperatingSystems()
```

##### `resetRepositoryDescription` <a name="resetRepositoryDescription" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetRepositoryDescription"></a>

```java
public void resetRepositoryDescription()
```

##### `resetUsageText` <a name="resetUsageText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetUsageText"></a>

```java
public void resetUsageText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutTextInput">aboutTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystemsInput">operatingSystemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescriptionInput">repositoryDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageTextInput">usageTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutText">aboutText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystems">operatingSystems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescription">repositoryDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageText">usageText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aboutTextInput`<sup>Optional</sup> <a name="aboutTextInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```java
public java.lang.String getAboutTextInput();
```

- *Type:* java.lang.String

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```java
public java.util.List<java.lang.String> getArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operatingSystemsInput`<sup>Optional</sup> <a name="operatingSystemsInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```java
public java.util.List<java.lang.String> getOperatingSystemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryDescriptionInput`<sup>Optional</sup> <a name="repositoryDescriptionInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescriptionInput"></a>

```java
public java.lang.String getRepositoryDescriptionInput();
```

- *Type:* java.lang.String

---

##### `usageTextInput`<sup>Optional</sup> <a name="usageTextInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```java
public java.lang.String getUsageTextInput();
```

- *Type:* java.lang.String

---

##### `aboutText`<sup>Required</sup> <a name="aboutText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutText"></a>

```java
public java.lang.String getAboutText();
```

- *Type:* java.lang.String

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operatingSystems`<sup>Required</sup> <a name="operatingSystems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```java
public java.util.List<java.lang.String> getOperatingSystems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryDescription`<sup>Required</sup> <a name="repositoryDescription" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescription"></a>

```java
public java.lang.String getRepositoryDescription();
```

- *Type:* java.lang.String

---

##### `usageText`<sup>Required</sup> <a name="usageText" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageText"></a>

```java
public java.lang.String getUsageText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.internalValue"></a>

```java
public IResolvable|EcrPublicRepositoryRepositoryCatalogData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---


### EcrPublicRepositoryTagsList <a name="EcrPublicRepositoryTagsList" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepositoryTagsList;

new EcrPublicRepositoryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get"></a>

```java
public EcrPublicRepositoryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcrPublicRepositoryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>>

---


### EcrPublicRepositoryTagsOutputReference <a name="EcrPublicRepositoryTagsOutputReference" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_public_repository.EcrPublicRepositoryTagsOutputReference;

new EcrPublicRepositoryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcrPublicRepositoryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>

---



