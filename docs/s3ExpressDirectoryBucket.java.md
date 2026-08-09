# `s3ExpressDirectoryBucket` Submodule <a name="`s3ExpressDirectoryBucket` Submodule" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ExpressDirectoryBucket <a name="S3ExpressDirectoryBucket" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucket;

S3ExpressDirectoryBucket.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataRedundancy(java.lang.String)
    .locationName(java.lang.String)
//  .bucketEncryption(S3ExpressDirectoryBucketBucketEncryption)
//  .bucketName(java.lang.String)
//  .inventoryConfigurations(IResolvable|java.util.List<S3ExpressDirectoryBucketInventoryConfigurations>)
//  .lifecycleConfiguration(S3ExpressDirectoryBucketLifecycleConfiguration)
//  .metricsConfigurations(IResolvable|java.util.List<S3ExpressDirectoryBucketMetricsConfigurations>)
//  .tags(IResolvable|java.util.List<S3ExpressDirectoryBucketTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dataRedundancy">dataRedundancy</a></code> | <code>java.lang.String</code> | Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.locationName">locationName</a></code> | <code>java.lang.String</code> | Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketEncryption">bucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Specifies a name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.inventoryConfigurations">inventoryConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>></code> | The inventory configuration for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.metricsConfigurations">metricsConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>></code> | Specifies the metrics configurations for the Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataRedundancy`<sup>Required</sup> <a name="dataRedundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dataRedundancy"></a>

- *Type:* java.lang.String

Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#data_redundancy S3ExpressDirectoryBucket#data_redundancy}

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.locationName"></a>

- *Type:* java.lang.String

Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created.

An example Availability Zone ID value is 'use1-az5'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#location_name S3ExpressDirectoryBucket#location_name}

---

##### `bucketEncryption`<sup>Optional</sup> <a name="bucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketEncryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_encryption S3ExpressDirectoryBucket#bucket_encryption}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Specifies a name for the bucket.

The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_name S3ExpressDirectoryBucket#bucket_name}

---

##### `inventoryConfigurations`<sup>Optional</sup> <a name="inventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.inventoryConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>>

The inventory configuration for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#inventory_configurations S3ExpressDirectoryBucket#inventory_configurations}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#lifecycle_configuration S3ExpressDirectoryBucket#lifecycle_configuration}

---

##### `metricsConfigurations`<sup>Optional</sup> <a name="metricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.metricsConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>>

Specifies the metrics configurations for the Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#metrics_configurations S3ExpressDirectoryBucket#metrics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption">putBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations">putInventoryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations">putMetricsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption">resetBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations">resetInventoryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations">resetMetricsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBucketEncryption` <a name="putBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption"></a>

