# `codegurureviewerRepositoryAssociation` Submodule <a name="`codegurureviewerRepositoryAssociation` Submodule" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodegurureviewerRepositoryAssociation <a name="CodegurureviewerRepositoryAssociation" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association awscc_codegurureviewer_repository_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociation;

CodegurureviewerRepositoryAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .bucketName(java.lang.String)
//  .connectionArn(java.lang.String)
//  .owner(java.lang.String)
//  .tags(IResolvable|java.util.List<CodegurureviewerRepositoryAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | The owner of the repository. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>></code> | The tags associated with a repository association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#type CodegurureviewerRepositoryAssociation#type}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}

---

##### `connectionArn`<sup>Optional</sup> <a name="connectionArn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connectionArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

The owner of the repository.

For a Bitbucket repository, this is the username for the account that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>>

The tags associated with a repository association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetConnectionArn">resetConnectionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CodegurureviewerRepositoryAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetConnectionArn` <a name="resetConnectionArn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetConnectionArn"></a>

```java
public void resetConnectionArn()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociation;

CodegurureviewerRepositoryAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociation;

CodegurureviewerRepositoryAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociation;

CodegurureviewerRepositoryAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociation;

CodegurureviewerRepositoryAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodegurureviewerRepositoryAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodegurureviewerRepositoryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodegurureviewerRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodegurureviewerRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationArn">associationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList">CodegurureviewerRepositoryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArnInput">connectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associationArn`<sup>Required</sup> <a name="associationArn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationArn"></a>

```java
public java.lang.String getAssociationArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags"></a>

```java
public CodegurureviewerRepositoryAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList">CodegurureviewerRepositoryAssociationTagsList</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArnInput"></a>

```java
public java.lang.String getConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CodegurureviewerRepositoryAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodegurureviewerRepositoryAssociationConfig <a name="CodegurureviewerRepositoryAssociationConfig" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociationConfig;

CodegurureviewerRepositoryAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .bucketName(java.lang.String)
//  .connectionArn(java.lang.String)
//  .owner(java.lang.String)
//  .tags(IResolvable|java.util.List<CodegurureviewerRepositoryAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | The owner of the repository. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>></code> | The tags associated with a repository association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#type CodegurureviewerRepositoryAssociation#type}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}

---

##### `connectionArn`<sup>Optional</sup> <a name="connectionArn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

The owner of the repository.

For a Bitbucket repository, this is the username for the account that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CodegurureviewerRepositoryAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>>

The tags associated with a repository association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}

---

### CodegurureviewerRepositoryAssociationTags <a name="CodegurureviewerRepositoryAssociationTags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociationTags;

CodegurureviewerRepositoryAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

## Classes <a name="Classes" id="Classes"></a>

### CodegurureviewerRepositoryAssociationTagsList <a name="CodegurureviewerRepositoryAssociationTagsList" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociationTagsList;

new CodegurureviewerRepositoryAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.get"></a>

```java
public CodegurureviewerRepositoryAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodegurureviewerRepositoryAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>>

---


### CodegurureviewerRepositoryAssociationTagsOutputReference <a name="CodegurureviewerRepositoryAssociationTagsOutputReference" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codegurureviewer_repository_association.CodegurureviewerRepositoryAssociationTagsOutputReference;

new CodegurureviewerRepositoryAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodegurureviewerRepositoryAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>

---



