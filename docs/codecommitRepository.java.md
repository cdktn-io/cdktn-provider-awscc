# `codecommitRepository` Submodule <a name="`codecommitRepository` Submodule" id="@cdktn/provider-awscc.codecommitRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitRepository <a name="CodecommitRepository" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository awscc_codecommit_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepository;

CodecommitRepository.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repositoryName(java.lang.String)
//  .code(CodecommitRepositoryCode)
//  .kmsKeyId(java.lang.String)
//  .repositoryDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<CodecommitRepositoryTags>)
//  .triggers(IResolvable|java.util.List<CodecommitRepositoryTriggers>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | The name of the new repository to be created. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | Information about code to be committed to a repository after it is created in an AWS CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryDescription">repositoryDescription</a></code> | <code>java.lang.String</code> | A comment or description about the new repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>></code> | One or more tag key-value pairs to use when tagging this repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.triggers">triggers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>></code> | Information about a trigger for a repository. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryName"></a>

- *Type:* java.lang.String

The name of the new repository to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_name CodecommitRepository#repository_name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.

Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#code CodecommitRepository#code}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#kms_key_id CodecommitRepository#kms_key_id}

---

##### `repositoryDescription`<sup>Optional</sup> <a name="repositoryDescription" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryDescription"></a>

- *Type:* java.lang.String

A comment or description about the new repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_description CodecommitRepository#repository_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>>

One or more tag key-value pairs to use when tagging this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#tags CodecommitRepository#tags}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.triggers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>>

Information about a trigger for a repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#triggers CodecommitRepository#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTriggers">putTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetRepositoryDescription">resetRepositoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCode` <a name="putCode" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putCode"></a>

