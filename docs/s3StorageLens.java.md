# `s3StorageLens` Submodule <a name="`s3StorageLens` Submodule" id="@cdktn/provider-awscc.s3StorageLens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3StorageLens <a name="S3StorageLens" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens awscc_s3_storage_lens}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLens;

S3StorageLens.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .storageLensConfiguration(S3StorageLensStorageLensConfiguration)
//  .tags(IResolvable|java.util.List<S3StorageLensTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.storageLensConfiguration">storageLensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | Specifies the details of Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>></code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `storageLensConfiguration`<sup>Required</sup> <a name="storageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.storageLensConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

Specifies the details of Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_configuration S3StorageLens#storage_lens_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>>

A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#tags S3StorageLens#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration">putStorageLensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageLensConfiguration` <a name="putStorageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration"></a>

```java
public void putStorageLensConfiguration(S3StorageLensStorageLensConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3StorageLensTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3StorageLens resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLens;

S3StorageLens.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLens;

S3StorageLens.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLens;

S3StorageLens.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLens;

S3StorageLens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3StorageLens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3StorageLens resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3StorageLens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3StorageLens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3StorageLens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfiguration">storageLensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference">S3StorageLensStorageLensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList">S3StorageLensTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfigurationInput">storageLensConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storageLensConfiguration`<sup>Required</sup> <a name="storageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfiguration"></a>

```java
public S3StorageLensStorageLensConfigurationOutputReference getStorageLensConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference">S3StorageLensStorageLensConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tags"></a>

```java
public S3StorageLensTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList">S3StorageLensTagsList</a>

---

##### `storageLensConfigurationInput`<sup>Optional</sup> <a name="storageLensConfigurationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfigurationInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfiguration getStorageLensConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3StorageLensTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3StorageLensConfig <a name="S3StorageLensConfig" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensConfig;

S3StorageLensConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .storageLensConfiguration(S3StorageLensStorageLensConfiguration)
//  .tags(IResolvable|java.util.List<S3StorageLensTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.storageLensConfiguration">storageLensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | Specifies the details of Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>></code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `storageLensConfiguration`<sup>Required</sup> <a name="storageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.storageLensConfiguration"></a>

```java
public S3StorageLensStorageLensConfiguration getStorageLensConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

Specifies the details of Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_configuration S3StorageLens#storage_lens_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.tags"></a>

```java
public IResolvable|java.util.List<S3StorageLensTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>>

A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#tags S3StorageLens#tags}

---

### S3StorageLensStorageLensConfiguration <a name="S3StorageLensStorageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfiguration;

S3StorageLensStorageLensConfiguration.builder()
    .accountLevel(S3StorageLensStorageLensConfigurationAccountLevel)
    .id(java.lang.String)
    .isEnabled(java.lang.Boolean|IResolvable)
//  .awsOrg(S3StorageLensStorageLensConfigurationAwsOrg)
//  .dataExport(S3StorageLensStorageLensConfigurationDataExport)
//  .exclude(S3StorageLensStorageLensConfigurationExclude)
//  .expandedPrefixesDataExport(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport)
//  .include(S3StorageLensStorageLensConfigurationInclude)
//  .prefixDelimiter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.accountLevel">accountLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | Account-level metrics configurations. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | The ID that identifies the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.awsOrg">awsOrg</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.dataExport">dataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | Specifies how Amazon S3 Storage Lens metrics should be exported. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.expandedPrefixesDataExport">expandedPrefixesDataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | Expanded Prefixes Data Export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.include">include</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.prefixDelimiter">prefixDelimiter</a></code> | <code>java.lang.String</code> | The delimiter to divide S3 key into hierarchy of prefixes. |

---

##### `accountLevel`<sup>Required</sup> <a name="accountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.accountLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevel getAccountLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

Account-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#account_level S3StorageLens#account_level}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID that identifies the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#id S3StorageLens#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `awsOrg`<sup>Optional</sup> <a name="awsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.awsOrg"></a>

```java
public S3StorageLensStorageLensConfigurationAwsOrg getAwsOrg();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#aws_org S3StorageLens#aws_org}

---

##### `dataExport`<sup>Optional</sup> <a name="dataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.dataExport"></a>

```java
public S3StorageLensStorageLensConfigurationDataExport getDataExport();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

Specifies how Amazon S3 Storage Lens metrics should be exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#data_export S3StorageLens#data_export}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.exclude"></a>

```java
public S3StorageLensStorageLensConfigurationExclude getExclude();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}

---

##### `expandedPrefixesDataExport`<sup>Optional</sup> <a name="expandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.expandedPrefixesDataExport"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport getExpandedPrefixesDataExport();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

Expanded Prefixes Data Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#expanded_prefixes_data_export S3StorageLens#expanded_prefixes_data_export}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.include"></a>

```java
public S3StorageLensStorageLensConfigurationInclude getInclude();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#include S3StorageLens#include}

---

##### `prefixDelimiter`<sup>Optional</sup> <a name="prefixDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.prefixDelimiter"></a>

```java
public java.lang.String getPrefixDelimiter();
```

- *Type:* java.lang.String

The delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix_delimiter S3StorageLens#prefix_delimiter}

---

### S3StorageLensStorageLensConfigurationAccountLevel <a name="S3StorageLensStorageLensConfigurationAccountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevel;

