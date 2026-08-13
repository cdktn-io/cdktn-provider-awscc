# `s3VectorsIndex` Submodule <a name="`s3VectorsIndex` Submodule" id="@cdktn/provider-awscc.s3VectorsIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3VectorsIndex <a name="S3VectorsIndex" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index awscc_s3vectors_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndex;

S3VectorsIndex.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataType(java.lang.String)
    .dimension(java.lang.Number)
    .distanceMetric(java.lang.String)
//  .encryptionConfiguration(S3VectorsIndexEncryptionConfiguration)
//  .indexName(java.lang.String)
//  .metadataConfiguration(S3VectorsIndexMetadataConfiguration)
//  .tags(IResolvable|java.util.List<S3VectorsIndexTags>)
//  .vectorBucketArn(java.lang.String)
//  .vectorBucketName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.dataType">dataType</a></code> | <code>java.lang.String</code> | The data type of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.dimension">dimension</a></code> | <code>java.lang.Number</code> | The dimensions of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.distanceMetric">distanceMetric</a></code> | <code>java.lang.String</code> | The distance metric to be used for similarity search. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | The encryption configuration for the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.indexName">indexName</a></code> | <code>java.lang.String</code> | The name of the vector index to create. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.metadataConfiguration">metadataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | The metadata configuration for the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>></code> | User tags (key-value pairs) to associate with the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.vectorBucketArn">vectorBucketArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the vector bucket. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.vectorBucketName">vectorBucketName</a></code> | <code>java.lang.String</code> | The name of the vector bucket that contains the vector index. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.dataType"></a>

- *Type:* java.lang.String

The data type of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.dimension"></a>

- *Type:* java.lang.Number

The dimensions of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}

---

##### `distanceMetric`<sup>Required</sup> <a name="distanceMetric" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.distanceMetric"></a>

- *Type:* java.lang.String

The distance metric to be used for similarity search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

The encryption configuration for the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#encryption_configuration S3VectorsIndex#encryption_configuration}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.indexName"></a>

- *Type:* java.lang.String

The name of the vector index to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}

---

##### `metadataConfiguration`<sup>Optional</sup> <a name="metadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.metadataConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

The metadata configuration for the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#metadata_configuration S3VectorsIndex#metadata_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>>

User tags (key-value pairs) to associate with the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}

---

##### `vectorBucketArn`<sup>Optional</sup> <a name="vectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.vectorBucketArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the vector bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#vector_bucket_arn S3VectorsIndex#vector_bucket_arn}

---

##### `vectorBucketName`<sup>Optional</sup> <a name="vectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.vectorBucketName"></a>

- *Type:* java.lang.String