```java
public void putBucketEncryption(S3ExpressDirectoryBucketBucketEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---

##### `putInventoryConfigurations` <a name="putInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations"></a>

```java
public void putInventoryConfigurations(IResolvable|java.util.List<S3ExpressDirectoryBucketInventoryConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>>

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration"></a>

```java
public void putLifecycleConfiguration(S3ExpressDirectoryBucketLifecycleConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---

##### `putMetricsConfigurations` <a name="putMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations"></a>

```java
public void putMetricsConfigurations(IResolvable|java.util.List<S3ExpressDirectoryBucketMetricsConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3ExpressDirectoryBucketTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>>

---

##### `resetBucketEncryption` <a name="resetBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption"></a>

```java
public void resetBucketEncryption()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetInventoryConfigurations` <a name="resetInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations"></a>

```java
public void resetInventoryConfigurations()
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration"></a>

```java
public void resetLifecycleConfiguration()
```

##### `resetMetricsConfigurations` <a name="resetMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations"></a>

```java
public void resetMetricsConfigurations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucket;

S3ExpressDirectoryBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucket;

S3ExpressDirectoryBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucket;

S3ExpressDirectoryBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucket;

S3ExpressDirectoryBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3ExpressDirectoryBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3ExpressDirectoryBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3ExpressDirectoryBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3ExpressDirectoryBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption">bucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations">inventoryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations">metricsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput">bucketEncryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput">dataRedundancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput">inventoryConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput">locationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput">metricsConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy">dataRedundancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName">locationName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

---

##### `bucketEncryption`<sup>Required</sup> <a name="bucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption"></a>

```java
public S3ExpressDirectoryBucketBucketEncryptionOutputReference getBucketEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inventoryConfigurations`<sup>Required</sup> <a name="inventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations"></a>

```java
public S3ExpressDirectoryBucketInventoryConfigurationsList getInventoryConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration"></a>

```java
public S3ExpressDirectoryBucketLifecycleConfigurationOutputReference getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a>

---

##### `metricsConfigurations`<sup>Required</sup> <a name="metricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations"></a>

```java
public S3ExpressDirectoryBucketMetricsConfigurationsList getMetricsConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags"></a>

```java
public S3ExpressDirectoryBucketTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a>

---

##### `bucketEncryptionInput`<sup>Optional</sup> <a name="bucketEncryptionInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput"></a>

```java
public IResolvable|S3ExpressDirectoryBucketBucketEncryption getBucketEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `dataRedundancyInput`<sup>Optional</sup> <a name="dataRedundancyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput"></a>

```java
public java.lang.String getDataRedundancyInput();
```

- *Type:* java.lang.String

---

##### `inventoryConfigurationsInput`<sup>Optional</sup> <a name="inventoryConfigurationsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketInventoryConfigurations> getInventoryConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>>

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput"></a>

```java
public IResolvable|S3ExpressDirectoryBucketLifecycleConfiguration getLifecycleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput"></a>

```java
public java.lang.String getLocationNameInput();
```

- *Type:* java.lang.String

---

##### `metricsConfigurationsInput`<sup>Optional</sup> <a name="metricsConfigurationsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketMetricsConfigurations> getMetricsConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `dataRedundancy`<sup>Required</sup> <a name="dataRedundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy"></a>

```java
public java.lang.String getDataRedundancy();
```

- *Type:* java.lang.String

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName"></a>

```java
public java.lang.String getLocationName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ExpressDirectoryBucketBucketEncryption <a name="S3ExpressDirectoryBucketBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketBucketEncryption;

S3ExpressDirectoryBucketBucketEncryption.builder()
//  .serverSideEncryptionConfiguration(IResolvable|java.util.List<S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>></code> | Specifies the default server-side-encryption configuration. |

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration> getServerSideEncryptionConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>>

Specifies the default server-side-encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#server_side_encryption_configuration S3ExpressDirectoryBucket#server_side_encryption_configuration}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration;

S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.builder()
//  .bucketKeyEnabled(java.lang.Boolean|IResolvable)
//  .serverSideEncryptionByDefault(S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault">serverSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | Specifies the default server-side encryption to apply to new objects in the bucket. |

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getBucketKeyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.

Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_key_enabled S3ExpressDirectoryBucket#bucket_key_enabled}

---

##### `serverSideEncryptionByDefault`<sup>Optional</sup> <a name="serverSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault"></a>

```java
public S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault getServerSideEncryptionByDefault();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

Specifies the default server-side encryption to apply to new objects in the bucket.

If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#server_side_encryption_by_default S3ExpressDirectoryBucket#server_side_encryption_by_default}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault;

S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.builder()
//  .kmsMasterKeyId(java.lang.String)
//  .sseAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm">sseAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}. |

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.

This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#kms_master_key_id S3ExpressDirectoryBucket#kms_master_key_id}

---

##### `sseAlgorithm`<sup>Optional</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm"></a>

```java
public java.lang.String getSseAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}.

---

### S3ExpressDirectoryBucketConfig <a name="S3ExpressDirectoryBucketConfig" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketConfig;

S3ExpressDirectoryBucketConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataRedundancy(java.lang.String)
    .locationName(java.lang.String)
//  .bucketEncryption(S3ExpressDirectoryBucketBucketEncryption)
//  .bucketName(java.lang.String)
//  .inventoryConfigurations(IResolvable|java.util.List<S3ExpressDirectoryBucketInventoryConfigurations>)
//  .lifecycleConfiguration(S3ExpressDirectoryBucketLifecycleConfiguration)
//  .metricsConfigurations(IResolvable|java.util.List<S3ExpressDirectoryBucketMetricsConfigurations>)
//  .tags(IResolvable|java.util.List<S3ExpressDirectoryBucketTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy">dataRedundancy</a></code> | <code>java.lang.String</code> | Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName">locationName</a></code> | <code>java.lang.String</code> | Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption">bucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Specifies a name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations">inventoryConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>></code> | The inventory configuration for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations">metricsConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>></code> | Specifies the metrics configurations for the Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataRedundancy`<sup>Required</sup> <a name="dataRedundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy"></a>

```java
public java.lang.String getDataRedundancy();
```

- *Type:* java.lang.String

Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#data_redundancy S3ExpressDirectoryBucket#data_redundancy}

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName"></a>

```java
public java.lang.String getLocationName();
```

- *Type:* java.lang.String

Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created.

An example Availability Zone ID value is 'use1-az5'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#location_name S3ExpressDirectoryBucket#location_name}

---

##### `bucketEncryption`<sup>Optional</sup> <a name="bucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption"></a>

```java
public S3ExpressDirectoryBucketBucketEncryption getBucketEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_encryption S3ExpressDirectoryBucket#bucket_encryption}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Specifies a name for the bucket.

The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_name S3ExpressDirectoryBucket#bucket_name}

---

##### `inventoryConfigurations`<sup>Optional</sup> <a name="inventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketInventoryConfigurations> getInventoryConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>>

The inventory configuration for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#inventory_configurations S3ExpressDirectoryBucket#inventory_configurations}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration"></a>

```java
public S3ExpressDirectoryBucketLifecycleConfiguration getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#lifecycle_configuration S3ExpressDirectoryBucket#lifecycle_configuration}

---

##### `metricsConfigurations`<sup>Optional</sup> <a name="metricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketMetricsConfigurations> getMetricsConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>>

Specifies the metrics configurations for the Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#metrics_configurations S3ExpressDirectoryBucket#metrics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}.

---

### S3ExpressDirectoryBucketInventoryConfigurations <a name="S3ExpressDirectoryBucketInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketInventoryConfigurations;

S3ExpressDirectoryBucketInventoryConfigurations.builder()
//  .destination(S3ExpressDirectoryBucketInventoryConfigurationsDestination)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .includedObjectVersions(java.lang.String)
//  .optionalFields(java.util.List<java.lang.String>)
//  .prefix(java.lang.String)
//  .scheduleFrequency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | Specifies information about where to publish inventory reports for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the inventory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | The ID used to identify the inventory configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions">includedObjectVersions</a></code> | <code>java.lang.String</code> | Object versions to include in the inventory list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields">optionalFields</a></code> | <code>java.util.List<java.lang.String></code> | Contains the optional fields that are included in the inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The prefix that is prepended to all inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency">scheduleFrequency</a></code> | <code>java.lang.String</code> | Specifies the schedule for generating inventory results. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination"></a>

```java
public S3ExpressDirectoryBucketInventoryConfigurationsDestination getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

Specifies information about where to publish inventory reports for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#destination S3ExpressDirectoryBucket#destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the inventory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#enabled S3ExpressDirectoryBucket#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID used to identify the inventory configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includedObjectVersions`<sup>Optional</sup> <a name="includedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions"></a>

```java
public java.lang.String getIncludedObjectVersions();
```

- *Type:* java.lang.String

Object versions to include in the inventory list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#included_object_versions S3ExpressDirectoryBucket#included_object_versions}

---

##### `optionalFields`<sup>Optional</sup> <a name="optionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields"></a>

```java
public java.util.List<java.lang.String> getOptionalFields();
```

- *Type:* java.util.List<java.lang.String>

Contains the optional fields that are included in the inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#optional_fields S3ExpressDirectoryBucket#optional_fields}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The prefix that is prepended to all inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="scheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency"></a>

```java
public java.lang.String getScheduleFrequency();
```

- *Type:* java.lang.String

Specifies the schedule for generating inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#schedule_frequency S3ExpressDirectoryBucket#schedule_frequency}

---

### S3ExpressDirectoryBucketInventoryConfigurationsDestination <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination;

S3ExpressDirectoryBucketInventoryConfigurationsDestination.builder()
//  .bucketAccountId(java.lang.String)
//  .bucketArn(java.lang.String)
//  .format(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId">bucketAccountId</a></code> | <code>java.lang.String</code> | The account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format">format</a></code> | <code>java.lang.String</code> | Specifies the file format used when exporting data to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The prefix to use when exporting data. The prefix is prepended to all results. |

---

##### `bucketAccountId`<sup>Optional</sup> <a name="bucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId"></a>

```java
public java.lang.String getBucketAccountId();
```

- *Type:* java.lang.String

The account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_account_id S3ExpressDirectoryBucket#bucket_account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_arn S3ExpressDirectoryBucket#bucket_arn}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Specifies the file format used when exporting data to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#format S3ExpressDirectoryBucket#format}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The prefix to use when exporting data. The prefix is prepended to all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketLifecycleConfiguration <a name="S3ExpressDirectoryBucketLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketLifecycleConfiguration;

S3ExpressDirectoryBucketLifecycleConfiguration.builder()
//  .rules(IResolvable|java.util.List<S3ExpressDirectoryBucketLifecycleConfigurationRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>></code> | A lifecycle rule for individual objects in an Amazon S3 Express bucket. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketLifecycleConfigurationRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>>

A lifecycle rule for individual objects in an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#rules S3ExpressDirectoryBucket#rules}

---

### S3ExpressDirectoryBucketLifecycleConfigurationRules <a name="S3ExpressDirectoryBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketLifecycleConfigurationRules;

S3ExpressDirectoryBucketLifecycleConfigurationRules.builder()
//  .abortIncompleteMultipartUpload(S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload)
//  .expirationInDays(java.lang.Number)
//  .id(java.lang.String)
//  .objectSizeGreaterThan(java.lang.String)
//  .objectSizeLessThan(java.lang.String)
//  .prefix(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan">objectSizeGreaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan">objectSizeLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}. |

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload"></a>

```java
public S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload getAbortIncompleteMultipartUpload();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#abort_incomplete_multipart_upload S3ExpressDirectoryBucket#abort_incomplete_multipart_upload}

---

##### `expirationInDays`<sup>Optional</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectSizeGreaterThan`<sup>Optional</sup> <a name="objectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan"></a>

```java
public java.lang.String getObjectSizeGreaterThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}.

---

##### `objectSizeLessThan`<sup>Optional</sup> <a name="objectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan"></a>

```java
public java.lang.String getObjectSizeLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}.

---

### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;

S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.builder()
//  .daysAfterInitiation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>java.lang.Number</code> | Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload. |

---

##### `daysAfterInitiation`<sup>Optional</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```java
public java.lang.Number getDaysAfterInitiation();
```

- *Type:* java.lang.Number

Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#days_after_initiation S3ExpressDirectoryBucket#days_after_initiation}

---

### S3ExpressDirectoryBucketMetricsConfigurations <a name="S3ExpressDirectoryBucketMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketMetricsConfigurations;

S3ExpressDirectoryBucketMetricsConfigurations.builder()
//  .accessPointArn(java.lang.String)
//  .id(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | The access point ARN used when evaluating a metrics filter. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | The ID used to identify the metrics configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The prefix used when evaluating a metrics filter. |

---

##### `accessPointArn`<sup>Optional</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

The access point ARN used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#access_point_arn S3ExpressDirectoryBucket#access_point_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID used to identify the metrics configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The prefix used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketTags <a name="S3ExpressDirectoryBucketTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketTags;

S3ExpressDirectoryBucketTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ExpressDirectoryBucketBucketEncryptionOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference;

new S3ExpressDirectoryBucketBucketEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration"></a>

```java
public void putServerSideEncryptionConfiguration(IResolvable|java.util.List<S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>>

---

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration"></a>

```java
public void resetServerSideEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration"></a>

```java
public S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a>

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration> getServerSideEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketBucketEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList;

new S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get"></a>

```java
public S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>>

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference;

new S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault">putServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled">resetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault">resetServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerSideEncryptionByDefault` <a name="putServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault"></a>

```java
public void putServerSideEncryptionByDefault(S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---

##### `resetBucketKeyEnabled` <a name="resetBucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled"></a>

```java
public void resetBucketKeyEnabled()
```

##### `resetServerSideEncryptionByDefault` <a name="resetServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault"></a>

```java
public void resetServerSideEncryptionByDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault">serverSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput">bucketKeyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput">serverSideEncryptionByDefaultInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionByDefault`<sup>Required</sup> <a name="serverSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault"></a>

```java
public S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference getServerSideEncryptionByDefault();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a>

---

##### `bucketKeyEnabledInput`<sup>Optional</sup> <a name="bucketKeyEnabledInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getBucketKeyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serverSideEncryptionByDefaultInput`<sup>Optional</sup> <a name="serverSideEncryptionByDefaultInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput"></a>

```java
public IResolvable|S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault getServerSideEncryptionByDefaultInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getBucketKeyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference;

new S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm">resetSseAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId"></a>

```java
public void resetKmsMasterKeyId()
```

##### `resetSseAlgorithm` <a name="resetSseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm"></a>

```java
public void resetSseAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput"></a>

```java
public java.lang.String getKmsMasterKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput"></a>

```java
public java.lang.String getSseAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```java
public java.lang.String getSseAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---


### S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference;

new S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId">resetBucketAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketAccountId` <a name="resetBucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId"></a>

```java
public void resetBucketAccountId()
```

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput">bucketAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId">bucketAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketAccountIdInput`<sup>Optional</sup> <a name="bucketAccountIdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput"></a>

```java
public java.lang.String getBucketAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId"></a>

```java
public java.lang.String getBucketAccountId();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketInventoryConfigurationsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---


### S3ExpressDirectoryBucketInventoryConfigurationsList <a name="S3ExpressDirectoryBucketInventoryConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketInventoryConfigurationsList;

new S3ExpressDirectoryBucketInventoryConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get"></a>

```java
public S3ExpressDirectoryBucketInventoryConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketInventoryConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>>

---


### S3ExpressDirectoryBucketInventoryConfigurationsOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference;

new S3ExpressDirectoryBucketInventoryConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions">resetIncludedObjectVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields">resetOptionalFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency">resetScheduleFrequency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination"></a>

```java
public void putDestination(S3ExpressDirectoryBucketInventoryConfigurationsDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIncludedObjectVersions` <a name="resetIncludedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions"></a>

```java
public void resetIncludedObjectVersions()
```

##### `resetOptionalFields` <a name="resetOptionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields"></a>

```java
public void resetOptionalFields()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetScheduleFrequency` <a name="resetScheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency"></a>

```java
public void resetScheduleFrequency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput">includedObjectVersionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput">optionalFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput">scheduleFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions">includedObjectVersions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields">optionalFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency">scheduleFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination"></a>

```java
public S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput"></a>

```java
public IResolvable|S3ExpressDirectoryBucketInventoryConfigurationsDestination getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includedObjectVersionsInput`<sup>Optional</sup> <a name="includedObjectVersionsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput"></a>

```java
public java.lang.String getIncludedObjectVersionsInput();
```

- *Type:* java.lang.String

---

##### `optionalFieldsInput`<sup>Optional</sup> <a name="optionalFieldsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput"></a>

```java
public java.util.List<java.lang.String> getOptionalFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `scheduleFrequencyInput`<sup>Optional</sup> <a name="scheduleFrequencyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput"></a>

```java
public java.lang.String getScheduleFrequencyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions"></a>

```java
public java.lang.String getIncludedObjectVersions();
```

- *Type:* java.lang.String

---

##### `optionalFields`<sup>Required</sup> <a name="optionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields"></a>

```java
public java.util.List<java.lang.String> getOptionalFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `scheduleFrequency`<sup>Required</sup> <a name="scheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency"></a>

```java
public java.lang.String getScheduleFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketInventoryConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference;

new S3ExpressDirectoryBucketLifecycleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<S3ExpressDirectoryBucketLifecycleConfigurationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>>

---

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules"></a>

```java
public S3ExpressDirectoryBucketLifecycleConfigurationRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketLifecycleConfigurationRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketLifecycleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference;

new S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">resetDaysAfterInitiation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysAfterInitiation` <a name="resetDaysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```java
public void resetDaysAfterInitiation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">daysAfterInitiationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysAfterInitiationInput`<sup>Optional</sup> <a name="daysAfterInitiationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```java
public java.lang.Number getDaysAfterInitiationInput();
```

- *Type:* java.lang.Number

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```java
public java.lang.Number getDaysAfterInitiation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesList <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList;

new S3ExpressDirectoryBucketLifecycleConfigurationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get"></a>

```java
public S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketLifecycleConfigurationRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>>

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference;

new S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload">putAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload">resetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays">resetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan">resetObjectSizeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan">resetObjectSizeLessThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortIncompleteMultipartUpload` <a name="putAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload"></a>

```java
public void putAbortIncompleteMultipartUpload(S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `resetAbortIncompleteMultipartUpload` <a name="resetAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload"></a>

```java
public void resetAbortIncompleteMultipartUpload()
```

##### `resetExpirationInDays` <a name="resetExpirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays"></a>

```java
public void resetExpirationInDays()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetObjectSizeGreaterThan` <a name="resetObjectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan"></a>

```java
public void resetObjectSizeGreaterThan()
```

##### `resetObjectSizeLessThan` <a name="resetObjectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan"></a>

```java
public void resetObjectSizeLessThan()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput">abortIncompleteMultipartUploadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput">expirationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput">objectSizeGreaterThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput">objectSizeLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan">objectSizeGreaterThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan">objectSizeLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abortIncompleteMultipartUpload`<sup>Required</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```java
public S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference getAbortIncompleteMultipartUpload();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `abortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```java
public IResolvable|S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload getAbortIncompleteMultipartUploadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `expirationInDaysInput`<sup>Optional</sup> <a name="expirationInDaysInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput"></a>

```java
public java.lang.Number getExpirationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectSizeGreaterThanInput`<sup>Optional</sup> <a name="objectSizeGreaterThanInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput"></a>

```java
public java.lang.String getObjectSizeGreaterThanInput();
```

- *Type:* java.lang.String

---

##### `objectSizeLessThanInput`<sup>Optional</sup> <a name="objectSizeLessThanInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput"></a>

```java
public java.lang.String getObjectSizeLessThanInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectSizeGreaterThan`<sup>Required</sup> <a name="objectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan"></a>

```java
public java.lang.String getObjectSizeGreaterThan();
```

- *Type:* java.lang.String

---

##### `objectSizeLessThan`<sup>Required</sup> <a name="objectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan"></a>

```java
public java.lang.String getObjectSizeLessThan();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketLifecycleConfigurationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>

---


### S3ExpressDirectoryBucketMetricsConfigurationsList <a name="S3ExpressDirectoryBucketMetricsConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketMetricsConfigurationsList;

new S3ExpressDirectoryBucketMetricsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get"></a>

```java
public S3ExpressDirectoryBucketMetricsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketMetricsConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>>

---


### S3ExpressDirectoryBucketMetricsConfigurationsOutputReference <a name="S3ExpressDirectoryBucketMetricsConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference;

new S3ExpressDirectoryBucketMetricsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn">resetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessPointArn` <a name="resetAccessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn"></a>

```java
public void resetAccessPointArn()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput">accessPointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPointArnInput`<sup>Optional</sup> <a name="accessPointArnInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput"></a>

```java
public java.lang.String getAccessPointArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketMetricsConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>

---


### S3ExpressDirectoryBucketTagsList <a name="S3ExpressDirectoryBucketTagsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketTagsList;

new S3ExpressDirectoryBucketTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get"></a>

```java
public S3ExpressDirectoryBucketTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3ExpressDirectoryBucketTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>>

---


### S3ExpressDirectoryBucketTagsOutputReference <a name="S3ExpressDirectoryBucketTagsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_express_directory_bucket.S3ExpressDirectoryBucketTagsOutputReference;

new S3ExpressDirectoryBucketTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3ExpressDirectoryBucketTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>

---



