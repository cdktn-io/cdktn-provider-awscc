# `elasticacheSnapshot` Submodule <a name="`elasticacheSnapshot` Submodule" id="@cdktn/provider-awscc.elasticacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheSnapshot <a name="ElasticacheSnapshot" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot awscc_elasticache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshot;

ElasticacheSnapshot.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .snapshotName(java.lang.String)
//  .cacheClusterId(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .replicationGroupId(java.lang.String)
//  .tags(IResolvable|java.util.List<ElasticacheSnapshotTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of a snapshot. Must be unique within the customer account. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | The identifier of an existing replication group to create a snapshot from. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>></code> | A list of tags to be added to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

The name of a snapshot. Must be unique within the customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#snapshot_name ElasticacheSnapshot#snapshot_name}

---

##### `cacheClusterId`<sup>Optional</sup> <a name="cacheClusterId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.cacheClusterId"></a>

- *Type:* java.lang.String

The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#cache_cluster_id ElasticacheSnapshot#cache_cluster_id}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The ID of the KMS key used to encrypt the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#kms_key_id ElasticacheSnapshot#kms_key_id}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.replicationGroupId"></a>

- *Type:* java.lang.String

The identifier of an existing replication group to create a snapshot from.

The snapshot is created from this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#replication_group_id ElasticacheSnapshot#replication_group_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>>

A list of tags to be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#tags ElasticacheSnapshot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetCacheClusterId">resetCacheClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetReplicationGroupId">resetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ElasticacheSnapshotTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>>

---

##### `resetCacheClusterId` <a name="resetCacheClusterId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetCacheClusterId"></a>

```java
public void resetCacheClusterId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetReplicationGroupId` <a name="resetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetReplicationGroupId"></a>

```java
public void resetReplicationGroupId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshot;

ElasticacheSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshot;

ElasticacheSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshot;

ElasticacheSnapshot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshot;

ElasticacheSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticacheSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticacheSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.automaticFailover">automaticFailover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterCreateTime">cacheClusterCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheNodeType">cacheNodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dataTiering">dataTiering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.nodeSnapshots">nodeSnapshots</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList">ElasticacheSnapshotNodeSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numCacheNodes">numCacheNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredAvailabilityZone">preferredAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotSource">snapshotSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotStatus">snapshotStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList">ElasticacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterIdInput">cacheClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `automaticFailover`<sup>Required</sup> <a name="automaticFailover" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.automaticFailover"></a>

```java
public java.lang.String getAutomaticFailover();
```

- *Type:* java.lang.String

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.autoMinorVersionUpgrade"></a>

```java
public IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="cacheClusterCreateTime" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterCreateTime"></a>

```java
public java.lang.String getCacheClusterCreateTime();
```

- *Type:* java.lang.String

---

##### `cacheNodeType`<sup>Required</sup> <a name="cacheNodeType" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheNodeType"></a>

```java
public java.lang.String getCacheNodeType();
```

- *Type:* java.lang.String

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheParameterGroupName"></a>

```java
public java.lang.String getCacheParameterGroupName();
```

- *Type:* java.lang.String

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheSubnetGroupName"></a>

```java
public java.lang.String getCacheSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `dataTiering`<sup>Required</sup> <a name="dataTiering" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.dataTiering"></a>

```java
public java.lang.String getDataTiering();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nodeSnapshots`<sup>Required</sup> <a name="nodeSnapshots" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.nodeSnapshots"></a>

```java
public ElasticacheSnapshotNodeSnapshotsList getNodeSnapshots();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList">ElasticacheSnapshotNodeSnapshotsList</a>

---

##### `numCacheNodes`<sup>Required</sup> <a name="numCacheNodes" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numCacheNodes"></a>

```java
public java.lang.Number getNumCacheNodes();
```

- *Type:* java.lang.Number

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.numNodeGroups"></a>

```java
public java.lang.Number getNumNodeGroups();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="preferredAvailabilityZone" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredAvailabilityZone"></a>

```java
public java.lang.String getPreferredAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupDescription"></a>

```java
public java.lang.String getReplicationGroupDescription();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

---

##### `snapshotSource`<sup>Required</sup> <a name="snapshotSource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotSource"></a>

```java
public java.lang.String getSnapshotSource();
```

- *Type:* java.lang.String

---

##### `snapshotStatus`<sup>Required</sup> <a name="snapshotStatus" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotStatus"></a>

```java
public java.lang.String getSnapshotStatus();
```

- *Type:* java.lang.String

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tags"></a>

```java
public ElasticacheSnapshotTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList">ElasticacheSnapshotTagsList</a>

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `cacheClusterIdInput`<sup>Optional</sup> <a name="cacheClusterIdInput" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterIdInput"></a>