The name of the vector bucket that contains the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration">putMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration">resetMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketArn">resetVectorBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketName">resetVectorBucketName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(S3VectorsIndexEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---

##### `putMetadataConfiguration` <a name="putMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration"></a>

```java
public void putMetadataConfiguration(S3VectorsIndexMetadataConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3VectorsIndexTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetIndexName"></a>

```java
public void resetIndexName()
```

##### `resetMetadataConfiguration` <a name="resetMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration"></a>

```java
public void resetMetadataConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetTags"></a>

```java
public void resetTags()
```

##### `resetVectorBucketArn` <a name="resetVectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketArn"></a>

```java
public void resetVectorBucketArn()
```

##### `resetVectorBucketName` <a name="resetVectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketName"></a>

```java
public void resetVectorBucketName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3VectorsIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndex;

S3VectorsIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndex;

S3VectorsIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndex;

S3VectorsIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndex;

S3VectorsIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3VectorsIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3VectorsIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3VectorsIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3VectorsIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3VectorsIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference">S3VectorsIndexEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexArn">indexArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration">metadataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference">S3VectorsIndexMetadataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList">S3VectorsIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimensionInput">dimensionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput">distanceMetricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput">metadataConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArnInput">vectorBucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput">vectorBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimension">dimension</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetric">distanceMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArn">vectorBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName">vectorBucketName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration"></a>

```java
public S3VectorsIndexEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference">S3VectorsIndexEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexArn`<sup>Required</sup> <a name="indexArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexArn"></a>

```java
public java.lang.String getIndexArn();
```

- *Type:* java.lang.String

---

##### `metadataConfiguration`<sup>Required</sup> <a name="metadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration"></a>

```java
public S3VectorsIndexMetadataConfigurationOutputReference getMetadataConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference">S3VectorsIndexMetadataConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tags"></a>

```java
public S3VectorsIndexTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList">S3VectorsIndexTagsList</a>

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimensionInput"></a>

```java
public java.lang.Number getDimensionInput();
```

- *Type:* java.lang.Number

---

##### `distanceMetricInput`<sup>Optional</sup> <a name="distanceMetricInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput"></a>

```java
public java.lang.String getDistanceMetricInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput"></a>

```java
public IResolvable|S3VectorsIndexEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `metadataConfigurationInput`<sup>Optional</sup> <a name="metadataConfigurationInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput"></a>

```java
public IResolvable|S3VectorsIndexMetadataConfiguration getMetadataConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3VectorsIndexTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>>

---

##### `vectorBucketArnInput`<sup>Optional</sup> <a name="vectorBucketArnInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArnInput"></a>

```java
public java.lang.String getVectorBucketArnInput();
```

- *Type:* java.lang.String

---

##### `vectorBucketNameInput`<sup>Optional</sup> <a name="vectorBucketNameInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput"></a>

```java
public java.lang.String getVectorBucketNameInput();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimension"></a>

```java
public java.lang.Number getDimension();
```

- *Type:* java.lang.Number

---

##### `distanceMetric`<sup>Required</sup> <a name="distanceMetric" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetric"></a>

```java
public java.lang.String getDistanceMetric();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `vectorBucketArn`<sup>Required</sup> <a name="vectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArn"></a>

```java
public java.lang.String getVectorBucketArn();
```

- *Type:* java.lang.String

---

##### `vectorBucketName`<sup>Required</sup> <a name="vectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName"></a>

```java
public java.lang.String getVectorBucketName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3VectorsIndexConfig <a name="S3VectorsIndexConfig" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexConfig;

S3VectorsIndexConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataType(java.lang.String)
    .dimension(java.lang.Number)
    .distanceMetric(java.lang.String)
//  .encryptionConfiguration(S3VectorsIndexEncryptionConfiguration)
//  .indexName(java.lang.String)
//  .metadataConfiguration(S3VectorsIndexMetadataConfiguration)
//  .tags(IResolvable|java.util.List<S3VectorsIndexTags>)
//  .vectorBucketArn(java.lang.String)
//  .vectorBucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dataType">dataType</a></code> | <code>java.lang.String</code> | The data type of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dimension">dimension</a></code> | <code>java.lang.Number</code> | The dimensions of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric">distanceMetric</a></code> | <code>java.lang.String</code> | The distance metric to be used for similarity search. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | The encryption configuration for the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.indexName">indexName</a></code> | <code>java.lang.String</code> | The name of the vector index to create. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration">metadataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | The metadata configuration for the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>></code> | User tags (key-value pairs) to associate with the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketArn">vectorBucketArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the vector bucket. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName">vectorBucketName</a></code> | <code>java.lang.String</code> | The name of the vector bucket that contains the vector index. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

The data type of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dimension"></a>

```java
public java.lang.Number getDimension();
```

- *Type:* java.lang.Number

The dimensions of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}

---

##### `distanceMetric`<sup>Required</sup> <a name="distanceMetric" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric"></a>

```java
public java.lang.String getDistanceMetric();
```

- *Type:* java.lang.String

The distance metric to be used for similarity search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration"></a>

```java
public S3VectorsIndexEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

The encryption configuration for the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#encryption_configuration S3VectorsIndex#encryption_configuration}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

The name of the vector index to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}

---

##### `metadataConfiguration`<sup>Optional</sup> <a name="metadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration"></a>

```java
public S3VectorsIndexMetadataConfiguration getMetadataConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

The metadata configuration for the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#metadata_configuration S3VectorsIndex#metadata_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.tags"></a>

