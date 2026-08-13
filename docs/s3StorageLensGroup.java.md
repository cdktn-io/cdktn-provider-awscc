# `s3StorageLensGroup` Submodule <a name="`s3StorageLensGroup` Submodule" id="@cdktn/provider-awscc.s3StorageLensGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3StorageLensGroup <a name="S3StorageLensGroup" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group awscc_s3_storage_lens_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroup;

S3StorageLensGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .filter(S3StorageLensGroupFilter)
    .name(java.lang.String)
//  .tags(IResolvable|java.util.List<S3StorageLensGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | Sets the Storage Lens Group filter. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name that identifies the Amazon S3 Storage Lens Group. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>></code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

Sets the Storage Lens Group filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#filter S3StorageLensGroup#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name that identifies the Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#name S3StorageLensGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>>

A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#tags S3StorageLensGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter"></a>

```java
public void putFilter(S3StorageLensGroupFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3StorageLensGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3StorageLensGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroup;

S3StorageLensGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroup;

S3StorageLensGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroup;

S3StorageLensGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroup;

S3StorageLensGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3StorageLensGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3StorageLensGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3StorageLensGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3StorageLensGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3StorageLensGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference">S3StorageLensGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.storageLensGroupArn">storageLensGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList">S3StorageLensGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filter"></a>

```java
public S3StorageLensGroupFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference">S3StorageLensGroupFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storageLensGroupArn`<sup>Required</sup> <a name="storageLensGroupArn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.storageLensGroupArn"></a>

```java
public java.lang.String getStorageLensGroupArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tags"></a>

```java
public S3StorageLensGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList">S3StorageLensGroupTagsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filterInput"></a>

```java
public IResolvable|S3StorageLensGroupFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3StorageLensGroupConfig <a name="S3StorageLensGroupConfig" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupConfig;

S3StorageLensGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .filter(S3StorageLensGroupFilter)
    .name(java.lang.String)
//  .tags(IResolvable|java.util.List<S3StorageLensGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | Sets the Storage Lens Group filter. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name that identifies the Amazon S3 Storage Lens Group. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>></code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.filter"></a>

```java
public S3StorageLensGroupFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

Sets the Storage Lens Group filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#filter S3StorageLensGroup#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name that identifies the Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#name S3StorageLensGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>>

A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#tags S3StorageLensGroup#tags}

---

### S3StorageLensGroupFilter <a name="S3StorageLensGroupFilter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilter;

S3StorageLensGroupFilter.builder()
//  .and(S3StorageLensGroupFilterAnd)
//  .matchAnyPrefix(java.util.List<java.lang.String>)
//  .matchAnySuffix(java.util.List<java.lang.String>)
//  .matchAnyTag(IResolvable|java.util.List<S3StorageLensGroupFilterMatchAnyTag>)
//  .matchObjectAge(S3StorageLensGroupFilterMatchObjectAge)
//  .matchObjectSize(S3StorageLensGroupFilterMatchObjectSize)
//  .or(S3StorageLensGroupFilterOr)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.and">and</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a></code> | The Storage Lens group will include objects that match all of the specified filter values. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>java.util.List<java.lang.String></code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnySuffix">matchAnySuffix</a></code> | <code>java.util.List<java.lang.String></code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyTag">matchAnyTag</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>></code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.or">or</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a></code> | The Storage Lens group will include objects that match any of the specified filter values. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.and"></a>

```java
public S3StorageLensGroupFilterAnd getAnd();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

The Storage Lens group will include objects that match all of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#and S3StorageLensGroup#and}

---

##### `matchAnyPrefix`<sup>Optional</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefix();
```

- *Type:* java.util.List<java.lang.String>

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `matchAnySuffix`<sup>Optional</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnySuffix"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffix();
```

- *Type:* java.util.List<java.lang.String>

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `matchAnyTag`<sup>Optional</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyTag"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterMatchAnyTag> getMatchAnyTag();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>>

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `matchObjectAge`<sup>Optional</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectAge"></a>

```java
public S3StorageLensGroupFilterMatchObjectAge getMatchObjectAge();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `matchObjectSize`<sup>Optional</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectSize"></a>