S3StorageLensStorageLensConfigurationAccountLevel.builder()
    .bucketLevel(S3StorageLensStorageLensConfigurationAccountLevelBucketLevel)
//  .activityMetrics(S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics)
//  .advancedCostOptimizationMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics)
//  .advancedDataProtectionMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics)
//  .advancedPerformanceMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics)
//  .detailedStatusCodesMetrics(S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics)
//  .storageLensGroupLevel(S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.bucketLevel">bucketLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | Bucket-level metrics configurations. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.activityMetrics">activityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | Enables activity metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedCostOptimizationMetrics">advancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | Enables advanced cost optimization metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedDataProtectionMetrics">advancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | Enables advanced data protection metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedPerformanceMetrics">advancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | Advanced Performance Metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.detailedStatusCodesMetrics">detailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | Enables detailed status codes metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.storageLensGroupLevel">storageLensGroupLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | Specifies the details of Amazon S3 Storage Lens Group configuration. |

---

##### `bucketLevel`<sup>Required</sup> <a name="bucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.bucketLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevel getBucketLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

Bucket-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#bucket_level S3StorageLens#bucket_level}

---

##### `activityMetrics`<sup>Optional</sup> <a name="activityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.activityMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics getActivityMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

##### `advancedCostOptimizationMetrics`<sup>Optional</sup> <a name="advancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedCostOptimizationMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics getAdvancedCostOptimizationMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

##### `advancedDataProtectionMetrics`<sup>Optional</sup> <a name="advancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedDataProtectionMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics getAdvancedDataProtectionMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

##### `advancedPerformanceMetrics`<sup>Optional</sup> <a name="advancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedPerformanceMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics getAdvancedPerformanceMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

##### `detailedStatusCodesMetrics`<sup>Optional</sup> <a name="detailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.detailedStatusCodesMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics getDetailedStatusCodesMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

##### `storageLensGroupLevel`<sup>Optional</sup> <a name="storageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.storageLensGroupLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel getStorageLensGroupLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

Specifies the details of Amazon S3 Storage Lens Group configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_group_level S3StorageLens#storage_lens_group_level}

---

### S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics;

S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether activity metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics;

S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether advanced cost optimization metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics;

S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether advanced data protection metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics;

S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the Advanced Performance Metrics is enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.builder()
//  .activityMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics)
//  .advancedCostOptimizationMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics)
//  .advancedDataProtectionMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics)
//  .advancedPerformanceMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics)
//  .detailedStatusCodesMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics)
//  .prefixLevel(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.activityMetrics">activityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | Enables activity metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedCostOptimizationMetrics">advancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | Enables advanced cost optimization metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedDataProtectionMetrics">advancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | Enables advanced data protection metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedPerformanceMetrics">advancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | Advanced Performance Metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.detailedStatusCodesMetrics">detailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | Enables detailed status codes metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.prefixLevel">prefixLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | Prefix-level metrics configurations. |

---

##### `activityMetrics`<sup>Optional</sup> <a name="activityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.activityMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics getActivityMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

##### `advancedCostOptimizationMetrics`<sup>Optional</sup> <a name="advancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedCostOptimizationMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics getAdvancedCostOptimizationMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

##### `advancedDataProtectionMetrics`<sup>Optional</sup> <a name="advancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedDataProtectionMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics getAdvancedDataProtectionMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

##### `advancedPerformanceMetrics`<sup>Optional</sup> <a name="advancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedPerformanceMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics getAdvancedPerformanceMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

##### `detailedStatusCodesMetrics`<sup>Optional</sup> <a name="detailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.detailedStatusCodesMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics getDetailedStatusCodesMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

##### `prefixLevel`<sup>Optional</sup> <a name="prefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.prefixLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel getPrefixLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

Prefix-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix_level S3StorageLens#prefix_level}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether activity metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether advanced cost optimization metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether advanced data protection metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the Advanced Performance Metrics is enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether detailed status codes metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.builder()
//  .storageMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.property.storageMetrics">storageMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}. |

---

##### `storageMetrics`<sup>Optional</sup> <a name="storageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.property.storageMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics getStorageMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}.

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
//  .selectionCriteria(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether prefix-level storage metrics are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.selectionCriteria">selectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | Selection criteria for prefix-level metrics. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether prefix-level storage metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `selectionCriteria`<sup>Optional</sup> <a name="selectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.selectionCriteria"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria getSelectionCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

Selection criteria for prefix-level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#selection_criteria S3StorageLens#selection_criteria}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;

S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.builder()
//  .delimiter(java.lang.String)
//  .maxDepth(java.lang.Number)
//  .minStorageBytesPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Delimiter to divide S3 key into hierarchy of prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.maxDepth">maxDepth</a></code> | <code>java.lang.Number</code> | Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.minStorageBytesPercentage">minStorageBytesPercentage</a></code> | <code>java.lang.Number</code> | The minimum storage bytes threshold for the prefixes to be included in the analysis. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#delimiter S3StorageLens#delimiter}

---

##### `maxDepth`<sup>Optional</sup> <a name="maxDepth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.maxDepth"></a>

```java
public java.lang.Number getMaxDepth();
```

- *Type:* java.lang.Number

Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#max_depth S3StorageLens#max_depth}

---