```java
public java.lang.String getCacheClusterIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupIdInput"></a>

```java
public java.lang.String getReplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ElasticacheSnapshotTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>>

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.cacheClusterId"></a>

```java
public java.lang.String getCacheClusterId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheSnapshotConfig <a name="ElasticacheSnapshotConfig" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshotConfig;

ElasticacheSnapshotConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .snapshotName(java.lang.String)
//  .cacheClusterId(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .replicationGroupId(java.lang.String)
//  .tags(IResolvable|java.util.List<ElasticacheSnapshotTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of a snapshot. Must be unique within the customer account. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | The identifier of an existing replication group to create a snapshot from. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>></code> | A list of tags to be added to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The name of a snapshot. Must be unique within the customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#snapshot_name ElasticacheSnapshot#snapshot_name}

---

##### `cacheClusterId`<sup>Optional</sup> <a name="cacheClusterId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.cacheClusterId"></a>

```java
public java.lang.String getCacheClusterId();
```

- *Type:* java.lang.String

The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#cache_cluster_id ElasticacheSnapshot#cache_cluster_id}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID of the KMS key used to encrypt the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#kms_key_id ElasticacheSnapshot#kms_key_id}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

The identifier of an existing replication group to create a snapshot from.

The snapshot is created from this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#replication_group_id ElasticacheSnapshot#replication_group_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ElasticacheSnapshotTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>>

A list of tags to be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#tags ElasticacheSnapshot#tags}

---

### ElasticacheSnapshotNodeSnapshots <a name="ElasticacheSnapshotNodeSnapshots" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshotNodeSnapshots;

ElasticacheSnapshotNodeSnapshots.builder()
    .build();
```


### ElasticacheSnapshotTags <a name="ElasticacheSnapshotTags" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshotTags;

ElasticacheSnapshotTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#key ElasticacheSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/elasticache_snapshot#value ElasticacheSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheSnapshotNodeSnapshotsList <a name="ElasticacheSnapshotNodeSnapshotsList" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshotNodeSnapshotsList;

new ElasticacheSnapshotNodeSnapshotsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.get"></a>

```java
public ElasticacheSnapshotNodeSnapshotsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ElasticacheSnapshotNodeSnapshotsOutputReference <a name="ElasticacheSnapshotNodeSnapshotsOutputReference" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshotNodeSnapshotsOutputReference;

new ElasticacheSnapshotNodeSnapshotsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeCreateTime">cacheNodeCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeId">cacheNodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheSize">cacheSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.nodeGroupId">nodeGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.snapshotCreateTime">snapshotCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots">ElasticacheSnapshotNodeSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheClusterId"></a>

```java
public java.lang.String getCacheClusterId();
```

- *Type:* java.lang.String

---

##### `cacheNodeCreateTime`<sup>Required</sup> <a name="cacheNodeCreateTime" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeCreateTime"></a>

```java
public java.lang.String getCacheNodeCreateTime();
```

- *Type:* java.lang.String

---

##### `cacheNodeId`<sup>Required</sup> <a name="cacheNodeId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeId"></a>

```java
public java.lang.String getCacheNodeId();
```

- *Type:* java.lang.String

---

##### `cacheSize`<sup>Required</sup> <a name="cacheSize" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheSize"></a>

```java
public java.lang.String getCacheSize();
```

- *Type:* java.lang.String

---

##### `nodeGroupId`<sup>Required</sup> <a name="nodeGroupId" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.nodeGroupId"></a>

```java
public java.lang.String getNodeGroupId();
```

- *Type:* java.lang.String

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="snapshotCreateTime" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.snapshotCreateTime"></a>

```java
public java.lang.String getSnapshotCreateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshotsOutputReference.property.internalValue"></a>

```java
public ElasticacheSnapshotNodeSnapshots getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotNodeSnapshots">ElasticacheSnapshotNodeSnapshots</a>

---


### ElasticacheSnapshotTagsList <a name="ElasticacheSnapshotTagsList" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshotTagsList;

new ElasticacheSnapshotTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.get"></a>

```java
public ElasticacheSnapshotTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheSnapshotTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>>

---


### ElasticacheSnapshotTagsOutputReference <a name="ElasticacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_snapshot.ElasticacheSnapshotTagsOutputReference;

new ElasticacheSnapshotTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheSnapshotTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheSnapshot.ElasticacheSnapshotTags">ElasticacheSnapshotTags</a>

---



