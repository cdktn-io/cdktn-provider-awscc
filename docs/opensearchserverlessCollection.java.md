# `opensearchserverlessCollection` Submodule <a name="`opensearchserverlessCollection` Submodule" id="@cdktn/provider-awscc.opensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollection <a name="OpensearchserverlessCollection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection awscc_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .collectionGroupName(java.lang.String)
//  .deletionProtection(java.lang.String)
//  .description(java.lang.String)
//  .encryptionConfig(OpensearchserverlessCollectionEncryptionConfig)
//  .standbyReplicas(java.lang.String)
//  .tags(IResolvable|java.util.List<OpensearchserverlessCollectionTags>)
//  .type(java.lang.String)
//  .vectorOptions(OpensearchserverlessCollectionVectorOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.collectionGroupName">collectionGroupName</a></code> | <code>java.lang.String</code> | The name of the collection group to associate with the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | The deletion protection state of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | Encryption settings for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | The possible standby replicas for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>></code> | List of tags to be added to the resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The possible types for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.vectorOptions">vectorOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | Vector search configuration options for the collection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the collection.

The name must meet the following criteria:
Unique to your account and AWS Region
Starts with a lowercase letter
Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
Contains between 3 and 64 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `collectionGroupName`<sup>Optional</sup> <a name="collectionGroupName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.collectionGroupName"></a>

- *Type:* java.lang.String

The name of the collection group to associate with the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.String

The deletion protection state of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#deletion_protection OpensearchserverlessCollection#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

Encryption settings for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}

---

##### `standbyReplicas`<sup>Optional</sup> <a name="standbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.standbyReplicas"></a>

- *Type:* java.lang.String

The possible standby replicas for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>>

List of tags to be added to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The possible types for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `vectorOptions`<sup>Optional</sup> <a name="vectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.vectorOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

Vector search configuration options for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions">putVectorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName">resetCollectionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas">resetStandbyReplicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions">resetVectorOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(OpensearchserverlessCollectionEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OpensearchserverlessCollectionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>>

---

##### `putVectorOptions` <a name="putVectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions"></a>

```java
public void putVectorOptions(OpensearchserverlessCollectionVectorOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---

##### `resetCollectionGroupName` <a name="resetCollectionGroupName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName"></a>

```java
public void resetCollectionGroupName()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetStandbyReplicas` <a name="resetStandbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas"></a>

```java
public void resetStandbyReplicas()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetType"></a>

```java
public void resetType()
```

##### `resetVectorOptions` <a name="resetVectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions"></a>

```java
public void resetVectorOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollection;

OpensearchserverlessCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchserverlessCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchserverlessCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint">collectionEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint">dashboardEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference">OpensearchserverlessCollectionEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fipsEndpoints">fipsEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference">OpensearchserverlessCollectionFipsEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList">OpensearchserverlessCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions">vectorOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference">OpensearchserverlessCollectionVectorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput">collectionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput">standbyReplicasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput">vectorOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName">collectionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `collectionEndpoint`<sup>Required</sup> <a name="collectionEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint"></a>

```java
public java.lang.String getCollectionEndpoint();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `dashboardEndpoint`<sup>Required</sup> <a name="dashboardEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint"></a>

```java
public java.lang.String getDashboardEndpoint();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig"></a>

```java
public OpensearchserverlessCollectionEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference">OpensearchserverlessCollectionEncryptionConfigOutputReference</a>

---

##### `fipsEndpoints`<sup>Required</sup> <a name="fipsEndpoints" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fipsEndpoints"></a>

```java
public OpensearchserverlessCollectionFipsEndpointsOutputReference getFipsEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference">OpensearchserverlessCollectionFipsEndpointsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags"></a>

```java
public OpensearchserverlessCollectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList">OpensearchserverlessCollectionTagsList</a>

---

##### `vectorOptions`<sup>Required</sup> <a name="vectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions"></a>

```java
public OpensearchserverlessCollectionVectorOptionsOutputReference getVectorOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference">OpensearchserverlessCollectionVectorOptionsOutputReference</a>

---

##### `collectionGroupNameInput`<sup>Optional</sup> <a name="collectionGroupNameInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput"></a>

```java
public java.lang.String getCollectionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtectionInput"></a>

```java
public java.lang.String getDeletionProtectionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput"></a>

```java
public IResolvable|OpensearchserverlessCollectionEncryptionConfig getEncryptionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `standbyReplicasInput`<sup>Optional</sup> <a name="standbyReplicasInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput"></a>

```java
public java.lang.String getStandbyReplicasInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vectorOptionsInput`<sup>Optional</sup> <a name="vectorOptionsInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput"></a>

```java
public IResolvable|OpensearchserverlessCollectionVectorOptions getVectorOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---

##### `collectionGroupName`<sup>Required</sup> <a name="collectionGroupName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName"></a>

```java
public java.lang.String getCollectionGroupName();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas"></a>

```java
public java.lang.String getStandbyReplicas();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionConfig <a name="OpensearchserverlessCollectionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionConfig;

OpensearchserverlessCollectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .collectionGroupName(java.lang.String)
//  .deletionProtection(java.lang.String)
//  .description(java.lang.String)
//  .encryptionConfig(OpensearchserverlessCollectionEncryptionConfig)
//  .standbyReplicas(java.lang.String)
//  .tags(IResolvable|java.util.List<OpensearchserverlessCollectionTags>)
//  .type(java.lang.String)
//  .vectorOptions(OpensearchserverlessCollectionVectorOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName">collectionGroupName</a></code> | <code>java.lang.String</code> | The name of the collection group to associate with the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | The deletion protection state of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | Encryption settings for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | The possible standby replicas for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>></code> | List of tags to be added to the resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The possible types for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions">vectorOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | Vector search configuration options for the collection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the collection.

The name must meet the following criteria:
Unique to your account and AWS Region
Starts with a lowercase letter
Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
Contains between 3 and 64 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `collectionGroupName`<sup>Optional</sup> <a name="collectionGroupName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName"></a>

```java
public java.lang.String getCollectionGroupName();
```

- *Type:* java.lang.String

The name of the collection group to associate with the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

The deletion protection state of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#deletion_protection OpensearchserverlessCollection#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig"></a>

```java
public OpensearchserverlessCollectionEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

Encryption settings for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}