##### `minStorageBytesPercentage`<sup>Optional</sup> <a name="minStorageBytesPercentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.minStorageBytesPercentage"></a>

```java
public java.lang.Number getMinStorageBytesPercentage();
```

- *Type:* java.lang.Number

The minimum storage bytes threshold for the prefixes to be included in the analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#min_storage_bytes_percentage S3StorageLens#min_storage_bytes_percentage}

---

### S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics;

S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether detailed status codes metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel;

S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.builder()
//  .storageLensGroupSelectionCriteria(S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.property.storageLensGroupSelectionCriteria">storageLensGroupSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | Selection criteria for Storage Lens Group level metrics. |

---

##### `storageLensGroupSelectionCriteria`<sup>Optional</sup> <a name="storageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.property.storageLensGroupSelectionCriteria"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria getStorageLensGroupSelectionCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

Selection criteria for Storage Lens Group level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_group_selection_criteria S3StorageLens#storage_lens_group_selection_criteria}

---

### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria;

S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.builder()
//  .exclude(java.util.List<java.lang.String>)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#include S3StorageLens#include}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#include S3StorageLens#include}.

---

### S3StorageLensStorageLensConfigurationAwsOrg <a name="S3StorageLensStorageLensConfigurationAwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAwsOrg;

S3StorageLensStorageLensConfigurationAwsOrg.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.property.arn">arn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the specified resource. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

### S3StorageLensStorageLensConfigurationDataExport <a name="S3StorageLensStorageLensConfigurationDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExport;

S3StorageLensStorageLensConfigurationDataExport.builder()
//  .cloudwatchMetrics(S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics)
//  .s3BucketDestination(S3StorageLensStorageLensConfigurationDataExportS3BucketDestination)
//  .storageLensTableDestination(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.cloudwatchMetrics">cloudwatchMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.s3BucketDestination">s3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | S3 bucket destination settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.storageLensTableDestination">storageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | S3 Tables destination settings for the Amazon S3 Storage Lens metrics export. |

---

##### `cloudwatchMetrics`<sup>Optional</sup> <a name="cloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.cloudwatchMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics getCloudwatchMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#cloudwatch_metrics S3StorageLens#cloudwatch_metrics}

---

##### `s3BucketDestination`<sup>Optional</sup> <a name="s3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.s3BucketDestination"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestination getS3BucketDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

##### `storageLensTableDestination`<sup>Optional</sup> <a name="storageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.storageLensTableDestination"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination getStorageLensTableDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

### S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics <a name="S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics;

S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.builder()
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether CloudWatch metrics are enabled or disabled. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether CloudWatch metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestination <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination;

S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.builder()
//  .accountId(java.lang.String)
//  .arn(java.lang.String)
//  .encryption(S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption)
//  .format(java.lang.String)
//  .outputSchemaVersion(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The AWS account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.format">format</a></code> | <code>java.lang.String</code> | Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.outputSchemaVersion">outputSchemaVersion</a></code> | <code>java.lang.String</code> | The version of the output schema to use when exporting Amazon S3 Storage Lens metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The prefix to use for Amazon S3 Storage Lens export. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

##### `outputSchemaVersion`<sup>Optional</sup> <a name="outputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.outputSchemaVersion"></a>

```java
public java.lang.String getOutputSchemaVersion();
```

- *Type:* java.lang.String

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption;

S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.builder()
//  .ssekms(S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms)
//  .sses3(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.sses3">sses3</a></code> | <code>java.lang.String</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms;

S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.builder()
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination;

S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.builder()
//  .encryption(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption)
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the export to S3 Tables is enabled or disabled. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption;

S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.builder()
//  .ssekms(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms)
//  .sses3(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.sses3">sses3</a></code> | <code>java.lang.String</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms;

S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.builder()
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationExclude <a name="S3StorageLensStorageLensConfigurationExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExclude;

S3StorageLensStorageLensConfigurationExclude.builder()
//  .buckets(java.util.List<java.lang.String>)
//  .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.buckets">buckets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}. |

---

##### `buckets`<sup>Optional</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.buckets"></a>

```java
public java.util.List<java.lang.String> getBuckets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport;

S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.builder()
//  .s3BucketDestination(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination)
//  .storageLensTableDestination(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.s3BucketDestination">s3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | S3 bucket destination settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.storageLensTableDestination">storageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | S3 Tables destination settings for the Amazon S3 Storage Lens metrics export. |

---

##### `s3BucketDestination`<sup>Optional</sup> <a name="s3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.s3BucketDestination"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination getS3BucketDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

##### `storageLensTableDestination`<sup>Optional</sup> <a name="storageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.storageLensTableDestination"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination getStorageLensTableDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination;

S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.builder()
//  .accountId(java.lang.String)
//  .arn(java.lang.String)
//  .encryption(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption)
//  .format(java.lang.String)
//  .outputSchemaVersion(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The AWS account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.format">format</a></code> | <code>java.lang.String</code> | Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.outputSchemaVersion">outputSchemaVersion</a></code> | <code>java.lang.String</code> | The version of the output schema to use when exporting Amazon S3 Storage Lens metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The prefix to use for Amazon S3 Storage Lens export. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

##### `outputSchemaVersion`<sup>Optional</sup> <a name="outputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.outputSchemaVersion"></a>

```java
public java.lang.String getOutputSchemaVersion();
```

- *Type:* java.lang.String

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption;

S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.builder()
//  .ssekms(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms)
//  .sses3(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.sses3">sses3</a></code> | <code>java.lang.String</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms;

S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.builder()
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination;

S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.builder()
//  .encryption(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption)
//  .isEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the export to S3 Tables is enabled or disabled. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption;

S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.builder()
//  .ssekms(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms)
//  .sses3(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.sses3">sses3</a></code> | <code>java.lang.String</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms;

S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.builder()
//  .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationInclude <a name="S3StorageLensStorageLensConfigurationInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationInclude;

S3StorageLensStorageLensConfigurationInclude.builder()
//  .buckets(java.util.List<java.lang.String>)
//  .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.buckets">buckets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}. |

---

##### `buckets`<sup>Optional</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.buckets"></a>

```java
public java.util.List<java.lang.String> getBuckets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

