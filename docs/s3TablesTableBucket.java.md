# `s3TablesTableBucket` Submodule <a name="`s3TablesTableBucket` Submodule" id="@cdktn/provider-awscc.s3TablesTableBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucket <a name="S3TablesTableBucket" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket awscc_s3tables_table_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucket;

S3TablesTableBucket.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .tableBucketName(java.lang.String)
//  .encryptionConfiguration(S3TablesTableBucketEncryptionConfiguration)
//  .metricsConfiguration(S3TablesTableBucketMetricsConfiguration)
//  .replicationConfiguration(S3TablesTableBucketReplicationConfiguration)
//  .storageClassConfiguration(S3TablesTableBucketStorageClassConfiguration)
//  .tags(IResolvable|java.util.List<S3TablesTableBucketTags>)
//  .unreferencedFileRemoval(S3TablesTableBucketUnreferencedFileRemoval)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tableBucketName">tableBucketName</a></code> | <code>java.lang.String</code> | A name for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Specifies encryption settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | Settings governing the Metric configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | Specifies replication configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | Specifies storage class settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>></code> | User tags (key-value pairs) to associate with the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.unreferencedFileRemoval">unreferencedFileRemoval</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | Settings governing the Unreferenced File Removal maintenance action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tableBucketName"></a>

- *Type:* java.lang.String

A name for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#table_bucket_name S3TablesTableBucket#table_bucket_name}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Specifies encryption settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="metricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.metricsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

Settings governing the Metric configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#metrics_configuration S3TablesTableBucket#metrics_configuration}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

Specifies replication configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#replication_configuration S3TablesTableBucket#replication_configuration}

---

##### `storageClassConfiguration`<sup>Optional</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.storageClassConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

Specifies storage class settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#storage_class_configuration S3TablesTableBucket#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>>

User tags (key-value pairs) to associate with the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#tags S3TablesTableBucket#tags}

---

##### `unreferencedFileRemoval`<sup>Optional</sup> <a name="unreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.unreferencedFileRemoval"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

Settings governing the Unreferenced File Removal maintenance action.

Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#unreferenced_file_removal S3TablesTableBucket#unreferenced_file_removal}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration">putMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration">putStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval">putUnreferencedFileRemoval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetMetricsConfiguration">resetMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetStorageClassConfiguration">resetStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetUnreferencedFileRemoval">resetUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(S3TablesTableBucketEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---

##### `putMetricsConfiguration` <a name="putMetricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration"></a>

