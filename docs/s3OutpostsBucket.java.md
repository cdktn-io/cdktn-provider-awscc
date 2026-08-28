# `s3OutpostsBucket` Submodule <a name="`s3OutpostsBucket` Submodule" id="@cdktn/provider-awscc.s3OutpostsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3OutpostsBucket <a name="S3OutpostsBucket" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket awscc_s3outposts_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucket;

S3OutpostsBucket.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .outpostId(java.lang.String)
//  .lifecycleConfiguration(S3OutpostsBucketLifecycleConfiguration)
//  .tags(IResolvable|java.util.List<S3OutpostsBucketTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | A name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.outpostId">outpostId</a></code> | <code>java.lang.String</code> | The id of the customer outpost on which the bucket resides. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | Rules that define how Amazon S3Outposts manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>></code> | An arbitrary set of tags (key-value pairs) for this S3Outposts bucket. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

A name for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#bucket_name S3OutpostsBucket#bucket_name}

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.outpostId"></a>

- *Type:* java.lang.String

The id of the customer outpost on which the bucket resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#outpost_id S3OutpostsBucket#outpost_id}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

Rules that define how Amazon S3Outposts manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#lifecycle_configuration S3OutpostsBucket#lifecycle_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>>

An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration"></a>

```java
public void putLifecycleConfiguration(S3OutpostsBucketLifecycleConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3OutpostsBucketTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>>

---

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetLifecycleConfiguration"></a>

```java
public void resetLifecycleConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3OutpostsBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucket;

S3OutpostsBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucket;

S3OutpostsBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucket;

S3OutpostsBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucket;

S3OutpostsBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3OutpostsBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3OutpostsBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3OutpostsBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3OutpostsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3OutpostsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference">S3OutpostsBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList">S3OutpostsBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostIdInput">outpostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostId">outpostId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfiguration"></a>

```java
public S3OutpostsBucketLifecycleConfigurationOutputReference getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference">S3OutpostsBucketLifecycleConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tags"></a>

```java
public S3OutpostsBucketTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList">S3OutpostsBucketTagsList</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfigurationInput"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfiguration getLifecycleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---

##### `outpostIdInput`<sup>Optional</sup> <a name="outpostIdInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostIdInput"></a>

```java
public java.lang.String getOutpostIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostId"></a>

```java
public java.lang.String getOutpostId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3OutpostsBucketConfig <a name="S3OutpostsBucketConfig" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketConfig;

S3OutpostsBucketConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .outpostId(java.lang.String)
//  .lifecycleConfiguration(S3OutpostsBucketLifecycleConfiguration)
//  .tags(IResolvable|java.util.List<S3OutpostsBucketTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | A name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.outpostId">outpostId</a></code> | <code>java.lang.String</code> | The id of the customer outpost on which the bucket resides. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | Rules that define how Amazon S3Outposts manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>></code> | An arbitrary set of tags (key-value pairs) for this S3Outposts bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

A name for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#bucket_name S3OutpostsBucket#bucket_name}

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.outpostId"></a>

```java
public java.lang.String getOutpostId();
```

- *Type:* java.lang.String

The id of the customer outpost on which the bucket resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#outpost_id S3OutpostsBucket#outpost_id}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycleConfiguration"></a>