```java
public S3StorageLensGroupFilterMatchObjectSize getMatchObjectSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.or"></a>

```java
public S3StorageLensGroupFilterOr getOr();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

The Storage Lens group will include objects that match any of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#or S3StorageLensGroup#or}

---

### S3StorageLensGroupFilterAnd <a name="S3StorageLensGroupFilterAnd" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAnd;

S3StorageLensGroupFilterAnd.builder()
//  .matchAnyPrefix(java.util.List<java.lang.String>)
//  .matchAnySuffix(java.util.List<java.lang.String>)
//  .matchAnyTag(IResolvable|java.util.List<S3StorageLensGroupFilterAndMatchAnyTag>)
//  .matchObjectAge(S3StorageLensGroupFilterAndMatchObjectAge)
//  .matchObjectSize(S3StorageLensGroupFilterAndMatchObjectSize)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>java.util.List<java.lang.String></code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnySuffix">matchAnySuffix</a></code> | <code>java.util.List<java.lang.String></code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyTag">matchAnyTag</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>></code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |

---

##### `matchAnyPrefix`<sup>Optional</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefix();
```

- *Type:* java.util.List<java.lang.String>

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `matchAnySuffix`<sup>Optional</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnySuffix"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffix();
```

- *Type:* java.util.List<java.lang.String>

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `matchAnyTag`<sup>Optional</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyTag"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterAndMatchAnyTag> getMatchAnyTag();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>>

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `matchObjectAge`<sup>Optional</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectAge"></a>

```java
public S3StorageLensGroupFilterAndMatchObjectAge getMatchObjectAge();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `matchObjectSize`<sup>Optional</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectSize"></a>

```java
public S3StorageLensGroupFilterAndMatchObjectSize getMatchObjectSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

### S3StorageLensGroupFilterAndMatchAnyTag <a name="S3StorageLensGroupFilterAndMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndMatchAnyTag;

S3StorageLensGroupFilterAndMatchAnyTag.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterAndMatchObjectAge <a name="S3StorageLensGroupFilterAndMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndMatchObjectAge;

S3StorageLensGroupFilterAndMatchObjectAge.builder()
//  .daysGreaterThan(java.lang.Number)
//  .daysLessThan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysGreaterThan">daysGreaterThan</a></code> | <code>java.lang.Number</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysLessThan">daysLessThan</a></code> | <code>java.lang.Number</code> | Maximum object age to which the rule applies. |

---

##### `daysGreaterThan`<sup>Optional</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysGreaterThan"></a>

```java
public java.lang.Number getDaysGreaterThan();
```

- *Type:* java.lang.Number

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `daysLessThan`<sup>Optional</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysLessThan"></a>

```java
public java.lang.Number getDaysLessThan();
```

- *Type:* java.lang.Number

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterAndMatchObjectSize <a name="S3StorageLensGroupFilterAndMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndMatchObjectSize;

S3StorageLensGroupFilterAndMatchObjectSize.builder()
//  .bytesGreaterThan(java.lang.Number)
//  .bytesLessThan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>java.lang.Number</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesLessThan">bytesLessThan</a></code> | <code>java.lang.Number</code> | Maximum object size to which the rule applies. |

---

##### `bytesGreaterThan`<sup>Optional</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesGreaterThan"></a>

```java
public java.lang.Number getBytesGreaterThan();
```

- *Type:* java.lang.Number

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `bytesLessThan`<sup>Optional</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesLessThan"></a>

```java
public java.lang.Number getBytesLessThan();
```

- *Type:* java.lang.Number

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupFilterMatchAnyTag <a name="S3StorageLensGroupFilterMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterMatchAnyTag;

S3StorageLensGroupFilterMatchAnyTag.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterMatchObjectAge <a name="S3StorageLensGroupFilterMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterMatchObjectAge;

S3StorageLensGroupFilterMatchObjectAge.builder()
//  .daysGreaterThan(java.lang.Number)
//  .daysLessThan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysGreaterThan">daysGreaterThan</a></code> | <code>java.lang.Number</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysLessThan">daysLessThan</a></code> | <code>java.lang.Number</code> | Maximum object age to which the rule applies. |