### S3StorageLensTags <a name="S3StorageLensTags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensTags;

S3StorageLensTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key S3StorageLens#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#value S3StorageLens#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#key S3StorageLens#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens#value S3StorageLens#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics">putActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics">putAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics">putAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics">putAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics">putDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel">putPrefixLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetActivityMetrics">resetActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedCostOptimizationMetrics">resetAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedDataProtectionMetrics">resetAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedPerformanceMetrics">resetAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetDetailedStatusCodesMetrics">resetDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetPrefixLevel">resetPrefixLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActivityMetrics` <a name="putActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics"></a>

```java
public void putActivityMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---

##### `putAdvancedCostOptimizationMetrics` <a name="putAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics"></a>

```java
public void putAdvancedCostOptimizationMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---

##### `putAdvancedDataProtectionMetrics` <a name="putAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics"></a>

```java
public void putAdvancedDataProtectionMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---

##### `putAdvancedPerformanceMetrics` <a name="putAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics"></a>

```java
public void putAdvancedPerformanceMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---

##### `putDetailedStatusCodesMetrics` <a name="putDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics"></a>

```java
public void putDetailedStatusCodesMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---

##### `putPrefixLevel` <a name="putPrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel"></a>

```java
public void putPrefixLevel(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---

##### `resetActivityMetrics` <a name="resetActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetActivityMetrics"></a>

```java
public void resetActivityMetrics()
```

##### `resetAdvancedCostOptimizationMetrics` <a name="resetAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedCostOptimizationMetrics"></a>

```java
public void resetAdvancedCostOptimizationMetrics()
```

##### `resetAdvancedDataProtectionMetrics` <a name="resetAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedDataProtectionMetrics"></a>

```java
public void resetAdvancedDataProtectionMetrics()
```

##### `resetAdvancedPerformanceMetrics` <a name="resetAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedPerformanceMetrics"></a>

```java
public void resetAdvancedPerformanceMetrics()
```

##### `resetDetailedStatusCodesMetrics` <a name="resetDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetDetailedStatusCodesMetrics"></a>

```java
public void resetDetailedStatusCodesMetrics()
```

##### `resetPrefixLevel` <a name="resetPrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetPrefixLevel"></a>

```java
public void resetPrefixLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics">activityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics">advancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics">advancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics">advancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics">detailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel">prefixLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetricsInput">activityMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetricsInput">advancedCostOptimizationMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetricsInput">advancedDataProtectionMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetricsInput">advancedPerformanceMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetricsInput">detailedStatusCodesMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevelInput">prefixLevelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activityMetrics`<sup>Required</sup> <a name="activityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference getActivityMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a>

---

##### `advancedCostOptimizationMetrics`<sup>Required</sup> <a name="advancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference getAdvancedCostOptimizationMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `advancedDataProtectionMetrics`<sup>Required</sup> <a name="advancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference getAdvancedDataProtectionMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `advancedPerformanceMetrics`<sup>Required</sup> <a name="advancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference getAdvancedPerformanceMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `detailedStatusCodesMetrics`<sup>Required</sup> <a name="detailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference getDetailedStatusCodesMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `prefixLevel`<sup>Required</sup> <a name="prefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference getPrefixLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a>

---

##### `activityMetricsInput`<sup>Optional</sup> <a name="activityMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics getActivityMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---

##### `advancedCostOptimizationMetricsInput`<sup>Optional</sup> <a name="advancedCostOptimizationMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics getAdvancedCostOptimizationMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---

##### `advancedDataProtectionMetricsInput`<sup>Optional</sup> <a name="advancedDataProtectionMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics getAdvancedDataProtectionMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---

##### `advancedPerformanceMetricsInput`<sup>Optional</sup> <a name="advancedPerformanceMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics getAdvancedPerformanceMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---

##### `detailedStatusCodesMetricsInput`<sup>Optional</sup> <a name="detailedStatusCodesMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics getDetailedStatusCodesMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---

##### `prefixLevelInput`<sup>Optional</sup> <a name="prefixLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevelInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel getPrefixLevelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics">putStorageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resetStorageMetrics">resetStorageMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageMetrics` <a name="putStorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics"></a>

```java
public void putStorageMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---

##### `resetStorageMetrics` <a name="resetStorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resetStorageMetrics"></a>

```java
public void resetStorageMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics">storageMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetricsInput">storageMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageMetrics`<sup>Required</sup> <a name="storageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference getStorageMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a>

---

##### `storageMetricsInput`<sup>Optional</sup> <a name="storageMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics getStorageMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria">putSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetSelectionCriteria">resetSelectionCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelectionCriteria` <a name="putSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria"></a>

```java
public void putSelectionCriteria(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetSelectionCriteria` <a name="resetSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetSelectionCriteria"></a>

```java
public void resetSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria">selectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteriaInput">selectionCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selectionCriteria`<sup>Required</sup> <a name="selectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference getSelectionCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `selectionCriteriaInput`<sup>Optional</sup> <a name="selectionCriteriaInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteriaInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria getSelectionCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMaxDepth">resetMaxDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMinStorageBytesPercentage">resetMinStorageBytesPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetMaxDepth` <a name="resetMaxDepth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMaxDepth"></a>

```java
public void resetMaxDepth()
```

##### `resetMinStorageBytesPercentage` <a name="resetMinStorageBytesPercentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMinStorageBytesPercentage"></a>

```java
public void resetMinStorageBytesPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepthInput">maxDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentageInput">minStorageBytesPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth">maxDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage">minStorageBytesPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `maxDepthInput`<sup>Optional</sup> <a name="maxDepthInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepthInput"></a>

```java
public java.lang.Number getMaxDepthInput();
```

- *Type:* java.lang.Number

---

##### `minStorageBytesPercentageInput`<sup>Optional</sup> <a name="minStorageBytesPercentageInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentageInput"></a>

```java
public java.lang.Number getMinStorageBytesPercentageInput();
```

- *Type:* java.lang.Number

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `maxDepth`<sup>Required</sup> <a name="maxDepth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth"></a>

```java
public java.lang.Number getMaxDepth();
```

- *Type:* java.lang.Number

---

##### `minStorageBytesPercentage`<sup>Required</sup> <a name="minStorageBytesPercentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage"></a>

```java
public java.lang.Number getMinStorageBytesPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics">putActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics">putAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics">putAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics">putAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel">putBucketLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics">putDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel">putStorageLensGroupLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetActivityMetrics">resetActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedCostOptimizationMetrics">resetAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedDataProtectionMetrics">resetAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedPerformanceMetrics">resetAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetDetailedStatusCodesMetrics">resetDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetStorageLensGroupLevel">resetStorageLensGroupLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActivityMetrics` <a name="putActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics"></a>

```java
public void putActivityMetrics(S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---

##### `putAdvancedCostOptimizationMetrics` <a name="putAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics"></a>

```java
public void putAdvancedCostOptimizationMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---

##### `putAdvancedDataProtectionMetrics` <a name="putAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics"></a>

```java
public void putAdvancedDataProtectionMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---

##### `putAdvancedPerformanceMetrics` <a name="putAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics"></a>

```java
public void putAdvancedPerformanceMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---

##### `putBucketLevel` <a name="putBucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel"></a>

```java
public void putBucketLevel(S3StorageLensStorageLensConfigurationAccountLevelBucketLevel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---

##### `putDetailedStatusCodesMetrics` <a name="putDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics"></a>

```java
public void putDetailedStatusCodesMetrics(S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---

##### `putStorageLensGroupLevel` <a name="putStorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel"></a>

```java
public void putStorageLensGroupLevel(S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---

##### `resetActivityMetrics` <a name="resetActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetActivityMetrics"></a>

```java
public void resetActivityMetrics()
```

##### `resetAdvancedCostOptimizationMetrics` <a name="resetAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedCostOptimizationMetrics"></a>

```java
public void resetAdvancedCostOptimizationMetrics()
```

##### `resetAdvancedDataProtectionMetrics` <a name="resetAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedDataProtectionMetrics"></a>

```java
public void resetAdvancedDataProtectionMetrics()
```

##### `resetAdvancedPerformanceMetrics` <a name="resetAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedPerformanceMetrics"></a>

```java
public void resetAdvancedPerformanceMetrics()
```

##### `resetDetailedStatusCodesMetrics` <a name="resetDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetDetailedStatusCodesMetrics"></a>

```java
public void resetDetailedStatusCodesMetrics()
```

##### `resetStorageLensGroupLevel` <a name="resetStorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetStorageLensGroupLevel"></a>

```java
public void resetStorageLensGroupLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics">activityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics">advancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics">advancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics">advancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel">bucketLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics">detailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel">storageLensGroupLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetricsInput">activityMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetricsInput">advancedCostOptimizationMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetricsInput">advancedDataProtectionMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetricsInput">advancedPerformanceMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevelInput">bucketLevelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetricsInput">detailedStatusCodesMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevelInput">storageLensGroupLevelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activityMetrics`<sup>Required</sup> <a name="activityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference getActivityMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a>

---

##### `advancedCostOptimizationMetrics`<sup>Required</sup> <a name="advancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference getAdvancedCostOptimizationMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `advancedDataProtectionMetrics`<sup>Required</sup> <a name="advancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference getAdvancedDataProtectionMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `advancedPerformanceMetrics`<sup>Required</sup> <a name="advancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference getAdvancedPerformanceMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `bucketLevel`<sup>Required</sup> <a name="bucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference getBucketLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a>

---

##### `detailedStatusCodesMetrics`<sup>Required</sup> <a name="detailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference getDetailedStatusCodesMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `storageLensGroupLevel`<sup>Required</sup> <a name="storageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference getStorageLensGroupLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a>

---

##### `activityMetricsInput`<sup>Optional</sup> <a name="activityMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics getActivityMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---

##### `advancedCostOptimizationMetricsInput`<sup>Optional</sup> <a name="advancedCostOptimizationMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics getAdvancedCostOptimizationMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---

##### `advancedDataProtectionMetricsInput`<sup>Optional</sup> <a name="advancedDataProtectionMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics getAdvancedDataProtectionMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---

##### `advancedPerformanceMetricsInput`<sup>Optional</sup> <a name="advancedPerformanceMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics getAdvancedPerformanceMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---

##### `bucketLevelInput`<sup>Optional</sup> <a name="bucketLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevelInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevel getBucketLevelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---

##### `detailedStatusCodesMetricsInput`<sup>Optional</sup> <a name="detailedStatusCodesMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics getDetailedStatusCodesMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---

##### `storageLensGroupLevelInput`<sup>Optional</sup> <a name="storageLensGroupLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevelInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel getStorageLensGroupLevelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria">putStorageLensGroupSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resetStorageLensGroupSelectionCriteria">resetStorageLensGroupSelectionCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageLensGroupSelectionCriteria` <a name="putStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria"></a>

```java
public void putStorageLensGroupSelectionCriteria(S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---

##### `resetStorageLensGroupSelectionCriteria` <a name="resetStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resetStorageLensGroupSelectionCriteria"></a>

```java
public void resetStorageLensGroupSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria">storageLensGroupSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteriaInput">storageLensGroupSelectionCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageLensGroupSelectionCriteria`<sup>Required</sup> <a name="storageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference getStorageLensGroupSelectionCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a>

---

##### `storageLensGroupSelectionCriteriaInput`<sup>Optional</sup> <a name="storageLensGroupSelectionCriteriaInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteriaInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria getStorageLensGroupSelectionCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference;

new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.excludeInput"></a>

```java
public java.util.List<java.lang.String> getExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---


### S3StorageLensStorageLensConfigurationAwsOrgOutputReference <a name="S3StorageLensStorageLensConfigurationAwsOrgOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference;

new S3StorageLensStorageLensConfigurationAwsOrgOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAwsOrg getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---


### S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference;

new S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---


### S3StorageLensStorageLensConfigurationDataExportOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportOutputReference;

new S3StorageLensStorageLensConfigurationDataExportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics">putCloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination">putS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination">putStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetCloudwatchMetrics">resetCloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetS3BucketDestination">resetS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetStorageLensTableDestination">resetStorageLensTableDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchMetrics` <a name="putCloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics"></a>

```java
public void putCloudwatchMetrics(S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---

##### `putS3BucketDestination` <a name="putS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination"></a>

```java
public void putS3BucketDestination(S3StorageLensStorageLensConfigurationDataExportS3BucketDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---

##### `putStorageLensTableDestination` <a name="putStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination"></a>

```java
public void putStorageLensTableDestination(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---

##### `resetCloudwatchMetrics` <a name="resetCloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetCloudwatchMetrics"></a>

```java
public void resetCloudwatchMetrics()
```

##### `resetS3BucketDestination` <a name="resetS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetS3BucketDestination"></a>

```java
public void resetS3BucketDestination()
```

##### `resetStorageLensTableDestination` <a name="resetStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetStorageLensTableDestination"></a>

```java
public void resetStorageLensTableDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics">cloudwatchMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination">s3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination">storageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetricsInput">cloudwatchMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestinationInput">s3BucketDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestinationInput">storageLensTableDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchMetrics`<sup>Required</sup> <a name="cloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference getCloudwatchMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a>

---

##### `s3BucketDestination`<sup>Required</sup> <a name="s3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference getS3BucketDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a>

---

##### `storageLensTableDestination`<sup>Required</sup> <a name="storageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference getStorageLensTableDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a>

---

##### `cloudwatchMetricsInput`<sup>Optional</sup> <a name="cloudwatchMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetricsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics getCloudwatchMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---

##### `s3BucketDestinationInput`<sup>Optional</sup> <a name="s3BucketDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestinationInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestination getS3BucketDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---

##### `storageLensTableDestinationInput`<sup>Optional</sup> <a name="storageLensTableDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestinationInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination getStorageLensTableDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExport getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms">putSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms">resetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSses3">resetSses3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsekms` <a name="putSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms"></a>

```java
public void putSsekms(S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `resetSsekms` <a name="resetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms"></a>

```java
public void resetSsekms()
```

##### `resetSses3` <a name="resetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSses3"></a>

```java
public void resetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput">ssekmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input">sses3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekmsInput`<sup>Optional</sup> <a name="ssekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms getSsekmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `sses3Input`<sup>Optional</sup> <a name="sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input"></a>

```java
public java.lang.String getSses3Input();
```

- *Type:* java.lang.String

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion">resetOutputSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption"></a>

```java
public void putEncryption(S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetOutputSchemaVersion` <a name="resetOutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion"></a>

```java
public void resetOutputSchemaVersion()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryptionInput">encryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput">outputSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">outputSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryptionInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption getEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `outputSchemaVersionInput`<sup>Optional</sup> <a name="outputSchemaVersionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput"></a>

```java
public java.lang.String getOutputSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="outputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```java
public java.lang.String getOutputSchemaVersion();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms">putSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms">resetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3">resetSses3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsekms` <a name="putSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms"></a>

```java
public void putSsekms(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `resetSsekms` <a name="resetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms"></a>

```java
public void resetSsekms()
```

##### `resetSses3` <a name="resetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3"></a>

```java
public void resetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput">ssekmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input">sses3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekmsInput`<sup>Optional</sup> <a name="ssekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms getSsekmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `sses3Input`<sup>Optional</sup> <a name="sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input"></a>

```java
public java.lang.String getSses3Input();
```

- *Type:* java.lang.String

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption"></a>

```java
public void putEncryption(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryptionInput">encryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryptionInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption getEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---


### S3StorageLensStorageLensConfigurationExcludeOutputReference <a name="S3StorageLensStorageLensConfigurationExcludeOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExcludeOutputReference;

new S3StorageLensStorageLensConfigurationExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetBuckets">resetBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuckets` <a name="resetBuckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetBuckets"></a>

```java
public void resetBuckets()
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetRegions"></a>

```java
public void resetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.bucketsInput">bucketsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets">buckets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketsInput`<sup>Optional</sup> <a name="bucketsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.bucketsInput"></a>

```java
public java.util.List<java.lang.String> getBucketsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets"></a>

```java
public java.util.List<java.lang.String> getBuckets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExclude getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination">putS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination">putStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetS3BucketDestination">resetS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetStorageLensTableDestination">resetStorageLensTableDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3BucketDestination` <a name="putS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination"></a>

```java
public void putS3BucketDestination(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---

##### `putStorageLensTableDestination` <a name="putStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination"></a>

```java
public void putStorageLensTableDestination(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---

##### `resetS3BucketDestination` <a name="resetS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetS3BucketDestination"></a>

```java
public void resetS3BucketDestination()
```

##### `resetStorageLensTableDestination` <a name="resetStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetStorageLensTableDestination"></a>

```java
public void resetStorageLensTableDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination">s3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination">storageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestinationInput">s3BucketDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestinationInput">storageLensTableDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketDestination`<sup>Required</sup> <a name="s3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference getS3BucketDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a>

---

##### `storageLensTableDestination`<sup>Required</sup> <a name="storageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference getStorageLensTableDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a>

---

##### `s3BucketDestinationInput`<sup>Optional</sup> <a name="s3BucketDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestinationInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination getS3BucketDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---

##### `storageLensTableDestinationInput`<sup>Optional</sup> <a name="storageLensTableDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestinationInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination getStorageLensTableDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms">putSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms">resetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSses3">resetSses3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsekms` <a name="putSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms"></a>

```java
public void putSsekms(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `resetSsekms` <a name="resetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms"></a>

```java
public void resetSsekms()
```

##### `resetSses3` <a name="resetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSses3"></a>

```java
public void resetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput">ssekmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input">sses3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekmsInput`<sup>Optional</sup> <a name="ssekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms getSsekmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `sses3Input`<sup>Optional</sup> <a name="sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input"></a>

```java
public java.lang.String getSses3Input();
```

- *Type:* java.lang.String

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion">resetOutputSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption"></a>

```java
public void putEncryption(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetOutputSchemaVersion` <a name="resetOutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion"></a>

```java
public void resetOutputSchemaVersion()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryptionInput">encryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput">outputSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">outputSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryptionInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption getEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `outputSchemaVersionInput`<sup>Optional</sup> <a name="outputSchemaVersionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput"></a>

```java
public java.lang.String getOutputSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="outputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```java
public java.lang.String getOutputSchemaVersion();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms">putSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms">resetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3">resetSses3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsekms` <a name="putSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms"></a>

```java
public void putSsekms(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `resetSsekms` <a name="resetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms"></a>

```java
public void resetSsekms()
```

##### `resetSses3` <a name="resetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3"></a>

```java
public void resetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput">ssekmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input">sses3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekmsInput`<sup>Optional</sup> <a name="ssekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms getSsekmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `sses3Input`<sup>Optional</sup> <a name="sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input"></a>

```java
public java.lang.String getSses3Input();
```

- *Type:* java.lang.String

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption"></a>

```java
public void putEncryption(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryptionInput">encryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryptionInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption getEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---


### S3StorageLensStorageLensConfigurationIncludeOutputReference <a name="S3StorageLensStorageLensConfigurationIncludeOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationIncludeOutputReference;

new S3StorageLensStorageLensConfigurationIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetBuckets">resetBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuckets` <a name="resetBuckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetBuckets"></a>

```java
public void resetBuckets()
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetRegions"></a>

```java
public void resetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.bucketsInput">bucketsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets">buckets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketsInput`<sup>Optional</sup> <a name="bucketsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.bucketsInput"></a>

```java
public java.util.List<java.lang.String> getBucketsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets"></a>

```java
public java.util.List<java.lang.String> getBuckets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationInclude getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---


### S3StorageLensStorageLensConfigurationOutputReference <a name="S3StorageLensStorageLensConfigurationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensStorageLensConfigurationOutputReference;

new S3StorageLensStorageLensConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel">putAccountLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg">putAwsOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport">putDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport">putExpandedPrefixesDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetAwsOrg">resetAwsOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetDataExport">resetDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExpandedPrefixesDataExport">resetExpandedPrefixesDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetInclude">resetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetPrefixDelimiter">resetPrefixDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccountLevel` <a name="putAccountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel"></a>

```java
public void putAccountLevel(S3StorageLensStorageLensConfigurationAccountLevel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---

##### `putAwsOrg` <a name="putAwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg"></a>

```java
public void putAwsOrg(S3StorageLensStorageLensConfigurationAwsOrg value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---

##### `putDataExport` <a name="putDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport"></a>

```java
public void putDataExport(S3StorageLensStorageLensConfigurationDataExport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---

##### `putExclude` <a name="putExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude"></a>

```java
public void putExclude(S3StorageLensStorageLensConfigurationExclude value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---

##### `putExpandedPrefixesDataExport` <a name="putExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport"></a>

```java
public void putExpandedPrefixesDataExport(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---

##### `putInclude` <a name="putInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude"></a>

```java
public void putInclude(S3StorageLensStorageLensConfigurationInclude value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---

##### `resetAwsOrg` <a name="resetAwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetAwsOrg"></a>

```java
public void resetAwsOrg()
```

##### `resetDataExport` <a name="resetDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetDataExport"></a>

```java
public void resetDataExport()
```

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetExpandedPrefixesDataExport` <a name="resetExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExpandedPrefixesDataExport"></a>

```java
public void resetExpandedPrefixesDataExport()
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetInclude"></a>

```java
public void resetInclude()
```

##### `resetPrefixDelimiter` <a name="resetPrefixDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetPrefixDelimiter"></a>

```java
public void resetPrefixDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevel">accountLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrg">awsOrg</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference">S3StorageLensStorageLensConfigurationAwsOrgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExport">dataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference">S3StorageLensStorageLensConfigurationDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference">S3StorageLensStorageLensConfigurationExcludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport">expandedPrefixesDataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.include">include</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference">S3StorageLensStorageLensConfigurationIncludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn">storageLensArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevelInput">accountLevelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrgInput">awsOrgInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExportInput">dataExportInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.excludeInput">excludeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExportInput">expandedPrefixesDataExportInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.includeInput">includeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiterInput">prefixDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter">prefixDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountLevel`<sup>Required</sup> <a name="accountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevel"></a>

```java
public S3StorageLensStorageLensConfigurationAccountLevelOutputReference getAccountLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelOutputReference</a>

---

##### `awsOrg`<sup>Required</sup> <a name="awsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrg"></a>

```java
public S3StorageLensStorageLensConfigurationAwsOrgOutputReference getAwsOrg();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference">S3StorageLensStorageLensConfigurationAwsOrgOutputReference</a>

---

##### `dataExport`<sup>Required</sup> <a name="dataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExport"></a>

```java
public S3StorageLensStorageLensConfigurationDataExportOutputReference getDataExport();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference">S3StorageLensStorageLensConfigurationDataExportOutputReference</a>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.exclude"></a>

```java
public S3StorageLensStorageLensConfigurationExcludeOutputReference getExclude();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference">S3StorageLensStorageLensConfigurationExcludeOutputReference</a>

---

##### `expandedPrefixesDataExport`<sup>Required</sup> <a name="expandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport"></a>

```java
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference getExpandedPrefixesDataExport();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.include"></a>

```java
public S3StorageLensStorageLensConfigurationIncludeOutputReference getInclude();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference">S3StorageLensStorageLensConfigurationIncludeOutputReference</a>

---

##### `storageLensArn`<sup>Required</sup> <a name="storageLensArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn"></a>

```java
public java.lang.String getStorageLensArn();
```

- *Type:* java.lang.String

---

##### `accountLevelInput`<sup>Optional</sup> <a name="accountLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevelInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevel getAccountLevelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---

##### `awsOrgInput`<sup>Optional</sup> <a name="awsOrgInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrgInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationAwsOrg getAwsOrgInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---

##### `dataExportInput`<sup>Optional</sup> <a name="dataExportInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExportInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationDataExport getDataExportInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.excludeInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExclude getExcludeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---

##### `expandedPrefixesDataExportInput`<sup>Optional</sup> <a name="expandedPrefixesDataExportInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExportInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport getExpandedPrefixesDataExportInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.includeInput"></a>

```java
public IResolvable|S3StorageLensStorageLensConfigurationInclude getIncludeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixDelimiterInput`<sup>Optional</sup> <a name="prefixDelimiterInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiterInput"></a>

```java
public java.lang.String getPrefixDelimiterInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixDelimiter`<sup>Required</sup> <a name="prefixDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter"></a>

```java
public java.lang.String getPrefixDelimiter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensStorageLensConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---


### S3StorageLensTagsList <a name="S3StorageLensTagsList" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensTagsList;

new S3StorageLensTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get"></a>

```java
public S3StorageLensTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3StorageLensTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>>

---


### S3StorageLensTagsOutputReference <a name="S3StorageLensTagsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens.S3StorageLensTagsOutputReference;

new S3StorageLensTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>

---