```java
public S3OutpostsBucketLifecycleConfiguration getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

Rules that define how Amazon S3Outposts manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#lifecycle_configuration S3OutpostsBucket#lifecycle_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.tags"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>>

An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

### S3OutpostsBucketLifecycleConfiguration <a name="S3OutpostsBucketLifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfiguration;

S3OutpostsBucketLifecycleConfiguration.builder()
//  .rules(IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>></code> | A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.property.rules"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>>

A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#rules S3OutpostsBucket#rules}

---

### S3OutpostsBucketLifecycleConfigurationRules <a name="S3OutpostsBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRules;

S3OutpostsBucketLifecycleConfigurationRules.builder()
//  .abortIncompleteMultipartUpload(S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload)
//  .expirationDate(java.lang.String)
//  .expirationInDays(java.lang.Number)
//  .filter(S3OutpostsBucketLifecycleConfigurationRulesFilter)
//  .id(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | Indicates when objects are deleted from Amazon S3Outposts. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | Indicates the number of days after creation when objects are deleted from Amazon S3Outposts. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | The container for the filter of the lifecycle rule. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the lifecycle rule. The value can't be longer than 255 characters. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#status S3OutpostsBucket#status}. |

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload getAbortIncompleteMultipartUpload();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#abort_incomplete_multipart_upload S3OutpostsBucket#abort_incomplete_multipart_upload}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

Indicates when objects are deleted from Amazon S3Outposts.

The date value must be in ISO 8601 format. The time is always midnight UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#expiration_date S3OutpostsBucket#expiration_date}

---

##### `expirationInDays`<sup>Optional</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#expiration_in_days S3OutpostsBucket#expiration_in_days}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.filter"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

The container for the filter of the lifecycle rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#filter S3OutpostsBucket#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#id S3OutpostsBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#status S3OutpostsBucket#status}.

---

### S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;

S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.builder()
//  .daysAfterInitiation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>java.lang.Number</code> | Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload. |

---

##### `daysAfterInitiation`<sup>Optional</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```java
public java.lang.Number getDaysAfterInitiation();
```

- *Type:* java.lang.Number

Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#days_after_initiation S3OutpostsBucket#days_after_initiation}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilter <a name="S3OutpostsBucketLifecycleConfigurationRulesFilter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilter;

S3OutpostsBucketLifecycleConfigurationRulesFilter.builder()
//  .andOperator(S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator)
//  .prefix(java.lang.String)
//  .tag(S3OutpostsBucketLifecycleConfigurationRulesFilterTag)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.andOperator">andOperator</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | The container for the AND condition for the lifecycle rule. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Object key prefix that identifies one or more objects to which this rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket. |

---

##### `andOperator`<sup>Optional</sup> <a name="andOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.andOperator"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator getAndOperator();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

The container for the AND condition for the lifecycle rule.

A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#and_operator S3OutpostsBucket#and_operator}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Object key prefix that identifies one or more objects to which this rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.tag"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilterTag getTag();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tag S3OutpostsBucket#tag}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator;

S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.builder()
//  .prefix(java.lang.String)
//  .tags(IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Prefix identifies one or more objects to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>></code> | All of these tags must exist in the object's tag set in order for the rule to apply. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Prefix identifies one or more objects to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.tags"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>>

All of these tags must exist in the object's tag set in order for the rule to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags;

S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterTag <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterTag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag;

S3OutpostsBucketLifecycleConfigurationRulesFilterTag.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

### S3OutpostsBucketTags <a name="S3OutpostsBucketTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketTags;

S3OutpostsBucketTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3OutpostsBucketLifecycleConfigurationOutputReference <a name="S3OutpostsBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationOutputReference;

new S3OutpostsBucketLifecycleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>>

---

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList">S3OutpostsBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rules"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList">S3OutpostsBucketLifecycleConfigurationRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference;

new S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">resetDaysAfterInitiation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysAfterInitiation` <a name="resetDaysAfterInitiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```java
public void resetDaysAfterInitiation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">daysAfterInitiationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysAfterInitiationInput`<sup>Optional</sup> <a name="daysAfterInitiationInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```java
public java.lang.Number getDaysAfterInitiationInput();
```

- *Type:* java.lang.Number

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```java
public java.lang.Number getDaysAfterInitiation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference;

new S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>>

---

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList;

new S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference;

new S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference;

new S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator">putAndOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetAndOperator">resetAndOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndOperator` <a name="putAndOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator"></a>

```java
public void putAndOperator(S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---

##### `putTag` <a name="putTag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag"></a>

```java
public void putTag(S3OutpostsBucketLifecycleConfigurationRulesFilterTag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---

##### `resetAndOperator` <a name="resetAndOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetAndOperator"></a>

```java
public void resetAndOperator()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator">andOperator</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperatorInput">andOperatorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tagInput">tagInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `andOperator`<sup>Required</sup> <a name="andOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference getAndOperator();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference getTag();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a>

---

##### `andOperatorInput`<sup>Optional</sup> <a name="andOperatorInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperatorInput"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator getAndOperatorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tagInput"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesFilterTag getTagInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference;

new S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesFilterTag getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesList <a name="S3OutpostsBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesList;

new S3OutpostsBucketLifecycleConfigurationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketLifecycleConfigurationRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>>

---


### S3OutpostsBucketLifecycleConfigurationRulesOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference;

new S3OutpostsBucketLifecycleConfigurationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload">putAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload">resetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays">resetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortIncompleteMultipartUpload` <a name="putAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload"></a>

```java
public void putAbortIncompleteMultipartUpload(S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter"></a>

```java
public void putFilter(S3OutpostsBucketLifecycleConfigurationRulesFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---

##### `resetAbortIncompleteMultipartUpload` <a name="resetAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload"></a>

```java
public void resetAbortIncompleteMultipartUpload()
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationDate"></a>

```java
public void resetExpirationDate()
```

##### `resetExpirationInDays` <a name="resetExpirationInDays" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays"></a>

```java
public void resetExpirationInDays()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput">abortIncompleteMultipartUploadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDateInput">expirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput">expirationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abortIncompleteMultipartUpload`<sup>Required</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference getAbortIncompleteMultipartUpload();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter"></a>

```java
public S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a>

---

##### `abortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload getAbortIncompleteMultipartUploadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDateInput"></a>

```java
public java.lang.String getExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `expirationInDaysInput`<sup>Optional</sup> <a name="expirationInDaysInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput"></a>

```java
public java.lang.Number getExpirationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filterInput"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRulesFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketLifecycleConfigurationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>

---


### S3OutpostsBucketTagsList <a name="S3OutpostsBucketTagsList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketTagsList;

new S3OutpostsBucketTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get"></a>

```java
public S3OutpostsBucketTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3OutpostsBucketTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>>

---


### S3OutpostsBucketTagsOutputReference <a name="S3OutpostsBucketTagsOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_outposts_bucket.S3OutpostsBucketTagsOutputReference;

new S3OutpostsBucketTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3OutpostsBucketTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>

---