```java
public IResolvable|java.util.List<S3VectorsIndexTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>>

User tags (key-value pairs) to associate with the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}

---

##### `vectorBucketArn`<sup>Optional</sup> <a name="vectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketArn"></a>

```java
public java.lang.String getVectorBucketArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the vector bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#vector_bucket_arn S3VectorsIndex#vector_bucket_arn}

---

##### `vectorBucketName`<sup>Optional</sup> <a name="vectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName"></a>

```java
public java.lang.String getVectorBucketName();
```

- *Type:* java.lang.String

The name of the vector bucket that contains the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}

---

### S3VectorsIndexEncryptionConfiguration <a name="S3VectorsIndexEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexEncryptionConfiguration;

S3VectorsIndexEncryptionConfiguration.builder()
//  .kmsKeyArn(java.lang.String)
//  .sseType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType">sseType</a></code> | <code>java.lang.String</code> | Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration.

This parameter is allowed if and only if sseType is set to aws:kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#kms_key_arn S3VectorsIndex#kms_key_arn}

---

##### `sseType`<sup>Optional</sup> <a name="sseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType"></a>

```java
public java.lang.String getSseType();
```

- *Type:* java.lang.String

Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#sse_type S3VectorsIndex#sse_type}

---

### S3VectorsIndexMetadataConfiguration <a name="S3VectorsIndexMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexMetadataConfiguration;

S3VectorsIndexMetadataConfiguration.builder()
//  .nonFilterableMetadataKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys">nonFilterableMetadataKeys</a></code> | <code>java.util.List<java.lang.String></code> | Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. |

---

##### `nonFilterableMetadataKeys`<sup>Optional</sup> <a name="nonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys"></a>

```java
public java.util.List<java.lang.String> getNonFilterableMetadataKeys();
```

- *Type:* java.util.List<java.lang.String>

Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval.

Unlike default metadata keys, these keys cannot be used as query filters. Non-filterable metadata keys can be retrieved but cannot be searched, queried, or filtered. You can access non-filterable metadata keys of your vectors after finding the vectors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3vectors_index#non_filterable_metadata_keys S3VectorsIndex#non_filterable_metadata_keys}

---

### S3VectorsIndexTags <a name="S3VectorsIndexTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexTags;

S3VectorsIndexTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.value">value</a></code> | <code>java.lang.String</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

## Classes <a name="Classes" id="Classes"></a>

### S3VectorsIndexEncryptionConfigurationOutputReference <a name="S3VectorsIndexEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexEncryptionConfigurationOutputReference;

new S3VectorsIndexEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType">resetSseType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetSseType` <a name="resetSseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType"></a>

```java
public void resetSseType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput">sseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType">sseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `sseTypeInput`<sup>Optional</sup> <a name="sseTypeInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput"></a>

```java
public java.lang.String getSseTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `sseType`<sup>Required</sup> <a name="sseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType"></a>

```java
public java.lang.String getSseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3VectorsIndexEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---


### S3VectorsIndexMetadataConfigurationOutputReference <a name="S3VectorsIndexMetadataConfigurationOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexMetadataConfigurationOutputReference;

new S3VectorsIndexMetadataConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resetNonFilterableMetadataKeys">resetNonFilterableMetadataKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonFilterableMetadataKeys` <a name="resetNonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resetNonFilterableMetadataKeys"></a>

```java
public void resetNonFilterableMetadataKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput">nonFilterableMetadataKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys">nonFilterableMetadataKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nonFilterableMetadataKeysInput`<sup>Optional</sup> <a name="nonFilterableMetadataKeysInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput"></a>

```java
public java.util.List<java.lang.String> getNonFilterableMetadataKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nonFilterableMetadataKeys`<sup>Required</sup> <a name="nonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys"></a>

```java
public java.util.List<java.lang.String> getNonFilterableMetadataKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3VectorsIndexMetadataConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---


### S3VectorsIndexTagsList <a name="S3VectorsIndexTagsList" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexTagsList;

new S3VectorsIndexTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get"></a>

```java
public S3VectorsIndexTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3VectorsIndexTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>>

---


### S3VectorsIndexTagsOutputReference <a name="S3VectorsIndexTagsOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_vectors_index.S3VectorsIndexTagsOutputReference;

new S3VectorsIndexTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3VectorsIndexTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>

---



