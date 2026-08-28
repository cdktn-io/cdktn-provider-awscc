# `cloudfrontKeyValueStore` Submodule <a name="`cloudfrontKeyValueStore` Submodule" id="@cdktn/provider-awscc.cloudfrontKeyValueStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontKeyValueStore <a name="CloudfrontKeyValueStore" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store awscc_cloudfront_key_value_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStore;

CloudfrontKeyValueStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .importSource(CloudfrontKeyValueStoreImportSource)
//  .tags(IResolvable|java.util.List<CloudfrontKeyValueStoreTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | A comment to describe the Key Value Store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.importSource">importSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a></code> | The import source for the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#name CloudfrontKeyValueStore#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

A comment to describe the Key Value Store.

Omitting `Comment` from the template during updates will clear the existing comment (set to empty string). To preserve an existing comment, you must explicitly include it in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#comment CloudfrontKeyValueStore#comment}

---

##### `importSource`<sup>Optional</sup> <a name="importSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.importSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

The import source for the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#import_source CloudfrontKeyValueStore#import_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#tags CloudfrontKeyValueStore#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putImportSource">putImportSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetImportSource">resetImportSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImportSource` <a name="putImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putImportSource"></a>

```java
public void putImportSource(CloudfrontKeyValueStoreImportSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putImportSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudfrontKeyValueStoreTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetComment"></a>

```java
public void resetComment()
```

##### `resetImportSource` <a name="resetImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetImportSource"></a>

```java
public void resetImportSource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontKeyValueStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStore;

CloudfrontKeyValueStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStore;

CloudfrontKeyValueStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStore;

CloudfrontKeyValueStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStore;

CloudfrontKeyValueStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontKeyValueStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontKeyValueStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontKeyValueStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontKeyValueStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontKeyValueStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSource">importSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference">CloudfrontKeyValueStoreImportSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.keyValueStoreId">keyValueStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList">CloudfrontKeyValueStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSourceInput">importSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importSource`<sup>Required</sup> <a name="importSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSource"></a>

```java
public CloudfrontKeyValueStoreImportSourceOutputReference getImportSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference">CloudfrontKeyValueStoreImportSourceOutputReference</a>

---

##### `keyValueStoreId`<sup>Required</sup> <a name="keyValueStoreId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.keyValueStoreId"></a>

```java
public java.lang.String getKeyValueStoreId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tags"></a>

```java
public CloudfrontKeyValueStoreTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList">CloudfrontKeyValueStoreTagsList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `importSourceInput`<sup>Optional</sup> <a name="importSourceInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSourceInput"></a>

```java
public IResolvable|CloudfrontKeyValueStoreImportSource getImportSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudfrontKeyValueStoreTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontKeyValueStoreConfig <a name="CloudfrontKeyValueStoreConfig" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStoreConfig;

CloudfrontKeyValueStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .importSource(CloudfrontKeyValueStoreImportSource)
//  .tags(IResolvable|java.util.List<CloudfrontKeyValueStoreTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | A comment to describe the Key Value Store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.importSource">importSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a></code> | The import source for the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#name CloudfrontKeyValueStore#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A comment to describe the Key Value Store.

Omitting `Comment` from the template during updates will clear the existing comment (set to empty string). To preserve an existing comment, you must explicitly include it in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#comment CloudfrontKeyValueStore#comment}

---

##### `importSource`<sup>Optional</sup> <a name="importSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.importSource"></a>

```java
public CloudfrontKeyValueStoreImportSource getImportSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

The import source for the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#import_source CloudfrontKeyValueStore#import_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudfrontKeyValueStoreTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#tags CloudfrontKeyValueStore#tags}

---

### CloudfrontKeyValueStoreImportSource <a name="CloudfrontKeyValueStoreImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStoreImportSource;

CloudfrontKeyValueStoreImportSource.builder()
//  .sourceArn(java.lang.String)
//  .sourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the import source for the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | The source type of the import source for the key value store. |

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the import source for the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#source_arn CloudfrontKeyValueStore#source_arn}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

The source type of the import source for the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_value_store#source_type CloudfrontKeyValueStore#source_type}

---

### CloudfrontKeyValueStoreTags <a name="CloudfrontKeyValueStoreTags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStoreTags;

CloudfrontKeyValueStoreTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.key">key</a></code> | <code>java.lang.String</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.value">value</a></code> | <code>java.lang.String</code> | A string that contains an optional ``Tag`` value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontKeyValueStoreImportSourceOutputReference <a name="CloudfrontKeyValueStoreImportSourceOutputReference" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStoreImportSourceOutputReference;

new CloudfrontKeyValueStoreImportSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceArn">resetSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceType">resetSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceArn"></a>

```java
public void resetSourceArn()
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceType"></a>

```java
public void resetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontKeyValueStoreImportSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

---


### CloudfrontKeyValueStoreTagsList <a name="CloudfrontKeyValueStoreTagsList" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStoreTagsList;

new CloudfrontKeyValueStoreTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.get"></a>

```java
public CloudfrontKeyValueStoreTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontKeyValueStoreTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>>

---


### CloudfrontKeyValueStoreTagsOutputReference <a name="CloudfrontKeyValueStoreTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_key_value_store.CloudfrontKeyValueStoreTagsOutputReference;

new CloudfrontKeyValueStoreTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontKeyValueStoreTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>

---