```java
public void putCode(CodecommitRepositoryCode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CodecommitRepositoryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>>

---

##### `putTriggers` <a name="putTriggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTriggers"></a>

```java
public void putTriggers(IResolvable|java.util.List<CodecommitRepositoryTriggers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTriggers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>>

---

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetCode"></a>

```java
public void resetCode()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetRepositoryDescription` <a name="resetRepositoryDescription" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetRepositoryDescription"></a>

```java
public void resetRepositoryDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTags"></a>

```java
public void resetTags()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTriggers"></a>

```java
public void resetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodecommitRepository resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepository;

CodecommitRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepository;

CodecommitRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepository;

CodecommitRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepository;

CodecommitRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodecommitRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodecommitRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodecommitRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodecommitRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodecommitRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlHttp">cloneUrlHttp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlSsh">cloneUrlSsh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference">CodecommitRepositoryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList">CodecommitRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList">CodecommitRepositoryTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.codeInput">codeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescriptionInput">repositoryDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggersInput">triggersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescription">repositoryDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cloneUrlHttp`<sup>Required</sup> <a name="cloneUrlHttp" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlHttp"></a>

```java
public java.lang.String getCloneUrlHttp();
```

- *Type:* java.lang.String

---

##### `cloneUrlSsh`<sup>Required</sup> <a name="cloneUrlSsh" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlSsh"></a>

```java
public java.lang.String getCloneUrlSsh();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.code"></a>

```java
public CodecommitRepositoryCodeOutputReference getCode();
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference">CodecommitRepositoryCodeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tags"></a>

```java
public CodecommitRepositoryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList">CodecommitRepositoryTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggers"></a>

```java
public CodecommitRepositoryTriggersList getTriggers();
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList">CodecommitRepositoryTriggersList</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.codeInput"></a>

```java
public IResolvable|CodecommitRepositoryCode getCodeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryDescriptionInput`<sup>Optional</sup> <a name="repositoryDescriptionInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescriptionInput"></a>

```java
public java.lang.String getRepositoryDescriptionInput();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CodecommitRepositoryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggersInput"></a>

```java
public IResolvable|java.util.List<CodecommitRepositoryTriggers> getTriggersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `repositoryDescription`<sup>Required</sup> <a name="repositoryDescription" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescription"></a>

```java
public java.lang.String getRepositoryDescription();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitRepositoryCode <a name="CodecommitRepositoryCode" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryCode;

CodecommitRepositoryCode.builder()
//  .branchName(java.lang.String)
//  .s3(CodecommitRepositoryCodeS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a></code> | Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository. |

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Optional.

Specifies a branch name to be used as the default branch when importing code into a repository on initial creation. If this property is not set, the name main will be used for the default branch for the repository. Changes to this property are ignored after initial resource creation. We recommend using this parameter to set the name to main to align with the default behavior of CodeCommit unless another name is needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#branch_name CodecommitRepository#branch_name}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.s3"></a>

```java
public CodecommitRepositoryCodeS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#s3 CodecommitRepository#s3}

---

### CodecommitRepositoryCodeS3 <a name="CodecommitRepositoryCodeS3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryCodeS3;

CodecommitRepositoryCodeS3.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
//  .objectVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.key">key</a></code> | <code>java.lang.String</code> | The key to use for accessing the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository.

This can be specified using the name of the bucket in the AWS account. Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#bucket CodecommitRepository#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key to use for accessing the Amazon S3 bucket.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#key CodecommitRepository#key}

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#object_version CodecommitRepository#object_version}

---

### CodecommitRepositoryConfig <a name="CodecommitRepositoryConfig" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryConfig;

CodecommitRepositoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repositoryName(java.lang.String)
//  .code(CodecommitRepositoryCode)
//  .kmsKeyId(java.lang.String)
//  .repositoryDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<CodecommitRepositoryTags>)
//  .triggers(IResolvable|java.util.List<CodecommitRepositoryTriggers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | The name of the new repository to be created. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | Information about code to be committed to a repository after it is created in an AWS CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryDescription">repositoryDescription</a></code> | <code>java.lang.String</code> | A comment or description about the new repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>></code> | One or more tag key-value pairs to use when tagging this repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.triggers">triggers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>></code> | Information about a trigger for a repository. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

The name of the new repository to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_name CodecommitRepository#repository_name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.code"></a>

```java
public CodecommitRepositoryCode getCode();
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.

Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#code CodecommitRepository#code}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#kms_key_id CodecommitRepository#kms_key_id}

---

##### `repositoryDescription`<sup>Optional</sup> <a name="repositoryDescription" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryDescription"></a>

```java
public java.lang.String getRepositoryDescription();
```

- *Type:* java.lang.String

A comment or description about the new repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_description CodecommitRepository#repository_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CodecommitRepositoryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>>

One or more tag key-value pairs to use when tagging this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#tags CodecommitRepository#tags}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.triggers"></a>

```java
public IResolvable|java.util.List<CodecommitRepositoryTriggers> getTriggers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>>

Information about a trigger for a repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#triggers CodecommitRepository#triggers}

---

### CodecommitRepositoryTags <a name="CodecommitRepositoryTags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryTags;

CodecommitRepositoryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#key CodecommitRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#value CodecommitRepository#value}

---

### CodecommitRepositoryTriggers <a name="CodecommitRepositoryTriggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryTriggers;

CodecommitRepositoryTriggers.builder()
//  .branches(java.util.List<java.lang.String>)
//  .customData(java.lang.String)
//  .destinationArn(java.lang.String)
//  .events(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.branches">branches</a></code> | <code>java.util.List<java.lang.String></code> | The branches to be included in the trigger configuration. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.customData">customData</a></code> | <code>java.lang.String</code> | Any custom data associated with the trigger to be included in the information sent to the target of the trigger. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS). |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.name">name</a></code> | <code>java.lang.String</code> | The name of the trigger. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.branches"></a>

```java
public java.util.List<java.lang.String> getBranches();
```

- *Type:* java.util.List<java.lang.String>

The branches to be included in the trigger configuration.

If you specify an empty array, the trigger applies to all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#branches CodecommitRepository#branches}

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Any custom data associated with the trigger to be included in the information sent to the target of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#custom_data CodecommitRepository#custom_data}

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#destination_arn CodecommitRepository#destination_arn}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#events CodecommitRepository#events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#name CodecommitRepository#name}

---

## Classes <a name="Classes" id="Classes"></a>

### CodecommitRepositoryCodeOutputReference <a name="CodecommitRepositoryCodeOutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryCodeOutputReference;

new CodecommitRepositoryCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetBranchName">resetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3"></a>

```java
public void putS3(CodecommitRepositoryCodeS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

---

##### `resetBranchName` <a name="resetBranchName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetBranchName"></a>

```java
public void resetBranchName()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference">CodecommitRepositoryCodeS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3"></a>

```java
public CodecommitRepositoryCodeS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference">CodecommitRepositoryCodeS3OutputReference</a>

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3Input"></a>

```java
public IResolvable|CodecommitRepositoryCodeS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.internalValue"></a>

```java
public IResolvable|CodecommitRepositoryCode getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

---


### CodecommitRepositoryCodeS3OutputReference <a name="CodecommitRepositoryCodeS3OutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryCodeS3OutputReference;

new CodecommitRepositoryCodeS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetObjectVersion">resetObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetObjectVersion` <a name="resetObjectVersion" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetObjectVersion"></a>

```java
public void resetObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersionInput">objectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `objectVersionInput`<sup>Optional</sup> <a name="objectVersionInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersionInput"></a>

```java
public java.lang.String getObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.internalValue"></a>

```java
public IResolvable|CodecommitRepositoryCodeS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

---


### CodecommitRepositoryTagsList <a name="CodecommitRepositoryTagsList" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryTagsList;

new CodecommitRepositoryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.get"></a>

```java
public CodecommitRepositoryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodecommitRepositoryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>>

---


### CodecommitRepositoryTagsOutputReference <a name="CodecommitRepositoryTagsOutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryTagsOutputReference;

new CodecommitRepositoryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodecommitRepositoryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>

---


### CodecommitRepositoryTriggersList <a name="CodecommitRepositoryTriggersList" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryTriggersList;

new CodecommitRepositoryTriggersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.get"></a>

```java
public CodecommitRepositoryTriggersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodecommitRepositoryTriggers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>>

---


### CodecommitRepositoryTriggersOutputReference <a name="CodecommitRepositoryTriggersOutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codecommit_repository.CodecommitRepositoryTriggersOutputReference;

new CodecommitRepositoryTriggersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranches` <a name="resetBranches" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetBranches"></a>

```java
public void resetBranches()
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetCustomData"></a>

```java
public void resetCustomData()
```

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```

##### `resetEvents` <a name="resetEvents" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetEvents"></a>

```java
public void resetEvents()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branchesInput">branchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branches">branches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branchesInput"></a>

```java
public java.util.List<java.lang.String> getBranchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branches"></a>

```java
public java.util.List<java.lang.String> getBranches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.internalValue"></a>

```java
public IResolvable|CodecommitRepositoryTriggers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>

---