---

##### `daysGreaterThan`<sup>Optional</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysGreaterThan"></a>

```java
public java.lang.Number getDaysGreaterThan();
```

- *Type:* java.lang.Number

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `daysLessThan`<sup>Optional</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysLessThan"></a>

```java
public java.lang.Number getDaysLessThan();
```

- *Type:* java.lang.Number

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterMatchObjectSize <a name="S3StorageLensGroupFilterMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterMatchObjectSize;

S3StorageLensGroupFilterMatchObjectSize.builder()
//  .bytesGreaterThan(java.lang.Number)
//  .bytesLessThan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>java.lang.Number</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesLessThan">bytesLessThan</a></code> | <code>java.lang.Number</code> | Maximum object size to which the rule applies. |

---

##### `bytesGreaterThan`<sup>Optional</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesGreaterThan"></a>

```java
public java.lang.Number getBytesGreaterThan();
```

- *Type:* java.lang.Number

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `bytesLessThan`<sup>Optional</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesLessThan"></a>

```java
public java.lang.Number getBytesLessThan();
```

- *Type:* java.lang.Number

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupFilterOr <a name="S3StorageLensGroupFilterOr" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOr;

S3StorageLensGroupFilterOr.builder()
//  .matchAnyPrefix(java.util.List<java.lang.String>)
//  .matchAnySuffix(java.util.List<java.lang.String>)
//  .matchAnyTag(IResolvable|java.util.List<S3StorageLensGroupFilterOrMatchAnyTag>)
//  .matchObjectAge(S3StorageLensGroupFilterOrMatchObjectAge)
//  .matchObjectSize(S3StorageLensGroupFilterOrMatchObjectSize)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>java.util.List<java.lang.String></code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnySuffix">matchAnySuffix</a></code> | <code>java.util.List<java.lang.String></code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyTag">matchAnyTag</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>></code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |

---

##### `matchAnyPrefix`<sup>Optional</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefix();
```

- *Type:* java.util.List<java.lang.String>

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `matchAnySuffix`<sup>Optional</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnySuffix"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffix();
```

- *Type:* java.util.List<java.lang.String>

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `matchAnyTag`<sup>Optional</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyTag"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterOrMatchAnyTag> getMatchAnyTag();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>>

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `matchObjectAge`<sup>Optional</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectAge"></a>

```java
public S3StorageLensGroupFilterOrMatchObjectAge getMatchObjectAge();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `matchObjectSize`<sup>Optional</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectSize"></a>

```java
public S3StorageLensGroupFilterOrMatchObjectSize getMatchObjectSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

### S3StorageLensGroupFilterOrMatchAnyTag <a name="S3StorageLensGroupFilterOrMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrMatchAnyTag;

S3StorageLensGroupFilterOrMatchAnyTag.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterOrMatchObjectAge <a name="S3StorageLensGroupFilterOrMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrMatchObjectAge;

S3StorageLensGroupFilterOrMatchObjectAge.builder()
//  .daysGreaterThan(java.lang.Number)
//  .daysLessThan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysGreaterThan">daysGreaterThan</a></code> | <code>java.lang.Number</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysLessThan">daysLessThan</a></code> | <code>java.lang.Number</code> | Maximum object age to which the rule applies. |

---

##### `daysGreaterThan`<sup>Optional</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysGreaterThan"></a>

```java
public java.lang.Number getDaysGreaterThan();
```

- *Type:* java.lang.Number

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `daysLessThan`<sup>Optional</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysLessThan"></a>

```java
public java.lang.Number getDaysLessThan();
```

- *Type:* java.lang.Number

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterOrMatchObjectSize <a name="S3StorageLensGroupFilterOrMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrMatchObjectSize;

S3StorageLensGroupFilterOrMatchObjectSize.builder()
//  .bytesGreaterThan(java.lang.Number)
//  .bytesLessThan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>java.lang.Number</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesLessThan">bytesLessThan</a></code> | <code>java.lang.Number</code> | Maximum object size to which the rule applies. |