```java
public void putMetricsConfiguration(S3TablesTableBucketMetricsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration"></a>

```java
public void putReplicationConfiguration(S3TablesTableBucketReplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---

##### `putStorageClassConfiguration` <a name="putStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration"></a>

```java
public void putStorageClassConfiguration(S3TablesTableBucketStorageClassConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3TablesTableBucketTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>>

---

##### `putUnreferencedFileRemoval` <a name="putUnreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval"></a>

```java
public void putUnreferencedFileRemoval(S3TablesTableBucketUnreferencedFileRemoval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetMetricsConfiguration` <a name="resetMetricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetMetricsConfiguration"></a>

```java
public void resetMetricsConfiguration()
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetReplicationConfiguration"></a>

```java
public void resetReplicationConfiguration()
```

##### `resetStorageClassConfiguration` <a name="resetStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetStorageClassConfiguration"></a>

```java
public void resetStorageClassConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetTags"></a>

```java
public void resetTags()
```

##### `resetUnreferencedFileRemoval` <a name="resetUnreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetUnreferencedFileRemoval"></a>

```java
public void resetUnreferencedFileRemoval()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3TablesTableBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucket;

S3TablesTableBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucket;

S3TablesTableBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucket;

S3TablesTableBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucket;

S3TablesTableBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3TablesTableBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3TablesTableBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3TablesTableBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3TablesTableBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference">S3TablesTableBucketMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference">S3TablesTableBucketReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference">S3TablesTableBucketStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketArn">tableBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList">S3TablesTableBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemoval">unreferencedFileRemoval</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference">S3TablesTableBucketUnreferencedFileRemovalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfigurationInput">metricsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfigurationInput">storageClassConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketNameInput">tableBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemovalInput">unreferencedFileRemovalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketName">tableBucketName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration"></a>

```java
public S3TablesTableBucketEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricsConfiguration`<sup>Required</sup> <a name="metricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfiguration"></a>

```java
public S3TablesTableBucketMetricsConfigurationOutputReference getMetricsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference">S3TablesTableBucketMetricsConfigurationOutputReference</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfiguration"></a>

```java
public S3TablesTableBucketReplicationConfigurationOutputReference getReplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference">S3TablesTableBucketReplicationConfigurationOutputReference</a>

---

##### `storageClassConfiguration`<sup>Required</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfiguration"></a>

```java
public S3TablesTableBucketStorageClassConfigurationOutputReference getStorageClassConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference">S3TablesTableBucketStorageClassConfigurationOutputReference</a>

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketArn"></a>

```java
public java.lang.String getTableBucketArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tags"></a>

```java
public S3TablesTableBucketTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList">S3TablesTableBucketTagsList</a>

---

##### `unreferencedFileRemoval`<sup>Required</sup> <a name="unreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemoval"></a>

```java
public S3TablesTableBucketUnreferencedFileRemovalOutputReference getUnreferencedFileRemoval();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference">S3TablesTableBucketUnreferencedFileRemovalOutputReference</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput"></a>

```java
public IResolvable|S3TablesTableBucketEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---

##### `metricsConfigurationInput`<sup>Optional</sup> <a name="metricsConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfigurationInput"></a>

```java
public IResolvable|S3TablesTableBucketMetricsConfiguration getMetricsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfigurationInput"></a>

```java
public IResolvable|S3TablesTableBucketReplicationConfiguration getReplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---

##### `storageClassConfigurationInput`<sup>Optional</sup> <a name="storageClassConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfigurationInput"></a>

```java
public IResolvable|S3TablesTableBucketStorageClassConfiguration getStorageClassConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---

##### `tableBucketNameInput`<sup>Optional</sup> <a name="tableBucketNameInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketNameInput"></a>

```java
public java.lang.String getTableBucketNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>>

---

##### `unreferencedFileRemovalInput`<sup>Optional</sup> <a name="unreferencedFileRemovalInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemovalInput"></a>

```java
public IResolvable|S3TablesTableBucketUnreferencedFileRemoval getUnreferencedFileRemovalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketName"></a>

```java
public java.lang.String getTableBucketName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketConfig <a name="S3TablesTableBucketConfig" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketConfig;

S3TablesTableBucketConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .tableBucketName(java.lang.String)
//  .encryptionConfiguration(S3TablesTableBucketEncryptionConfiguration)
//  .metricsConfiguration(S3TablesTableBucketMetricsConfiguration)
//  .replicationConfiguration(S3TablesTableBucketReplicationConfiguration)
//  .storageClassConfiguration(S3TablesTableBucketStorageClassConfiguration)
//  .tags(IResolvable|java.util.List<S3TablesTableBucketTags>)
//  .unreferencedFileRemoval(S3TablesTableBucketUnreferencedFileRemoval)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tableBucketName">tableBucketName</a></code> | <code>java.lang.String</code> | A name for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Specifies encryption settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | Settings governing the Metric configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | Specifies replication configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | Specifies storage class settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>></code> | User tags (key-value pairs) to associate with the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.unreferencedFileRemoval">unreferencedFileRemoval</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | Settings governing the Unreferenced File Removal maintenance action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tableBucketName"></a>

```java
public java.lang.String getTableBucketName();
```

- *Type:* java.lang.String

A name for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#table_bucket_name S3TablesTableBucket#table_bucket_name}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration"></a>

```java
public S3TablesTableBucketEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Specifies encryption settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="metricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.metricsConfiguration"></a>

```java
public S3TablesTableBucketMetricsConfiguration getMetricsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

Settings governing the Metric configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#metrics_configuration S3TablesTableBucket#metrics_configuration}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.replicationConfiguration"></a>

```java
public S3TablesTableBucketReplicationConfiguration getReplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

Specifies replication configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#replication_configuration S3TablesTableBucket#replication_configuration}

---

##### `storageClassConfiguration`<sup>Optional</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.storageClassConfiguration"></a>

```java
public S3TablesTableBucketStorageClassConfiguration getStorageClassConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

Specifies storage class settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#storage_class_configuration S3TablesTableBucket#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tags"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>>

User tags (key-value pairs) to associate with the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#tags S3TablesTableBucket#tags}

---

##### `unreferencedFileRemoval`<sup>Optional</sup> <a name="unreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.unreferencedFileRemoval"></a>

```java
public S3TablesTableBucketUnreferencedFileRemoval getUnreferencedFileRemoval();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

Settings governing the Unreferenced File Removal maintenance action.

Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#unreferenced_file_removal S3TablesTableBucket#unreferenced_file_removal}

---

### S3TablesTableBucketEncryptionConfiguration <a name="S3TablesTableBucketEncryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketEncryptionConfiguration;

S3TablesTableBucketEncryptionConfiguration.builder()
//  .kmsKeyArn(java.lang.String)
//  .sseAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm">sseAlgorithm</a></code> | <code>java.lang.String</code> | Server-side encryption algorithm. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}

---

##### `sseAlgorithm`<sup>Optional</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm"></a>

```java
public java.lang.String getSseAlgorithm();
```

- *Type:* java.lang.String

Server-side encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}

---

### S3TablesTableBucketMetricsConfiguration <a name="S3TablesTableBucketMetricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketMetricsConfiguration;

S3TablesTableBucketMetricsConfiguration.builder()
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | Indicates whether Metrics are enabled. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Indicates whether Metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

### S3TablesTableBucketReplicationConfiguration <a name="S3TablesTableBucketReplicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfiguration;

S3TablesTableBucketReplicationConfiguration.builder()
//  .role(java.lang.String)
//  .rules(IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.role">role</a></code> | <code>java.lang.String</code> | The ARN of the IAM role to use for replication. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>></code> | List of replication rules. |

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The ARN of the IAM role to use for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#role S3TablesTableBucket#role}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.rules"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>>

List of replication rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#rules S3TablesTableBucket#rules}

---

### S3TablesTableBucketReplicationConfigurationRules <a name="S3TablesTableBucketReplicationConfigurationRules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfigurationRules;

S3TablesTableBucketReplicationConfigurationRules.builder()
//  .destinations(IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRulesDestinations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>></code> | List of replication destinations. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.property.destinations"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRulesDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>>

List of replication destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#destinations S3TablesTableBucket#destinations}

---

### S3TablesTableBucketReplicationConfigurationRulesDestinations <a name="S3TablesTableBucketReplicationConfigurationRulesDestinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfigurationRulesDestinations;

S3TablesTableBucketReplicationConfigurationRulesDestinations.builder()
//  .destinationTableBucketArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>java.lang.String</code> | The ARN of the destination table bucket. |

---

##### `destinationTableBucketArn`<sup>Optional</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.property.destinationTableBucketArn"></a>

```java
public java.lang.String getDestinationTableBucketArn();
```

- *Type:* java.lang.String

The ARN of the destination table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#destination_table_bucket_arn S3TablesTableBucket#destination_table_bucket_arn}

---

### S3TablesTableBucketStorageClassConfiguration <a name="S3TablesTableBucketStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketStorageClassConfiguration;

S3TablesTableBucketStorageClassConfiguration.builder()
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The storage class for the table bucket. |

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The storage class for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#storage_class S3TablesTableBucket#storage_class}

---

### S3TablesTableBucketTags <a name="S3TablesTableBucketTags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketTags;

S3TablesTableBucketTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.value">value</a></code> | <code>java.lang.String</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

### S3TablesTableBucketUnreferencedFileRemoval <a name="S3TablesTableBucketUnreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketUnreferencedFileRemoval;

S3TablesTableBucketUnreferencedFileRemoval.builder()
//  .noncurrentDays(java.lang.Number)
//  .status(java.lang.String)
//  .unreferencedDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.noncurrentDays">noncurrentDays</a></code> | <code>java.lang.Number</code> | S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.status">status</a></code> | <code>java.lang.String</code> | Indicates whether the Unreferenced File Removal maintenance action is enabled. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.unreferencedDays">unreferencedDays</a></code> | <code>java.lang.Number</code> | For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent. |

---

##### `noncurrentDays`<sup>Optional</sup> <a name="noncurrentDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.noncurrentDays"></a>

```java
public java.lang.Number getNoncurrentDays();
```

- *Type:* java.lang.Number

S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#noncurrent_days S3TablesTableBucket#noncurrent_days}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Indicates whether the Unreferenced File Removal maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

##### `unreferencedDays`<sup>Optional</sup> <a name="unreferencedDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.unreferencedDays"></a>

```java
public java.lang.Number getUnreferencedDays();
```

- *Type:* java.lang.Number

For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketEncryptionConfigurationOutputReference <a name="S3TablesTableBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketEncryptionConfigurationOutputReference;

new S3TablesTableBucketEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm">resetSseAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetSseAlgorithm` <a name="resetSseAlgorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm"></a>

```java
public void resetSseAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput"></a>

```java
public java.lang.String getSseAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```java
public java.lang.String getSseAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---


### S3TablesTableBucketMetricsConfigurationOutputReference <a name="S3TablesTableBucketMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketMetricsConfigurationOutputReference;

new S3TablesTableBucketMetricsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketMetricsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---


### S3TablesTableBucketReplicationConfigurationOutputReference <a name="S3TablesTableBucketReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfigurationOutputReference;

new S3TablesTableBucketReplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>>

---

##### `resetRole` <a name="resetRole" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList">S3TablesTableBucketReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rules"></a>

```java
public S3TablesTableBucketReplicationConfigurationRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList">S3TablesTableBucketReplicationConfigurationRulesList</a>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketReplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---


### S3TablesTableBucketReplicationConfigurationRulesDestinationsList <a name="S3TablesTableBucketReplicationConfigurationRulesDestinationsList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList;

new S3TablesTableBucketReplicationConfigurationRulesDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get"></a>

```java
public S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRulesDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>>

---


### S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference <a name="S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference;

new S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resetDestinationTableBucketArn">resetDestinationTableBucketArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationTableBucketArn` <a name="resetDestinationTableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resetDestinationTableBucketArn"></a>

```java
public void resetDestinationTableBucketArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArnInput">destinationTableBucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationTableBucketArnInput`<sup>Optional</sup> <a name="destinationTableBucketArnInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArnInput"></a>

```java
public java.lang.String getDestinationTableBucketArnInput();
```

- *Type:* java.lang.String

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn"></a>

```java
public java.lang.String getDestinationTableBucketArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketReplicationConfigurationRulesDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>

---


### S3TablesTableBucketReplicationConfigurationRulesList <a name="S3TablesTableBucketReplicationConfigurationRulesList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfigurationRulesList;

new S3TablesTableBucketReplicationConfigurationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get"></a>

```java
public S3TablesTableBucketReplicationConfigurationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>>

---


### S3TablesTableBucketReplicationConfigurationRulesOutputReference <a name="S3TablesTableBucketReplicationConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference;

new S3TablesTableBucketReplicationConfigurationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRulesDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList">S3TablesTableBucketReplicationConfigurationRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations"></a>

```java
public S3TablesTableBucketReplicationConfigurationRulesDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList">S3TablesTableBucketReplicationConfigurationRulesDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationConfigurationRulesDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketReplicationConfigurationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>

---


### S3TablesTableBucketStorageClassConfigurationOutputReference <a name="S3TablesTableBucketStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketStorageClassConfigurationOutputReference;

new S3TablesTableBucketStorageClassConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketStorageClassConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---


### S3TablesTableBucketTagsList <a name="S3TablesTableBucketTagsList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketTagsList;

new S3TablesTableBucketTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get"></a>

```java
public S3TablesTableBucketTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>>

---


### S3TablesTableBucketTagsOutputReference <a name="S3TablesTableBucketTagsOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketTagsOutputReference;

new S3TablesTableBucketTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>

---


### S3TablesTableBucketUnreferencedFileRemovalOutputReference <a name="S3TablesTableBucketUnreferencedFileRemovalOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_tables_table_bucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference;

new S3TablesTableBucketUnreferencedFileRemovalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetNoncurrentDays">resetNoncurrentDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetUnreferencedDays">resetUnreferencedDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoncurrentDays` <a name="resetNoncurrentDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetNoncurrentDays"></a>

```java
public void resetNoncurrentDays()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUnreferencedDays` <a name="resetUnreferencedDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetUnreferencedDays"></a>

```java
public void resetUnreferencedDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDaysInput">noncurrentDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDaysInput">unreferencedDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays">noncurrentDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays">unreferencedDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `noncurrentDaysInput`<sup>Optional</sup> <a name="noncurrentDaysInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDaysInput"></a>

```java
public java.lang.Number getNoncurrentDaysInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `unreferencedDaysInput`<sup>Optional</sup> <a name="unreferencedDaysInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDaysInput"></a>

```java
public java.lang.Number getUnreferencedDaysInput();
```

- *Type:* java.lang.Number

---

##### `noncurrentDays`<sup>Required</sup> <a name="noncurrentDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays"></a>

```java
public java.lang.Number getNoncurrentDays();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `unreferencedDays`<sup>Required</sup> <a name="unreferencedDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays"></a>

```java
public java.lang.Number getUnreferencedDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketUnreferencedFileRemoval getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---