---

##### `standbyReplicas`<sup>Optional</sup> <a name="standbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas"></a>

```java
public java.lang.String getStandbyReplicas();
```

- *Type:* java.lang.String

The possible standby replicas for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>>

List of tags to be added to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The possible types for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `vectorOptions`<sup>Optional</sup> <a name="vectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions"></a>

```java
public OpensearchserverlessCollectionVectorOptions getVectorOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

Vector search configuration options for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}

---

### OpensearchserverlessCollectionEncryptionConfig <a name="OpensearchserverlessCollectionEncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionEncryptionConfig;

OpensearchserverlessCollectionEncryptionConfig.builder()
//  .awsOwnedKey(java.lang.Boolean|IResolvable)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey">awsOwnedKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to use an AWS owned key for encryption. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Key Management Service key used to encrypt the collection. |

---

##### `awsOwnedKey`<sup>Optional</sup> <a name="awsOwnedKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey"></a>

```java
public java.lang.Boolean|IResolvable getAwsOwnedKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to use an AWS owned key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Key Management Service key used to encrypt the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}

---

### OpensearchserverlessCollectionFipsEndpoints <a name="OpensearchserverlessCollectionFipsEndpoints" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionFipsEndpoints;

OpensearchserverlessCollectionFipsEndpoints.builder()
    .build();
```


### OpensearchserverlessCollectionTags <a name="OpensearchserverlessCollectionTags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionTags;

OpensearchserverlessCollectionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key in the key-value pair. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value in the key-value pair. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#key OpensearchserverlessCollection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#value OpensearchserverlessCollection#value}

---

### OpensearchserverlessCollectionVectorOptions <a name="OpensearchserverlessCollectionVectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionVectorOptions;

OpensearchserverlessCollectionVectorOptions.builder()
//  .serverlessVectorAcceleration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration">serverlessVectorAcceleration</a></code> | <code>java.lang.String</code> | Indicates whether GPU acceleration is enabled for vector indexing. |

---

##### `serverlessVectorAcceleration`<sup>Optional</sup> <a name="serverlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration"></a>

```java
public java.lang.String getServerlessVectorAcceleration();
```

- *Type:* java.lang.String

Indicates whether GPU acceleration is enabled for vector indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionEncryptionConfigOutputReference <a name="OpensearchserverlessCollectionEncryptionConfigOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionEncryptionConfigOutputReference;

new OpensearchserverlessCollectionEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey">resetAwsOwnedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsOwnedKey` <a name="resetAwsOwnedKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey"></a>

```java
public void resetAwsOwnedKey()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput">awsOwnedKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey">awsOwnedKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsOwnedKeyInput`<sup>Optional</sup> <a name="awsOwnedKeyInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getAwsOwnedKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `awsOwnedKey`<sup>Required</sup> <a name="awsOwnedKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey"></a>

```java
public java.lang.Boolean|IResolvable getAwsOwnedKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessCollectionEncryptionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---


### OpensearchserverlessCollectionFipsEndpointsOutputReference <a name="OpensearchserverlessCollectionFipsEndpointsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionFipsEndpointsOutputReference;

new OpensearchserverlessCollectionFipsEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint">collectionEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint">dashboardEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints">OpensearchserverlessCollectionFipsEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionEndpoint`<sup>Required</sup> <a name="collectionEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint"></a>

```java
public java.lang.String getCollectionEndpoint();
```

- *Type:* java.lang.String

---

##### `dashboardEndpoint`<sup>Required</sup> <a name="dashboardEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint"></a>

```java
public java.lang.String getDashboardEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue"></a>

```java
public OpensearchserverlessCollectionFipsEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints">OpensearchserverlessCollectionFipsEndpoints</a>

---


### OpensearchserverlessCollectionTagsList <a name="OpensearchserverlessCollectionTagsList" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionTagsList;

new OpensearchserverlessCollectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get"></a>

```java
public OpensearchserverlessCollectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserverlessCollectionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>>

---


### OpensearchserverlessCollectionTagsOutputReference <a name="OpensearchserverlessCollectionTagsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionTagsOutputReference;

new OpensearchserverlessCollectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessCollectionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>

---


### OpensearchserverlessCollectionVectorOptionsOutputReference <a name="OpensearchserverlessCollectionVectorOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection.OpensearchserverlessCollectionVectorOptionsOutputReference;

new OpensearchserverlessCollectionVectorOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration">resetServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerlessVectorAcceleration` <a name="resetServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```java
public void resetServerlessVectorAcceleration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput">serverlessVectorAccelerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration">serverlessVectorAcceleration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverlessVectorAccelerationInput`<sup>Optional</sup> <a name="serverlessVectorAccelerationInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```java
public java.lang.String getServerlessVectorAccelerationInput();
```

- *Type:* java.lang.String

---

##### `serverlessVectorAcceleration`<sup>Required</sup> <a name="serverlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```java
public java.lang.String getServerlessVectorAcceleration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessCollectionVectorOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---



