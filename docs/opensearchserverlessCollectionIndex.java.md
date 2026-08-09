# `opensearchserverlessCollectionIndex` Submodule <a name="`opensearchserverlessCollectionIndex` Submodule" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollectionIndex <a name="OpensearchserverlessCollectionIndex" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index awscc_opensearchserverless_collection_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection_index.OpensearchserverlessCollectionIndex;

OpensearchserverlessCollectionIndex.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionIndexId(java.lang.String)
    .indexName(java.lang.String)
//  .indexSchema(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.collectionIndexId">collectionIndexId</a></code> | <code>java.lang.String</code> | The identifier of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.indexName">indexName</a></code> | <code>java.lang.String</code> | The name of the collection index. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.indexSchema">indexSchema</a></code> | <code>java.lang.String</code> | The Mappings for the collection index. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionIndexId`<sup>Required</sup> <a name="collectionIndexId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.collectionIndexId"></a>

- *Type:* java.lang.String

The identifier of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index#collection_index_id OpensearchserverlessCollectionIndex#collection_index_id}

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.indexName"></a>

- *Type:* java.lang.String

The name of the collection index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index#index_name OpensearchserverlessCollectionIndex#index_name}

---

##### `indexSchema`<sup>Optional</sup> <a name="indexSchema" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.Initializer.parameter.indexSchema"></a>

- *Type:* java.lang.String

The Mappings for the collection index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index#index_schema OpensearchserverlessCollectionIndex#index_schema}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.resetIndexSchema">resetIndexSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetIndexSchema` <a name="resetIndexSchema" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.resetIndexSchema"></a>

```java
public void resetIndexSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollectionIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isConstruct"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection_index.OpensearchserverlessCollectionIndex;

OpensearchserverlessCollectionIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection_index.OpensearchserverlessCollectionIndex;

OpensearchserverlessCollectionIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection_index.OpensearchserverlessCollectionIndex;

OpensearchserverlessCollectionIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection_index.OpensearchserverlessCollectionIndex;

OpensearchserverlessCollectionIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchserverlessCollectionIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchserverlessCollectionIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchserverlessCollectionIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchserverlessCollectionIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollectionIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.collectionIndexIdInput">collectionIndexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexSchemaInput">indexSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.collectionIndexId">collectionIndexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexSchema">indexSchema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `collectionIndexIdInput`<sup>Optional</sup> <a name="collectionIndexIdInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.collectionIndexIdInput"></a>

```java
public java.lang.String getCollectionIndexIdInput();
```

- *Type:* java.lang.String

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `indexSchemaInput`<sup>Optional</sup> <a name="indexSchemaInput" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexSchemaInput"></a>

```java
public java.lang.String getIndexSchemaInput();
```

- *Type:* java.lang.String

---

##### `collectionIndexId`<sup>Required</sup> <a name="collectionIndexId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.collectionIndexId"></a>

```java
public java.lang.String getCollectionIndexId();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `indexSchema`<sup>Required</sup> <a name="indexSchema" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.indexSchema"></a>

```java
public java.lang.String getIndexSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionIndexConfig <a name="OpensearchserverlessCollectionIndexConfig" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_collection_index.OpensearchserverlessCollectionIndexConfig;

OpensearchserverlessCollectionIndexConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionIndexId(java.lang.String)
    .indexName(java.lang.String)
//  .indexSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.collectionIndexId">collectionIndexId</a></code> | <code>java.lang.String</code> | The identifier of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.indexName">indexName</a></code> | <code>java.lang.String</code> | The name of the collection index. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.indexSchema">indexSchema</a></code> | <code>java.lang.String</code> | The Mappings for the collection index. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionIndexId`<sup>Required</sup> <a name="collectionIndexId" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.collectionIndexId"></a>

```java
public java.lang.String getCollectionIndexId();
```

- *Type:* java.lang.String

The identifier of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index#collection_index_id OpensearchserverlessCollectionIndex#collection_index_id}

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

The name of the collection index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index#index_name OpensearchserverlessCollectionIndex#index_name}

---

##### `indexSchema`<sup>Optional</sup> <a name="indexSchema" id="@cdktn/provider-awscc.opensearchserverlessCollectionIndex.OpensearchserverlessCollectionIndexConfig.property.indexSchema"></a>

```java
public java.lang.String getIndexSchema();
```

- *Type:* java.lang.String

The Mappings for the collection index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_collection_index#index_schema OpensearchserverlessCollectionIndex#index_schema}

---



