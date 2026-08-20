# `codestarconnectionsRepositoryLink` Submodule <a name="`codestarconnectionsRepositoryLink` Submodule" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsRepositoryLink <a name="CodestarconnectionsRepositoryLink" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link awscc_codestarconnections_repository_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLink;

CodestarconnectionsRepositoryLink.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionArn(java.lang.String)
    .ownerId(java.lang.String)
    .repositoryName(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CodestarconnectionsRepositoryLinkTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the CodeStarConnection. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.ownerId">ownerId</a></code> | <code>java.lang.String</code> | the ID of the entity that owns the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | The repository for which the link is being created. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>></code> | Specifies the tags applied to a RepositoryLink. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connectionArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the CodeStarConnection.

The ARN is used as the connection reference when the connection is shared between AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#connection_arn CodestarconnectionsRepositoryLink#connection_arn}

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.ownerId"></a>

- *Type:* java.lang.String

the ID of the entity that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#owner_id CodestarconnectionsRepositoryLink#owner_id}

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.repositoryName"></a>

- *Type:* java.lang.String

The repository for which the link is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#repository_name CodestarconnectionsRepositoryLink#repository_name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties.

If not specified, a default key will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#encryption_key_arn CodestarconnectionsRepositoryLink#encryption_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>>

Specifies the tags applied to a RepositoryLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#tags CodestarconnectionsRepositoryLink#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CodestarconnectionsRepositoryLinkTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>>

---

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetEncryptionKeyArn"></a>

```java
public void resetEncryptionKeyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLink;

CodestarconnectionsRepositoryLink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLink;

CodestarconnectionsRepositoryLink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLink;

CodestarconnectionsRepositoryLink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLink;

CodestarconnectionsRepositoryLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodestarconnectionsRepositoryLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodestarconnectionsRepositoryLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodestarconnectionsRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkArn">repositoryLinkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkId">repositoryLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList">CodestarconnectionsRepositoryLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArnInput">connectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

##### `repositoryLinkArn`<sup>Required</sup> <a name="repositoryLinkArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkArn"></a>

```java
public java.lang.String getRepositoryLinkArn();
```

- *Type:* java.lang.String

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkId"></a>

```java
public java.lang.String getRepositoryLinkId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tags"></a>

```java
public CodestarconnectionsRepositoryLinkTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList">CodestarconnectionsRepositoryLinkTagsList</a>

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArnInput"></a>

```java
public java.lang.String getConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArnInput"></a>

```java
public java.lang.String getEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CodestarconnectionsRepositoryLinkTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>>

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsRepositoryLinkConfig <a name="CodestarconnectionsRepositoryLinkConfig" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLinkConfig;

CodestarconnectionsRepositoryLinkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionArn(java.lang.String)
    .ownerId(java.lang.String)
    .repositoryName(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CodestarconnectionsRepositoryLinkTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the CodeStarConnection. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | the ID of the entity that owns the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | The repository for which the link is being created. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>></code> | Specifies the tags applied to a RepositoryLink. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the CodeStarConnection.

The ARN is used as the connection reference when the connection is shared between AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#connection_arn CodestarconnectionsRepositoryLink#connection_arn}

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

the ID of the entity that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#owner_id CodestarconnectionsRepositoryLink#owner_id}

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

The repository for which the link is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#repository_name CodestarconnectionsRepositoryLink#repository_name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties.

If not specified, a default key will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#encryption_key_arn CodestarconnectionsRepositoryLink#encryption_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CodestarconnectionsRepositoryLinkTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>>

Specifies the tags applied to a RepositoryLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#tags CodestarconnectionsRepositoryLink#tags}

---

### CodestarconnectionsRepositoryLinkTags <a name="CodestarconnectionsRepositoryLinkTags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLinkTags;

CodestarconnectionsRepositoryLinkTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#key CodestarconnectionsRepositoryLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codestarconnections_repository_link#value CodestarconnectionsRepositoryLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarconnectionsRepositoryLinkTagsList <a name="CodestarconnectionsRepositoryLinkTagsList" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLinkTagsList;

new CodestarconnectionsRepositoryLinkTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get"></a>

```java
public CodestarconnectionsRepositoryLinkTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodestarconnectionsRepositoryLinkTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>>

---


### CodestarconnectionsRepositoryLinkTagsOutputReference <a name="CodestarconnectionsRepositoryLinkTagsOutputReference" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_repository_link.CodestarconnectionsRepositoryLinkTagsOutputReference;

new CodestarconnectionsRepositoryLinkTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodestarconnectionsRepositoryLinkTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>

---