---

##### `bytesGreaterThan`<sup>Optional</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesGreaterThan"></a>

```java
public java.lang.Number getBytesGreaterThan();
```

- *Type:* java.lang.Number

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `bytesLessThan`<sup>Optional</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesLessThan"></a>

```java
public java.lang.Number getBytesLessThan();
```

- *Type:* java.lang.Number

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupTags <a name="S3StorageLensGroupTags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupTags;

S3StorageLensGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3StorageLensGroupFilterAndMatchAnyTagList <a name="S3StorageLensGroupFilterAndMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndMatchAnyTagList;

new S3StorageLensGroupFilterAndMatchAnyTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get"></a>

```java
public S3StorageLensGroupFilterAndMatchAnyTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterAndMatchAnyTag> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>>

---


### S3StorageLensGroupFilterAndMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterAndMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndMatchAnyTagOutputReference;

new S3StorageLensGroupFilterAndMatchAnyTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterAndMatchAnyTag getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>

---


### S3StorageLensGroupFilterAndMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterAndMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference;

new S3StorageLensGroupFilterAndMatchObjectAgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysGreaterThan">resetDaysGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysLessThan">resetDaysLessThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysGreaterThan` <a name="resetDaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```java
public void resetDaysGreaterThan()
```

##### `resetDaysLessThan` <a name="resetDaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```java
public void resetDaysLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThanInput">daysGreaterThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThanInput">daysLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan">daysGreaterThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan">daysLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysGreaterThanInput`<sup>Optional</sup> <a name="daysGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```java
public java.lang.Number getDaysGreaterThanInput();
```

- *Type:* java.lang.Number

---

##### `daysLessThanInput`<sup>Optional</sup> <a name="daysLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```java
public java.lang.Number getDaysLessThanInput();
```

- *Type:* java.lang.Number

---

##### `daysGreaterThan`<sup>Required</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```java
public java.lang.Number getDaysGreaterThan();
```

- *Type:* java.lang.Number

---

##### `daysLessThan`<sup>Required</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan"></a>

```java
public java.lang.Number getDaysLessThan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterAndMatchObjectAge getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

---


### S3StorageLensGroupFilterAndMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterAndMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference;

new S3StorageLensGroupFilterAndMatchObjectSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesGreaterThan">resetBytesGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesLessThan">resetBytesLessThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytesGreaterThan` <a name="resetBytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```java
public void resetBytesGreaterThan()
```

##### `resetBytesLessThan` <a name="resetBytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```java
public void resetBytesLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThanInput">bytesGreaterThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThanInput">bytesLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan">bytesLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytesGreaterThanInput`<sup>Optional</sup> <a name="bytesGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```java
public java.lang.Number getBytesGreaterThanInput();
```

- *Type:* java.lang.Number

---

##### `bytesLessThanInput`<sup>Optional</sup> <a name="bytesLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```java
public java.lang.Number getBytesLessThanInput();
```

- *Type:* java.lang.Number

---

##### `bytesGreaterThan`<sup>Required</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```java
public java.lang.Number getBytesGreaterThan();
```

- *Type:* java.lang.Number

---

##### `bytesLessThan`<sup>Required</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```java
public java.lang.Number getBytesLessThan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterAndMatchObjectSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

---


### S3StorageLensGroupFilterAndOutputReference <a name="S3StorageLensGroupFilterAndOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterAndOutputReference;

new S3StorageLensGroupFilterAndOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag">putMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge">putMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize">putMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyPrefix">resetMatchAnyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnySuffix">resetMatchAnySuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyTag">resetMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectAge">resetMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectSize">resetMatchObjectSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchAnyTag` <a name="putMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag"></a>

```java
public void putMatchAnyTag(IResolvable|java.util.List<S3StorageLensGroupFilterAndMatchAnyTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>>

---

##### `putMatchObjectAge` <a name="putMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge"></a>

```java
public void putMatchObjectAge(S3StorageLensGroupFilterAndMatchObjectAge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

---

##### `putMatchObjectSize` <a name="putMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize"></a>

```java
public void putMatchObjectSize(S3StorageLensGroupFilterAndMatchObjectSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

---

##### `resetMatchAnyPrefix` <a name="resetMatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyPrefix"></a>

```java
public void resetMatchAnyPrefix()
```

##### `resetMatchAnySuffix` <a name="resetMatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnySuffix"></a>

```java
public void resetMatchAnySuffix()
```

##### `resetMatchAnyTag` <a name="resetMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyTag"></a>

```java
public void resetMatchAnyTag()
```

##### `resetMatchObjectAge` <a name="resetMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectAge"></a>

```java
public void resetMatchObjectAge()
```

##### `resetMatchObjectSize` <a name="resetMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectSize"></a>

```java
public void resetMatchObjectSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTag">matchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList">S3StorageLensGroupFilterAndMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference">S3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference">S3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefixInput">matchAnyPrefixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffixInput">matchAnySuffixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTagInput">matchAnyTagInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAgeInput">matchObjectAgeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSizeInput">matchObjectSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix">matchAnySuffix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchAnyTag`<sup>Required</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTag"></a>

```java
public S3StorageLensGroupFilterAndMatchAnyTagList getMatchAnyTag();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList">S3StorageLensGroupFilterAndMatchAnyTagList</a>

---

##### `matchObjectAge`<sup>Required</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAge"></a>

```java
public S3StorageLensGroupFilterAndMatchObjectAgeOutputReference getMatchObjectAge();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference">S3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a>

---

##### `matchObjectSize`<sup>Required</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSize"></a>

```java
public S3StorageLensGroupFilterAndMatchObjectSizeOutputReference getMatchObjectSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference">S3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a>

---

##### `matchAnyPrefixInput`<sup>Optional</sup> <a name="matchAnyPrefixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefixInput"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnySuffixInput`<sup>Optional</sup> <a name="matchAnySuffixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffixInput"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnyTagInput`<sup>Optional</sup> <a name="matchAnyTagInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTagInput"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterAndMatchAnyTag> getMatchAnyTagInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>>

---

##### `matchObjectAgeInput`<sup>Optional</sup> <a name="matchObjectAgeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAgeInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterAndMatchObjectAge getMatchObjectAgeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

---

##### `matchObjectSizeInput`<sup>Optional</sup> <a name="matchObjectSizeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSizeInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterAndMatchObjectSize getMatchObjectSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

---

##### `matchAnyPrefix`<sup>Required</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnySuffix`<sup>Required</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterAnd getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

---


### S3StorageLensGroupFilterMatchAnyTagList <a name="S3StorageLensGroupFilterMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterMatchAnyTagList;

new S3StorageLensGroupFilterMatchAnyTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get"></a>

```java
public S3StorageLensGroupFilterMatchAnyTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterMatchAnyTag> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>>

---


### S3StorageLensGroupFilterMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterMatchAnyTagOutputReference;

new S3StorageLensGroupFilterMatchAnyTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterMatchAnyTag getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>

---


### S3StorageLensGroupFilterMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterMatchObjectAgeOutputReference;

new S3StorageLensGroupFilterMatchObjectAgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysGreaterThan">resetDaysGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysLessThan">resetDaysLessThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysGreaterThan` <a name="resetDaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```java
public void resetDaysGreaterThan()
```

##### `resetDaysLessThan` <a name="resetDaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```java
public void resetDaysLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThanInput">daysGreaterThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThanInput">daysLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan">daysGreaterThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan">daysLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysGreaterThanInput`<sup>Optional</sup> <a name="daysGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```java
public java.lang.Number getDaysGreaterThanInput();
```

- *Type:* java.lang.Number

---

##### `daysLessThanInput`<sup>Optional</sup> <a name="daysLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```java
public java.lang.Number getDaysLessThanInput();
```

- *Type:* java.lang.Number

---

##### `daysGreaterThan`<sup>Required</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```java
public java.lang.Number getDaysGreaterThan();
```

- *Type:* java.lang.Number

---

##### `daysLessThan`<sup>Required</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan"></a>

```java
public java.lang.Number getDaysLessThan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterMatchObjectAge getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

---


### S3StorageLensGroupFilterMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterMatchObjectSizeOutputReference;

new S3StorageLensGroupFilterMatchObjectSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesGreaterThan">resetBytesGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesLessThan">resetBytesLessThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytesGreaterThan` <a name="resetBytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```java
public void resetBytesGreaterThan()
```

##### `resetBytesLessThan` <a name="resetBytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```java
public void resetBytesLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThanInput">bytesGreaterThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThanInput">bytesLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan">bytesLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytesGreaterThanInput`<sup>Optional</sup> <a name="bytesGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```java
public java.lang.Number getBytesGreaterThanInput();
```

- *Type:* java.lang.Number

---

##### `bytesLessThanInput`<sup>Optional</sup> <a name="bytesLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```java
public java.lang.Number getBytesLessThanInput();
```

- *Type:* java.lang.Number

---

##### `bytesGreaterThan`<sup>Required</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```java
public java.lang.Number getBytesGreaterThan();
```

- *Type:* java.lang.Number

---

##### `bytesLessThan`<sup>Required</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```java
public java.lang.Number getBytesLessThan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterMatchObjectSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

---


### S3StorageLensGroupFilterOrMatchAnyTagList <a name="S3StorageLensGroupFilterOrMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrMatchAnyTagList;

new S3StorageLensGroupFilterOrMatchAnyTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get"></a>

```java
public S3StorageLensGroupFilterOrMatchAnyTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterOrMatchAnyTag> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>>

---


### S3StorageLensGroupFilterOrMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterOrMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrMatchAnyTagOutputReference;

new S3StorageLensGroupFilterOrMatchAnyTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterOrMatchAnyTag getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>

---


### S3StorageLensGroupFilterOrMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterOrMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference;

new S3StorageLensGroupFilterOrMatchObjectAgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysGreaterThan">resetDaysGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysLessThan">resetDaysLessThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysGreaterThan` <a name="resetDaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```java
public void resetDaysGreaterThan()
```

##### `resetDaysLessThan` <a name="resetDaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```java
public void resetDaysLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThanInput">daysGreaterThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThanInput">daysLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan">daysGreaterThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan">daysLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysGreaterThanInput`<sup>Optional</sup> <a name="daysGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```java
public java.lang.Number getDaysGreaterThanInput();
```

- *Type:* java.lang.Number

---

##### `daysLessThanInput`<sup>Optional</sup> <a name="daysLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```java
public java.lang.Number getDaysLessThanInput();
```

- *Type:* java.lang.Number

---

##### `daysGreaterThan`<sup>Required</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```java
public java.lang.Number getDaysGreaterThan();
```

- *Type:* java.lang.Number

---

##### `daysLessThan`<sup>Required</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan"></a>

```java
public java.lang.Number getDaysLessThan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterOrMatchObjectAge getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

---


### S3StorageLensGroupFilterOrMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterOrMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference;

new S3StorageLensGroupFilterOrMatchObjectSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesGreaterThan">resetBytesGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesLessThan">resetBytesLessThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytesGreaterThan` <a name="resetBytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```java
public void resetBytesGreaterThan()
```

##### `resetBytesLessThan` <a name="resetBytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```java
public void resetBytesLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThanInput">bytesGreaterThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThanInput">bytesLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan">bytesLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytesGreaterThanInput`<sup>Optional</sup> <a name="bytesGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```java
public java.lang.Number getBytesGreaterThanInput();
```

- *Type:* java.lang.Number

---

##### `bytesLessThanInput`<sup>Optional</sup> <a name="bytesLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```java
public java.lang.Number getBytesLessThanInput();
```

- *Type:* java.lang.Number

---

##### `bytesGreaterThan`<sup>Required</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```java
public java.lang.Number getBytesGreaterThan();
```

- *Type:* java.lang.Number

---

##### `bytesLessThan`<sup>Required</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```java
public java.lang.Number getBytesLessThan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterOrMatchObjectSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

---


### S3StorageLensGroupFilterOrOutputReference <a name="S3StorageLensGroupFilterOrOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOrOutputReference;

new S3StorageLensGroupFilterOrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag">putMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge">putMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize">putMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyPrefix">resetMatchAnyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnySuffix">resetMatchAnySuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyTag">resetMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectAge">resetMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectSize">resetMatchObjectSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchAnyTag` <a name="putMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag"></a>

```java
public void putMatchAnyTag(IResolvable|java.util.List<S3StorageLensGroupFilterOrMatchAnyTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>>

---

##### `putMatchObjectAge` <a name="putMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge"></a>

```java
public void putMatchObjectAge(S3StorageLensGroupFilterOrMatchObjectAge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

---

##### `putMatchObjectSize` <a name="putMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize"></a>

```java
public void putMatchObjectSize(S3StorageLensGroupFilterOrMatchObjectSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

---

##### `resetMatchAnyPrefix` <a name="resetMatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyPrefix"></a>

```java
public void resetMatchAnyPrefix()
```

##### `resetMatchAnySuffix` <a name="resetMatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnySuffix"></a>

```java
public void resetMatchAnySuffix()
```

##### `resetMatchAnyTag` <a name="resetMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyTag"></a>

```java
public void resetMatchAnyTag()
```

##### `resetMatchObjectAge` <a name="resetMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectAge"></a>

```java
public void resetMatchObjectAge()
```

##### `resetMatchObjectSize` <a name="resetMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectSize"></a>

```java
public void resetMatchObjectSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTag">matchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList">S3StorageLensGroupFilterOrMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference">S3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference">S3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefixInput">matchAnyPrefixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffixInput">matchAnySuffixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTagInput">matchAnyTagInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAgeInput">matchObjectAgeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSizeInput">matchObjectSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix">matchAnySuffix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchAnyTag`<sup>Required</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTag"></a>

```java
public S3StorageLensGroupFilterOrMatchAnyTagList getMatchAnyTag();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList">S3StorageLensGroupFilterOrMatchAnyTagList</a>

---

##### `matchObjectAge`<sup>Required</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAge"></a>

```java
public S3StorageLensGroupFilterOrMatchObjectAgeOutputReference getMatchObjectAge();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference">S3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a>

---

##### `matchObjectSize`<sup>Required</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSize"></a>

```java
public S3StorageLensGroupFilterOrMatchObjectSizeOutputReference getMatchObjectSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference">S3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a>

---

##### `matchAnyPrefixInput`<sup>Optional</sup> <a name="matchAnyPrefixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefixInput"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnySuffixInput`<sup>Optional</sup> <a name="matchAnySuffixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffixInput"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnyTagInput`<sup>Optional</sup> <a name="matchAnyTagInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTagInput"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterOrMatchAnyTag> getMatchAnyTagInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>>

---

##### `matchObjectAgeInput`<sup>Optional</sup> <a name="matchObjectAgeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAgeInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterOrMatchObjectAge getMatchObjectAgeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

---

##### `matchObjectSizeInput`<sup>Optional</sup> <a name="matchObjectSizeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSizeInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterOrMatchObjectSize getMatchObjectSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

---

##### `matchAnyPrefix`<sup>Required</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnySuffix`<sup>Required</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilterOr getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

---


### S3StorageLensGroupFilterOutputReference <a name="S3StorageLensGroupFilterOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupFilterOutputReference;

new S3StorageLensGroupFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag">putMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge">putMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize">putMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyPrefix">resetMatchAnyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnySuffix">resetMatchAnySuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyTag">resetMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectAge">resetMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectSize">resetMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetOr">resetOr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd"></a>

```java
public void putAnd(S3StorageLensGroupFilterAnd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

---

##### `putMatchAnyTag` <a name="putMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag"></a>

```java
public void putMatchAnyTag(IResolvable|java.util.List<S3StorageLensGroupFilterMatchAnyTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>>

---

##### `putMatchObjectAge` <a name="putMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge"></a>

```java
public void putMatchObjectAge(S3StorageLensGroupFilterMatchObjectAge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

---

##### `putMatchObjectSize` <a name="putMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize"></a>

```java
public void putMatchObjectSize(S3StorageLensGroupFilterMatchObjectSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

---

##### `putOr` <a name="putOr" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr"></a>

```java
public void putOr(S3StorageLensGroupFilterOr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetAnd"></a>

```java
public void resetAnd()
```

##### `resetMatchAnyPrefix` <a name="resetMatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyPrefix"></a>

```java
public void resetMatchAnyPrefix()
```

##### `resetMatchAnySuffix` <a name="resetMatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnySuffix"></a>

```java
public void resetMatchAnySuffix()
```

##### `resetMatchAnyTag` <a name="resetMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyTag"></a>

```java
public void resetMatchAnyTag()
```

##### `resetMatchObjectAge` <a name="resetMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectAge"></a>

```java
public void resetMatchObjectAge()
```

##### `resetMatchObjectSize` <a name="resetMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectSize"></a>

```java
public void resetMatchObjectSize()
```

##### `resetOr` <a name="resetOr" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetOr"></a>

```java
public void resetOr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference">S3StorageLensGroupFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTag">matchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList">S3StorageLensGroupFilterMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference">S3StorageLensGroupFilterMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference">S3StorageLensGroupFilterMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.or">or</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference">S3StorageLensGroupFilterOrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.andInput">andInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefixInput">matchAnyPrefixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffixInput">matchAnySuffixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTagInput">matchAnyTagInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAgeInput">matchObjectAgeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSizeInput">matchObjectSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.orInput">orInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffix">matchAnySuffix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.and"></a>

```java
public S3StorageLensGroupFilterAndOutputReference getAnd();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference">S3StorageLensGroupFilterAndOutputReference</a>

---

##### `matchAnyTag`<sup>Required</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTag"></a>

```java
public S3StorageLensGroupFilterMatchAnyTagList getMatchAnyTag();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList">S3StorageLensGroupFilterMatchAnyTagList</a>

---

##### `matchObjectAge`<sup>Required</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAge"></a>

```java
public S3StorageLensGroupFilterMatchObjectAgeOutputReference getMatchObjectAge();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference">S3StorageLensGroupFilterMatchObjectAgeOutputReference</a>

---

##### `matchObjectSize`<sup>Required</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSize"></a>

```java
public S3StorageLensGroupFilterMatchObjectSizeOutputReference getMatchObjectSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference">S3StorageLensGroupFilterMatchObjectSizeOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.or"></a>

```java
public S3StorageLensGroupFilterOrOutputReference getOr();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference">S3StorageLensGroupFilterOrOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.andInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterAnd getAndInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

---

##### `matchAnyPrefixInput`<sup>Optional</sup> <a name="matchAnyPrefixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefixInput"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnySuffixInput`<sup>Optional</sup> <a name="matchAnySuffixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffixInput"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnyTagInput`<sup>Optional</sup> <a name="matchAnyTagInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTagInput"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupFilterMatchAnyTag> getMatchAnyTagInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>>

---

##### `matchObjectAgeInput`<sup>Optional</sup> <a name="matchObjectAgeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAgeInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterMatchObjectAge getMatchObjectAgeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

---

##### `matchObjectSizeInput`<sup>Optional</sup> <a name="matchObjectSizeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSizeInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterMatchObjectSize getMatchObjectSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.orInput"></a>

```java
public IResolvable|S3StorageLensGroupFilterOr getOrInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

---

##### `matchAnyPrefix`<sup>Required</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchAnyPrefix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchAnySuffix`<sup>Required</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffix"></a>

```java
public java.util.List<java.lang.String> getMatchAnySuffix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

---


### S3StorageLensGroupTagsList <a name="S3StorageLensGroupTagsList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupTagsList;

new S3StorageLensGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get"></a>

```java
public S3StorageLensGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3StorageLensGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>>

---


### S3StorageLensGroupTagsOutputReference <a name="S3StorageLensGroupTagsOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_storage_lens_group.S3StorageLensGroupTagsOutputReference;

new S3StorageLensGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3StorageLensGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>

---



